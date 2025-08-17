import React, { useEffect, useRef, useCallback, useMemo } from "react";
import { gsap } from "gsap";

export interface TargetCursorProps {
  targetSelector?: string;
  spinDuration?: number;
  hideDefaultCursor?: boolean;
}

const TargetCursor: React.FC<TargetCursorProps> = ({
  targetSelector = ".cursor-target",
  spinDuration = 2,
  hideDefaultCursor = true,
}) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cornersRef = useRef<NodeListOf<HTMLDivElement> | null>(null);
  const spinTl = useRef<gsap.core.Timeline | null>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const constants = useMemo(
    () => ({
      borderWidth: 3,
      cornerSize: 12,
      parallaxStrength: 0.00005,
    }),
    []
  );

  const moveCursor = useCallback((x: number, y: number, magnetic = false) => {
    if (!cursorRef.current) return;
    
    // Enhanced cursor movement with trail effect
    gsap.to(cursorRef.current, {
      x,
      y,
      duration: magnetic ? 0.2 : 0.08,
      ease: magnetic ? "power2.out" : "power3.out",
    });

    // Create trailing effect
    if (trailsRef.current.length > 0) {
      trailsRef.current.forEach((trail, index) => {
        if (trail) {
          const delay = (index + 1) * 0.02;
          gsap.to(trail, {
            x,
            y,
            duration: 0.15 + delay,
            ease: "power2.out",
            delay: delay,
          });
        }
      });
    }
  }, []);

  const detectElementType = useCallback((element: Element): CursorState => {
    if (element.tagName === 'BUTTON' || element.classList.contains('btn')) return 'button';
    if (element.tagName === 'A' || element.classList.contains('link')) return 'link';
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') return 'text';
    if (element.classList.contains('cursor-target')) return 'hover';
    return 'idle';
  }, []);

  const updateCursorState = useCallback((newState: CursorState) => {
    if (newState === cursorState) return;
    
    setCursorState(newState);
    
    if (!cursorRef.current || !dotRef.current || !outerRingRef.current) return;

    // State-based animations
    switch (newState) {
      case 'hover':
        gsap.to(cursorRef.current, { scale: scaleOnHover, duration: 0.3, ease: "back.out(1.7)" });
        gsap.to(dotRef.current, { scale: 1.5, duration: 0.3 });
        gsap.to(outerRingRef.current, { opacity: 1, scale: 1.2, duration: 0.3 });
        break;
      case 'button':
        gsap.to(cursorRef.current, { scale: 0.8, duration: 0.3 });
        gsap.to(dotRef.current, { scale: 2, duration: 0.3 });
        gsap.to(outerRingRef.current, { opacity: 0.7, scale: 1.5, duration: 0.3 });
        break;
      case 'link':
        gsap.to(cursorRef.current, { scale: 1.1, duration: 0.3 });
        gsap.to(dotRef.current, { scale: 0.5, duration: 0.3 });
        gsap.to(outerRingRef.current, { opacity: 1, scale: 2, duration: 0.3 });
        break;
      case 'text':
        gsap.to(cursorRef.current, { scaleX: 0.3, scaleY: 1.5, duration: 0.3 });
        gsap.to(dotRef.current, { scale: 0, duration: 0.3 });
        gsap.to(outerRingRef.current, { opacity: 0, duration: 0.3 });
        break;
      default:
        gsap.to(cursorRef.current, { scale: 1, scaleX: 1, scaleY: 1, duration: 0.3 });
        gsap.to(dotRef.current, { scale: 1, duration: 0.3 });
        gsap.to(outerRingRef.current, { opacity: 0.5, scale: 1, duration: 0.3 });
    }
  }, [cursorState, scaleOnHover]);

  const getMagneticEffect = useCallback((mouseX: number, mouseY: number, element: Element) => {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distance = Math.sqrt(
      Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2)
    );
    
    if (distance < constants.magneticRadius) {
      const strength = (1 - distance / constants.magneticRadius) * magneticStrength;
      const deltaX = (centerX - mouseX) * strength;
      const deltaY = (centerY - mouseY) * strength;
      
      return {
        x: mouseX + deltaX,
        y: mouseY + deltaY,
        magnetic: true
      };
    }
    
    return { x: mouseX, y: mouseY, magnetic: false };
  }, [constants.magneticRadius, magneticStrength]);

  useEffect(() => {
    if (!cursorRef.current) return;

    const originalCursor = document.body.style.cursor;
    if (hideDefaultCursor) {
      document.body.style.cursor = 'none';
    }

    const cursor = cursorRef.current;
    cornersRef.current = cursor.querySelectorAll<HTMLDivElement>(
      ".target-cursor-corner"
    );

    let activeTarget: Element | null = null;
    let currentTargetMove: ((ev: Event) => void) | null = null;
    let currentLeaveHandler: (() => void) | null = null;
    let isAnimatingToTarget = false;
    let resumeTimeout: ReturnType<typeof setTimeout> | null = null;

    const cleanupTarget = (target: Element) => {
      if (currentTargetMove) {
        target.removeEventListener("mousemove", currentTargetMove);
      }
      if (currentLeaveHandler) {
        target.removeEventListener("mouseleave", currentLeaveHandler);
      }
      currentTargetMove = null;
      currentLeaveHandler = null;
    };

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    const createSpinTimeline = () => {
      if (spinTl.current) {
        spinTl.current.kill();
      }
      spinTl.current = gsap
        .timeline({ repeat: -1 })
        .to(cursor, { rotation: "+=360", duration: spinDuration, ease: "none" });
    };

    createSpinTimeline();

    const moveHandler = (e: MouseEvent) => {
      // Check for magnetic elements
      const elementsAtPoint = document.elementsFromPoint(e.clientX, e.clientY);
      const magneticElement = elementsAtPoint.find(el => 
        el.classList.contains('cursor-target') || 
        el.tagName === 'BUTTON' || 
        el.tagName === 'A'
      );
      
      if (magneticElement) {
        const { x, y, magnetic } = getMagneticEffect(e.clientX, e.clientY, magneticElement);
        moveCursor(x, y, magnetic);
        updateCursorState(detectElementType(magneticElement));
      } else {
        moveCursor(e.clientX, e.clientY);
        updateCursorState('idle');
      }
    };
    
    window.addEventListener("mousemove", moveHandler);

    const scrollHandler = () => {
      if (!activeTarget || !cursorRef.current) return;
      
      const mouseX = gsap.getProperty(cursorRef.current, "x") as number;
      const mouseY = gsap.getProperty(cursorRef.current, "y") as number;
      
      const elementUnderMouse = document.elementFromPoint(mouseX, mouseY);
      const isStillOverTarget = elementUnderMouse && (
        elementUnderMouse === activeTarget || 
        elementUnderMouse.closest(targetSelector) === activeTarget
      );
      
      if (!isStillOverTarget) {
        if (currentLeaveHandler) {
          currentLeaveHandler();
        }
      }
    };

    window.addEventListener("scroll", scrollHandler, { passive: true });

    // Cursor visibility handlers
    const mouseEnterHandler = () => setIsVisible(true);
    const mouseLeaveHandler = () => setIsVisible(false);
    
    document.addEventListener("mouseenter", mouseEnterHandler);
    document.addEventListener("mouseleave", mouseLeaveHandler);

    //---------------------------------------------------------------
        // This code for onclick animation
    
        window.addEventListener("mousemove", moveHandler);
        const mouseDownHandler = ():void => {
          if (!pulseOnClick) return;
          setCursorState('click');
          
          if (!dotRef.current || !outerRingRef.current) return;
          
          // Enhanced click animation with ripple effect
          gsap.to(dotRef.current, { scale: 0.5, duration: 0.1, ease: "power2.out" });
          gsap.to(cursorRef.current, { scale: 0.85, duration: 0.1, ease: "power2.out" });
          
          // Create ripple effect
          gsap.fromTo(outerRingRef.current, 
            { scale: 1, opacity: 1 },
            { scale: 2.5, opacity: 0, duration: 0.6, ease: "power2.out" }
          );
        };
    
        const mouseUpHandler = ():void => {
          if (!pulseOnClick) return;
          
          if (!dotRef.current) return;
          
          // Bounce back animation
          gsap.to(dotRef.current, { 
            scale: 1.2, 
            duration: 0.15, 
            ease: "back.out(2)",
            onComplete: () => {
              gsap.to(dotRef.current, { scale: 1, duration: 0.2 });
            }
          });
          gsap.to(cursorRef.current, { 
            scale: 1.05, 
            duration: 0.15, 
            ease: "back.out(2)",
            onComplete: () => {
              gsap.to(cursorRef.current, { scale: 1, duration: 0.2 });
            }
          });
          
          // Reset cursor state after click
          setTimeout(() => {
            const elementUnderMouse = document.elementFromPoint(
              gsap.getProperty(cursorRef.current, "x") as number,
              gsap.getProperty(cursorRef.current, "y") as number
            );
            if (elementUnderMouse) {
              updateCursorState(detectElementType(elementUnderMouse));
            } else {
              updateCursorState('idle');
            }
          }, 200);
        };
    
        window.addEventListener("mousedown", mouseDownHandler);
        window.addEventListener("mouseup", mouseUpHandler);
    
        //----------------------------------------------------------------

    const enterHandler = (e: MouseEvent) => {
      const directTarget = e.target as Element;

      const allTargets: Element[] = [];
      let current = directTarget;
      while (current && current !== document.body) {
        if (current.matches(targetSelector)) {
          allTargets.push(current);
        }
        current = current.parentElement!;
      }

      const target = allTargets[0] || null;
      if (!target || !cursorRef.current || !cornersRef.current) return;

      if (activeTarget === target) return;

      if (activeTarget) {
        cleanupTarget(activeTarget);
      }

      if (resumeTimeout) {
        clearTimeout(resumeTimeout);
        resumeTimeout = null;
      }

      activeTarget = target;

      gsap.killTweensOf(cursorRef.current, "rotation");
      spinTl.current?.pause();

      gsap.set(cursorRef.current, { rotation: 0 });

      const updateCorners = (mouseX?: number, mouseY?: number) => {
        const rect = target.getBoundingClientRect();
        const cursorRect = cursorRef.current!.getBoundingClientRect();

        const cursorCenterX = cursorRect.left + cursorRect.width / 2;
        const cursorCenterY = cursorRect.top + cursorRect.height / 2;

        const [tlc, trc, brc, blc] = Array.from(cornersRef.current!);

        const { borderWidth, cornerSize, parallaxStrength } = constants;

        let tlOffset = {
          x: rect.left - cursorCenterX - borderWidth,
          y: rect.top - cursorCenterY - borderWidth,
        };
        let trOffset = {
          x: rect.right - cursorCenterX + borderWidth - cornerSize,
          y: rect.top - cursorCenterY - borderWidth,
        };
        let brOffset = {
          x: rect.right - cursorCenterX + borderWidth - cornerSize,
          y: rect.bottom - cursorCenterY + borderWidth - cornerSize,
        };
        let blOffset = {
          x: rect.left - cursorCenterX - borderWidth,
          y: rect.bottom - cursorCenterY + borderWidth - cornerSize,
        };

        if (mouseX !== undefined && mouseY !== undefined) {
          const targetCenterX = rect.left + rect.width / 2;
          const targetCenterY = rect.top + rect.height / 2;
          const mouseOffsetX = (mouseX - targetCenterX) * parallaxStrength;
          const mouseOffsetY = (mouseY - targetCenterY) * parallaxStrength;

          tlOffset.x += mouseOffsetX;
          tlOffset.y += mouseOffsetY;
          trOffset.x += mouseOffsetX;
          trOffset.y += mouseOffsetY;
          brOffset.x += mouseOffsetX;
          brOffset.y += mouseOffsetY;
          blOffset.x += mouseOffsetX;
          blOffset.y += mouseOffsetY;
        }

        const tl = gsap.timeline();
        const corners = [tlc, trc, brc, blc];
        const offsets = [tlOffset, trOffset, brOffset, blOffset];

        corners.forEach((corner, index) => {
          tl.to(
            corner,
            {
              x: offsets[index].x,
              y: offsets[index].y,
              duration: 0.2,
              ease: "power2.out",
            },
            0
          );
        });
      };

      isAnimatingToTarget = true;
      updateCorners();

      setTimeout(() => {
        isAnimatingToTarget = false;
      }, 1);

      let moveThrottle: number | null = null;
      const targetMove = (ev: Event) => {
        if (moveThrottle || isAnimatingToTarget) return;
        moveThrottle = requestAnimationFrame(() => {
          const mouseEvent = ev as MouseEvent;
          updateCorners(mouseEvent.clientX, mouseEvent.clientY);
          moveThrottle = null;
        });
      };

      const leaveHandler = () => {
        activeTarget = null;
        isAnimatingToTarget = false;

        if (cornersRef.current) {
          const corners = Array.from(cornersRef.current);
          gsap.killTweensOf(corners);

          const { cornerSize } = constants;
          const positions = [
            { x: -cornerSize * 1.5, y: -cornerSize * 1.5 },
            { x: cornerSize * 0.5, y: -cornerSize * 1.5 },
            { x: cornerSize * 0.5, y: cornerSize * 0.5 },
            { x: -cornerSize * 1.5, y: cornerSize * 0.5 },
          ];

          const tl = gsap.timeline();
          corners.forEach((corner, index) => {
            tl.to(
              corner,
              {
                x: positions[index].x,
                y: positions[index].y,
                duration: 0.3,
                ease: "power3.out",
              },
              0
            );
          });
        }

        resumeTimeout = setTimeout(() => {
          if (!activeTarget && cursorRef.current && spinTl.current) {
            const currentRotation = gsap.getProperty(
              cursorRef.current,
              "rotation"
            ) as number;
            const normalizedRotation = currentRotation % 360;

            spinTl.current.kill();
            spinTl.current = gsap
              .timeline({ repeat: -1 })
              .to(cursorRef.current, { rotation: "+=360", duration: spinDuration, ease: "none" });

            gsap.to(cursorRef.current, {
              rotation: normalizedRotation + 360,
              duration: spinDuration * (1 - normalizedRotation / 360),
              ease: "none",
              onComplete: () => {
                spinTl.current?.restart();
              },
            });
          }
          resumeTimeout = null;
        }, 50);

        cleanupTarget(target);
      };

      currentTargetMove = targetMove;
      currentLeaveHandler = leaveHandler;

      target.addEventListener("mousemove", targetMove);
      target.addEventListener("mouseleave", leaveHandler);
    };

    window.addEventListener("mouseover", enterHandler, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("mouseover", enterHandler);
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("mousedown", mouseDownHandler);
      window.removeEventListener("mouseup", mouseUpHandler);
      document.removeEventListener("mouseenter", mouseEnterHandler);
      document.removeEventListener("mouseleave", mouseLeaveHandler);

      if (activeTarget) {
        cleanupTarget(activeTarget);
      }

      spinTl.current?.kill();
      document.body.style.cursor = originalCursor;
    };
  }, [targetSelector, spinDuration, moveCursor, constants, hideDefaultCursor]);

  useEffect(() => {
    if (!cursorRef.current || !spinTl.current) return;
    
    if (spinTl.current.isActive()) {
      spinTl.current.kill();
      spinTl.current = gsap
        .timeline({ repeat: -1 })
        .to(cursorRef.current, { rotation: "+=360", duration: spinDuration, ease: "none" });
    }
  }, [spinDuration]);

  return (
    <div 
      ref={cursorRef} 
      className={`fixed top-0 left-0 w-0 h-0 pointer-events-none z-[9999] mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ willChange: 'transform' }}
    >
      {/* Main dot */}
      <div 
        ref={dotRef}
        className="absolute left-1/2 top-1/2 w-1.5 h-1.5 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg" 
        style={{ willChange: 'transform' }}
      />
      
      {/* Outer ring for enhanced effects */}
      <div 
        ref={outerRingRef}
        className="absolute left-1/2 top-1/2 w-8 h-8 border border-white/30 rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-50" 
        style={{ willChange: 'transform' }}
      />
      
      {/* Trailing dots */}
      {Array.from({ length: constants.trailCount }).map((_, index) => (
        <div
          key={`trail-${index}`}
          ref={(el) => {
            if (el && !trailsRef.current.includes(el)) {
              trailsRef.current[index] = el;
            }
          }}
          className="absolute left-1/2 top-1/2 w-1 h-1 bg-white/60 rounded-full transform -translate-x-1/2 -translate-y-1/2"
          style={{ 
            willChange: 'transform',
            opacity: 1 - (index * 0.15)
          }}
        />
      ))}
      
      {/* Corner brackets */}
      <div 
        className="target-cursor-corner absolute left-1/2 top-1/2 w-3 h-3 border-[3px] border-white transform -translate-x-[150%] -translate-y-[150%] border-r-0 border-b-0" 
        style={{ willChange: 'transform' }}
      />
      <div 
        className="target-cursor-corner absolute left-1/2 top-1/2 w-3 h-3 border-[3px] border-white transform translate-x-1/2 -translate-y-[150%] border-l-0 border-b-0" 
        style={{ willChange: 'transform' }}
      />
      <div 
        className="target-cursor-corner absolute left-1/2 top-1/2 w-3 h-3 border-[3px] border-white transform translate-x-1/2 translate-y-1/2 border-l-0 border-t-0" 
        style={{ willChange: 'transform' }}
      />
      <div 
        className="target-cursor-corner absolute left-1/2 top-1/2 w-3 h-3 border-[3px] border-white transform -translate-x-[150%] translate-y-1/2 border-r-0 border-t-0" 
        style={{ willChange: 'transform' }}
      />
      
      {/* Pulse effect for active states */}
      <div 
        className={`absolute left-1/2 top-1/2 w-6 h-6 border border-white/20 rounded-full transform -translate-x-1/2 -translate-y-1/2 ${
          cursorState === 'hover' ? 'animate-ping' : ''
        }`}
        style={{ willChange: 'transform' }}
      />
    </div>
  );
};

export default TargetCursor;
