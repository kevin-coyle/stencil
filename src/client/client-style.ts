import * as d from '../declarations';
import { BUILD } from '@build-conditionals';


export const styles: d.StyleMap = BUILD.style ? new Map() : undefined;

export const rootAppliedStyles: d.RootAppliedStyleMap = BUILD.style ? new WeakMap() : undefined;