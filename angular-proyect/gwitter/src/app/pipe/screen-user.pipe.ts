import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "screenUser"
})
export class ScreenUserPipe implements PipeTransform {
  transform(value: string) {
    return `@${value}`;
  }
}
