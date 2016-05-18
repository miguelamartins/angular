import { IterableDiffers } from './differs/iterable_differs';
import { DefaultIterableDifferFactory } from './differs/default_iterable_differ';
import { KeyValueDiffers } from './differs/keyvalue_differs';
import { DefaultKeyValueDifferFactory } from './differs/default_keyvalue_differ';
import { CONST_EXPR } from 'angular2/src/facade/lang';
export { DefaultKeyValueDifferFactory, KeyValueChangeRecord } from './differs/default_keyvalue_differ';
export { DefaultIterableDifferFactory, CollectionChangeRecord } from './differs/default_iterable_differ';
export { ASTWithSource, AST, AstTransformer, PropertyRead, LiteralArray, ImplicitReceiver } from './parser/ast';
export { Lexer } from './parser/lexer';
export { Parser } from './parser/parser';
export { Locals } from './parser/locals';
export { DehydratedException, ExpressionChangedAfterItHasBeenCheckedException, ChangeDetectionError } from './exceptions';
export { ChangeDetectorDefinition, DebugContext, ChangeDetectorGenConfig } from './interfaces';
export { ChangeDetectionStrategy, CHANGE_DETECTION_STRATEGY_VALUES } from './constants';
export { DynamicProtoChangeDetector } from './proto_change_detector';
export { JitProtoChangeDetector } from './jit_proto_change_detector';
export { BindingRecord, BindingTarget } from './binding_record';
export { DirectiveIndex, DirectiveRecord } from './directive_record';
export { DynamicChangeDetector } from './dynamic_change_detector';
export { ChangeDetectorRef } from './change_detector_ref';
export { IterableDiffers } from './differs/iterable_differs';
export { KeyValueDiffers } from './differs/keyvalue_differs';
export { WrappedValue, SimpleChange } from './change_detection_util';
/**
 * Structural diffing for `Object`s and `Map`s.
 */
export const keyValDiff = CONST_EXPR([CONST_EXPR(new DefaultKeyValueDifferFactory())]);
/**
 * Structural diffing for `Iterable` types such as `Array`s.
 */
