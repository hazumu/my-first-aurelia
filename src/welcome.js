import {computedFrom} from 'aurelia-framework';

export class Welcome{
  heading = 'Welcome to the Aurelia Navigation App!';
  firstName = 'Hazumu';
  lastName = 'Jo';
  previousValue = this.fullName;

  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  submit(){
    this.previousValue = this.fullName;
    alert(`Welcome, ${this.fullName}!`);
  }

  canDeactivate() {
    if (this.fullName !== this.previousValue) {
      return confirm('Are you sure you want to leave?');
    }
  }
}

export class UpperValueConverter {
  toView(value){
    return value && value.toUpperCase();
  }
}
