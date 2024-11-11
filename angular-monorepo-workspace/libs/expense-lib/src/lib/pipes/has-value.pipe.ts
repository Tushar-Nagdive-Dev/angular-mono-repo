import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hasValue'
})
export class HasValuePipe implements PipeTransform {
  transform(value: any): boolean {
    if (value === null || value === undefined || value === '') {
      return false;  // Null, undefined, or empty string
    }

    if (Array.isArray(value)) {
      return value.length > 0;  // Non-empty array
    }

    if (typeof value === 'object') {
      return Object.keys(value).length > 0;  // Non-empty object
    }

    return true;  // For other types, return true if valid
  }
}
