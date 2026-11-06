/**
 * SQUIGGLE UI - CLICK ANIMATION SCRIPT
 * Creates 4 radial sparks radiating away from mouse click with elastic decay.
 */

export class ClickAnimation {
  constructor(target = document.body) {
    this.target = target;
    this.styleSheet = null;
    this.SPARK_ELEMENT_WIDTH = 12;
    this.DISTANCE = 16;
    this.isAnimating = false;
    this.cooldownTime = 120;
    this.handleClick = this.handleClick.bind(this);
    this.init();
  }

  init() {
    if (typeof window === 'undefined') return;
    this.target.addEventListener('pointerdown', this.handleClick);
  }

  createTransformSteps() {
    if (arguments.length === 0) throw new Error('arguments to createTransformSteps should never be empty!');
    const args = Array.from(arguments);
    const result = [args.shift()];
    args.forEach((step, i) => {
      result.push(`${result[i]} ${step}`);
    });
    return result;
  }

  createDynamicAnimation(animName, angle) {
    if (!this.styleSheet) {
      this.styleSheet = document.createElement('style');
      this.styleSheet.type = 'text/css';
      document.head.appendChild(this.styleSheet);
    }
    const [step0, step65, step100] = this.createTransformSteps(
      `translate(-50%, -50%) rotate(${angle}deg) translate(8px, 0px)`,
      `translate(${this.DISTANCE}px, 0px) scale(0.5, 0.75)`,
      `translate(${this.SPARK_ELEMENT_WIDTH / 2}px, 0) scale(0, 0)`
    );
    try {
      this.styleSheet.sheet.insertRule(`@keyframes ${animName} {
        0% { transform: ${step0}; }
        65% { transform: ${step65}; }
        100% { transform: ${step100}; }
      }`, this.styleSheet.sheet.cssRules.length);
    } catch (e) {
      // Rule may already exist
    }
  }

  handleClick(evt) {
    if (0 !== evt.button || evt.ctrlKey || evt.shiftKey || evt.altKey || evt.metaKey) return;
    let el = evt.target;
    while (el && el !== document.body) {
      if (el.hasAttribute && el.hasAttribute('data-click-animation-no')) return;
      el = el.parentElement;
    }
    if (this.isAnimating) return;
    const pos = { x: evt.pageX, y: evt.pageY };
    this.makeBurst(pos);
    this.isAnimating = true;
    setTimeout(() => {
      this.isAnimating = false;
    }, this.cooldownTime);
  }

  makeBurst(pos) {
    for (let i = 1; i < 5; i++) {
      this.makeSpark(pos, -45 * i);
    }
  }

  makeSpark(pos, angle) {
    const spark = document.createElement('div');
    const animName = `sq_spark_disappear_${Math.abs(angle)}`;
    this.createDynamicAnimation(animName, angle);
    spark.classList.add('spark');
    spark.style.left = `${pos.x}px`;
    spark.style.top = `${pos.y}px`;
    spark.style.animation = `${animName} 400ms ease-out both`;
    spark.setAttribute('aria-hidden', 'true');
    document.body.appendChild(spark);
    setTimeout(() => {
      if (spark.parentNode) {
        spark.parentNode.removeChild(spark);
      }
    }, 800);
  }

  destroy() {
    this.target.removeEventListener('pointerdown', this.handleClick);
    if (this.styleSheet && this.styleSheet.parentNode) {
      this.styleSheet.parentNode.removeChild(this.styleSheet);
    }
  }
}

// Auto-initialize if run directly in browser
if (typeof window !== 'undefined') {
  if (!window.__sqClickAnimationInstance) {
    window.__sqClickAnimationInstance = new ClickAnimation();
  }
}

