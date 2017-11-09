import {Injectable} from '@angular/core';

export interface Layout {
  isCollapsed: boolean;
}

@Injectable()
export class SettingsService {
  private _layout: Layout = null;
  private _loaded: boolean;

  get layout(): Layout {
    if (!this._layout) {
      this._layout = Object.assign(<Layout>{
        isCollapsed: false
      });
    }
    return this._layout;
  }

  setLayout(name: string, value: any): boolean {
    if (typeof this.layout[name] !== 'undefined') {
      this._layout[name] = value;
      return true;
    }
    return false;
  }

  get loadStatus(): boolean {
    if (this._loaded === undefined) {
      this._loaded = false;
    }
    return this._loaded;
  }

  setLoadStatus(value: boolean) {
    this._loaded = value;
  }
}