export const iterableDiff = CONST_EXPR([CONST_EXPR(new DefaultIterableDifferFactory())]);
export const defaultIterableDiffers = CONST_EXPR(new IterableDiffers(iterableDiff));
export const defaultKeyValueDiffers = CONST_EXPR(new KeyValueDiffers(keyValDiff));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlX2RldGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtQkZIRldSTnoudG1wL2FuZ3VsYXIyL3NyYy9jb3JlL2NoYW5nZV9kZXRlY3Rpb24vY2hhbmdlX2RldGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxFQUFDLGVBQWUsRUFBd0IsTUFBTSw0QkFBNEI7T0FDMUUsRUFBQyw0QkFBNEIsRUFBQyxNQUFNLG1DQUFtQztPQUN2RSxFQUFDLGVBQWUsRUFBd0IsTUFBTSw0QkFBNEI7T0FDMUUsRUFDTCw0QkFBNEIsRUFFN0IsTUFBTSxtQ0FBbUM7T0FDbkMsRUFBQyxVQUFVLEVBQUMsTUFBTSwwQkFBMEI7QUFFbkQsU0FDRSw0QkFBNEIsRUFDNUIsb0JBQW9CLFFBQ2YsbUNBQW1DLENBQUM7QUFDM0MsU0FDRSw0QkFBNEIsRUFDNUIsc0JBQXNCLFFBQ2pCLG1DQUFtQyxDQUFDO0FBQzNDLFNBQ0UsYUFBYSxFQUNiLEdBQUcsRUFDSCxjQUFjLEVBQ2QsWUFBWSxFQUNaLFlBQVksRUFDWixnQkFBZ0IsUUFDWCxjQUFjLENBQUM7QUFFdEIsU0FBUSxLQUFLLFFBQU8sZ0JBQWdCLENBQUM7QUFDckMsU0FBUSxNQUFNLFFBQU8saUJBQWlCLENBQUM7QUFDdkMsU0FBUSxNQUFNLFFBQU8saUJBQWlCLENBQUM7QUFFdkMsU0FDRSxtQkFBbUIsRUFDbkIsK0NBQStDLEVBQy9DLG9CQUFvQixRQUNmLGNBQWMsQ0FBQztBQUN0QixTQUlFLHdCQUF3QixFQUN4QixZQUFZLEVBQ1osdUJBQXVCLFFBQ2xCLGNBQWMsQ0FBQztBQUN0QixTQUFRLHVCQUF1QixFQUFFLGdDQUFnQyxRQUFPLGFBQWEsQ0FBQztBQUN0RixTQUFRLDBCQUEwQixRQUFPLHlCQUF5QixDQUFDO0FBQ25FLFNBQVEsc0JBQXNCLFFBQU8sNkJBQTZCLENBQUM7QUFDbkUsU0FBUSxhQUFhLEVBQUUsYUFBYSxRQUFPLGtCQUFrQixDQUFDO0FBQzlELFNBQVEsY0FBYyxFQUFFLGVBQWUsUUFBTyxvQkFBb0IsQ0FBQztBQUNuRSxTQUFRLHFCQUFxQixRQUFPLDJCQUEyQixDQUFDO0FBQ2hFLFNBQVEsaUJBQWlCLFFBQU8sdUJBQXVCLENBQUM7QUFDeEQsU0FDRSxlQUFlLFFBSVYsNEJBQTRCLENBQUM7QUFDcEMsU0FBUSxlQUFlLFFBQThDLDRCQUE0QixDQUFDO0FBRWxHLFNBQVEsWUFBWSxFQUFFLFlBQVksUUFBTyx5QkFBeUIsQ0FBQztBQUVuRTs7R0FFRztBQUNILE9BQU8sTUFBTSxVQUFVLEdBQ25CLFVBQVUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLDRCQUE0QixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFakU7O0dBRUc7QUFDSCxPQUFPLE1BQU0sWUFBWSxHQUNyQixVQUFVLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSw0QkFBNEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRWpFLE9BQU8sTUFBTSxzQkFBc0IsR0FBRyxVQUFVLENBQUMsSUFBSSxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztBQUVwRixPQUFPLE1BQU0sc0JBQXNCLEdBQUcsVUFBVSxDQUFDLElBQUksZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0l0ZXJhYmxlRGlmZmVycywgSXRlcmFibGVEaWZmZXJGYWN0b3J5fSBmcm9tICcuL2RpZmZlcnMvaXRlcmFibGVfZGlmZmVycyc7XG5pbXBvcnQge0RlZmF1bHRJdGVyYWJsZURpZmZlckZhY3Rvcnl9IGZyb20gJy4vZGlmZmVycy9kZWZhdWx0X2l0ZXJhYmxlX2RpZmZlcic7XG5pbXBvcnQge0tleVZhbHVlRGlmZmVycywgS2V5VmFsdWVEaWZmZXJGYWN0b3J5fSBmcm9tICcuL2RpZmZlcnMva2V5dmFsdWVfZGlmZmVycyc7XG5pbXBvcnQge1xuICBEZWZhdWx0S2V5VmFsdWVEaWZmZXJGYWN0b3J5LFxuICBLZXlWYWx1ZUNoYW5nZVJlY29yZFxufSBmcm9tICcuL2RpZmZlcnMvZGVmYXVsdF9rZXl2YWx1ZV9kaWZmZXInO1xuaW1wb3J0IHtDT05TVF9FWFBSfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuXG5leHBvcnQge1xuICBEZWZhdWx0S2V5VmFsdWVEaWZmZXJGYWN0b3J5LFxuICBLZXlWYWx1ZUNoYW5nZVJlY29yZFxufSBmcm9tICcuL2RpZmZlcnMvZGVmYXVsdF9rZXl2YWx1ZV9kaWZmZXInO1xuZXhwb3J0IHtcbiAgRGVmYXVsdEl0ZXJhYmxlRGlmZmVyRmFjdG9yeSxcbiAgQ29sbGVjdGlvbkNoYW5nZVJlY29yZFxufSBmcm9tICcuL2RpZmZlcnMvZGVmYXVsdF9pdGVyYWJsZV9kaWZmZXInO1xuZXhwb3J0IHtcbiAgQVNUV2l0aFNvdXJjZSxcbiAgQVNULFxuICBBc3RUcmFuc2Zvcm1lcixcbiAgUHJvcGVydHlSZWFkLFxuICBMaXRlcmFsQXJyYXksXG4gIEltcGxpY2l0UmVjZWl2ZXJcbn0gZnJvbSAnLi9wYXJzZXIvYXN0JztcblxuZXhwb3J0IHtMZXhlcn0gZnJvbSAnLi9wYXJzZXIvbGV4ZXInO1xuZXhwb3J0IHtQYXJzZXJ9IGZyb20gJy4vcGFyc2VyL3BhcnNlcic7XG5leHBvcnQge0xvY2Fsc30gZnJvbSAnLi9wYXJzZXIvbG9jYWxzJztcblxuZXhwb3J0IHtcbiAgRGVoeWRyYXRlZEV4Y2VwdGlvbixcbiAgRXhwcmVzc2lvbkNoYW5nZWRBZnRlckl0SGFzQmVlbkNoZWNrZWRFeGNlcHRpb24sXG4gIENoYW5nZURldGVjdGlvbkVycm9yXG59IGZyb20gJy4vZXhjZXB0aW9ucyc7XG5leHBvcnQge1xuICBQcm90b0NoYW5nZURldGVjdG9yLFxuICBDaGFuZ2VEZXRlY3RvcixcbiAgQ2hhbmdlRGlzcGF0Y2hlcixcbiAgQ2hhbmdlRGV0ZWN0b3JEZWZpbml0aW9uLFxuICBEZWJ1Z0NvbnRleHQsXG4gIENoYW5nZURldGVjdG9yR2VuQ29uZmlnXG59IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5leHBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDSEFOR0VfREVURUNUSU9OX1NUUkFURUdZX1ZBTFVFU30gZnJvbSAnLi9jb25zdGFudHMnO1xuZXhwb3J0IHtEeW5hbWljUHJvdG9DaGFuZ2VEZXRlY3Rvcn0gZnJvbSAnLi9wcm90b19jaGFuZ2VfZGV0ZWN0b3InO1xuZXhwb3J0IHtKaXRQcm90b0NoYW5nZURldGVjdG9yfSBmcm9tICcuL2ppdF9wcm90b19jaGFuZ2VfZGV0ZWN0b3InO1xuZXhwb3J0IHtCaW5kaW5nUmVjb3JkLCBCaW5kaW5nVGFyZ2V0fSBmcm9tICcuL2JpbmRpbmdfcmVjb3JkJztcbmV4cG9ydCB7RGlyZWN0aXZlSW5kZXgsIERpcmVjdGl2ZVJlY29yZH0gZnJvbSAnLi9kaXJlY3RpdmVfcmVjb3JkJztcbmV4cG9ydCB7RHluYW1pY0NoYW5nZURldGVjdG9yfSBmcm9tICcuL2R5bmFtaWNfY2hhbmdlX2RldGVjdG9yJztcbmV4cG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWZ9IGZyb20gJy4vY2hhbmdlX2RldGVjdG9yX3JlZic7XG5leHBvcnQge1xuICBJdGVyYWJsZURpZmZlcnMsXG4gIEl0ZXJhYmxlRGlmZmVyLFxuICBJdGVyYWJsZURpZmZlckZhY3RvcnksXG4gIFRyYWNrQnlGblxufSBmcm9tICcuL2RpZmZlcnMvaXRlcmFibGVfZGlmZmVycyc7XG5leHBvcnQge0tleVZhbHVlRGlmZmVycywgS2V5VmFsdWVEaWZmZXIsIEtleVZhbHVlRGlmZmVyRmFjdG9yeX0gZnJvbSAnLi9kaWZmZXJzL2tleXZhbHVlX2RpZmZlcnMnO1xuZXhwb3J0IHtQaXBlVHJhbnNmb3JtfSBmcm9tICcuL3BpcGVfdHJhbnNmb3JtJztcbmV4cG9ydCB7V3JhcHBlZFZhbHVlLCBTaW1wbGVDaGFuZ2V9IGZyb20gJy4vY2hhbmdlX2RldGVjdGlvbl91dGlsJztcblxuLyoqXG4gKiBTdHJ1Y3R1cmFsIGRpZmZpbmcgZm9yIGBPYmplY3RgcyBhbmQgYE1hcGBzLlxuICovXG5leHBvcnQgY29uc3Qga2V5VmFsRGlmZjogS2V5VmFsdWVEaWZmZXJGYWN0b3J5W10gPVxuICAgIENPTlNUX0VYUFIoW0NPTlNUX0VYUFIobmV3IERlZmF1bHRLZXlWYWx1ZURpZmZlckZhY3RvcnkoKSldKTtcblxuLyoqXG4gKiBTdHJ1Y3R1cmFsIGRpZmZpbmcgZm9yIGBJdGVyYWJsZWAgdHlwZXMgc3VjaCBhcyBgQXJyYXlgcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGl0ZXJhYmxlRGlmZjogSXRlcmFibGVEaWZmZXJGYWN0b3J5W10gPVxuICAgIENPTlNUX0VYUFIoW0NPTlNUX0VYUFIobmV3IERlZmF1bHRJdGVyYWJsZURpZmZlckZhY3RvcnkoKSldKTtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRJdGVyYWJsZURpZmZlcnMgPSBDT05TVF9FWFBSKG5ldyBJdGVyYWJsZURpZmZlcnMoaXRlcmFibGVEaWZmKSk7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0S2V5VmFsdWVEaWZmZXJzID0gQ09OU1RfRVhQUihuZXcgS2V5VmFsdWVEaWZmZXJzKGtleVZhbERpZmYpKTtcbiJdfQ==