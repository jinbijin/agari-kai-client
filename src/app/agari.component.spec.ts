import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AgariComponent } from './agari.component';
import { AgariSidebarComponent } from './modules/sidebar/sidebar.component';

@Component({
  standalone: true,
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'aside[agariSidebar]',
  template: '',
})
class SidebarStubComponent {}

describe('AgariComponent', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [AgariComponent],
    });

    TestBed.overrideComponent(AgariComponent, {
      remove: { imports: [AgariSidebarComponent, RouterModule] },
      add: { imports: [SidebarStubComponent, RouterTestingModule] },
    });

    await TestBed.compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AgariComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
