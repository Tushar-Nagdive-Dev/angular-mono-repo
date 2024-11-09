import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-expense-lib',
  template: `
    <div class="welcome-container">
      <div class="welcome-content">
        <h1>Welcome to Expense Manager</h1>
        <p>Keep track of your spending and take control of your finances.</p>
        <button (click)="onGetStarted()" class="welcome-button">Get Started</button>
      </div>
    </div>
  `,
  styles: `

@media (max-width: 768px) {
  .welcome-content {
    padding: 20px;
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
    .welcome-button {
      padding: 10px 20px;
      font-size: 1rem;
    }
  }
}

  .welcome-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #5e60ce, #7400b8);
  color: #fff;
  font-family: Arial, sans-serif;
}

.welcome-content {
  text-align: center;
  max-width: 600px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

h1 {
  font-size: 2.8rem;
  margin-bottom: 20px;
}

p {
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: #dcdcdc;
}

.welcome-button {
  background-color: #5e60ce;
  color: #fff;
  padding: 12px 30px;
  font-size: 1.1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.welcome-button:hover {
  background-color: #3b41b3;
}

  `
})
export class ExpenseLibComponent {

  constructor(private router: Router) {}

  onGetStarted() {
    this.router.navigate(['/login']); // Replace with your actual dashboard route
  }
}
