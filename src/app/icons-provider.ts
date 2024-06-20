import { EnvironmentProviders, importProvidersFrom } from '@angular/core';
import {
  FileTextOutline,
  FileSearchOutline,
  SendOutline
} from '@ant-design/icons-angular/icons';
import { NzIconModule } from 'ng-zorro-antd/icon';

const icons = [
  FileTextOutline,
  FileSearchOutline,
  SendOutline
];

export function provideNzIcons(): EnvironmentProviders {
  return importProvidersFrom(NzIconModule.forRoot(icons));
}
