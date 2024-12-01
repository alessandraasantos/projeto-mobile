import { ElementRef, Renderer2 } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  let rendererMock: Renderer2;
  let elRefMock: ElementRef;

  beforeEach(() => {
    rendererMock = jasmine.createSpyObj('Renderer2', ['setStyle', 'removeStyle']);
    elRefMock = new ElementRef(document.createElement('div'));
  });

  it('should create an instance', () => {
    const directive = new HighlightDirective(elRefMock, rendererMock);
    expect(directive).toBeTruthy();
  });
});
