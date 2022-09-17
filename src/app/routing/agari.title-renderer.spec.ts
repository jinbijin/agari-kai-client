import { AgariTitleRenderer } from './agari.title-renderer';
import { TestBed } from '@angular/core/testing';

describe('AgariTitleRenderer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [AgariTitleRenderer] });
  });

  it('should create', () => {
    const titleRenderer = TestBed.inject(AgariTitleRenderer);
    expect(titleRenderer).toBeDefined();
  });

  it('should render application title if no title is supplied', () => {
    const titleRenderer = TestBed.inject(AgariTitleRenderer);
    const title = titleRenderer.renderTitle(undefined);
    expect(title).toBe('agari-kai');
  });

  it('should render application title with title if a title is supplied', () => {
    const titleRenderer = TestBed.inject(AgariTitleRenderer);
    const title = titleRenderer.renderTitle('Test');
    expect(title).toBe('agari-kai \u2013 Test');
  });
});
