class ZenProgress extends HTMLElement {
  dis = false;
  // A getter/setter for an open property.
  get open() {
    return this.hasAttribute("open");
  }

  set open(val) {
    // Reflect the value of the open property as an HTML attribute.
    if (val) {
      this.setAttribute("open", "");
    } else {
      this.removeAttribute("open");
    }
    this.toggleDrawer();
  }

  // A getter/setter for a disabled property.
  get disabled() {
    return this.hasAttribute("disabled");
  }

  set disabled(val) {
    // Reflect the value of the disabled property as an HTML attribute.
    if (val) {
      this.setAttribute("disabled", "");
    } else {
      this.removeAttribute("disabled");
    }
  }

  // Can define constructor arguments if you wish.
  constructor() {
    // If you define a constructor, always call super() first!
    // This is specific to CE and required by the spec.
    super();

    // Setup a click listener on <app-drawer> itself.
    this.addEventListener("click", e => {
      // Don't toggle the drawer if it's disabled.
      // if (this.disabled) {
      //   return;
      // }
      this.toggleDrawer();
    });
    this.innerHTML = "start";
  }

  toggleDrawer() {
    if (this.dis) {
      this.innerHTML = "true";
      console.log(this.dis);
      this.dis = !this.dis;
      console.log(this.dis);
    } else {
      this.innerHTML = "false";
      console.log(this.dis);
      this.dis = !this.dis;
      console.log(this.dis);
    }
  }
}
customElements.define("html-zen-progress", ZenProgress);
