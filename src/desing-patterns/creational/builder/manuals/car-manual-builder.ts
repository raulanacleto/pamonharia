import { ManualBuilder } from '../builders/manual-builder';
import { Manual } from './manual';

export class CarManualBuilder implements ManualBuilder {
  public manual: Manual = new Manual();
  buildBodyDescription(): void {
    this.manual.parts.push('body description');
  }

  buildEngineDescription(): void {
    this.manual.parts.push('engine description');
  }

  buildWheelsDescription(): void {
    this.manual.parts.push('wheels description');
  }
  getResult(): Manual {
    return this.manual;
  }
}
