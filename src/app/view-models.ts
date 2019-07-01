import { TemplateRef } from '@angular/core';

export interface SlideData {
    backgroundImage: string;
    caption: string;
    description: string;
  }

export interface SlideDefinition{
    label: TemplateRef<any>;
    data: SlideData;
}