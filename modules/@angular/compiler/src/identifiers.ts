/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {ANALYZE_FOR_ENTRY_COMPONENTS, ChangeDetectionStrategy, ChangeDetectorRef, ComponentFactory, ComponentFactoryResolver, ElementRef, Injector, LOCALE_ID as LOCALE_ID_, NgModuleFactory, QueryList, RenderComponentType, Renderer, SecurityContext, SimpleChange, TRANSLATIONS_FORMAT as TRANSLATIONS_FORMAT_, TemplateRef, ViewContainerRef, ViewEncapsulation} from '@angular/core';

import {AnimationGroupPlayer as AnimationGroupPlayer_, AnimationKeyframe as AnimationKeyframe_, AnimationOutput as AnimationOutput_, AnimationSequencePlayer as AnimationSequencePlayer_, AnimationStyles as AnimationStyles_, AppElement, AppView, ChangeDetectorStatus, CodegenComponentFactoryResolver, DebugAppView, DebugContext, EMPTY_ARRAY, EMPTY_MAP, NgModuleInjector, NoOpAnimationPlayer as NoOpAnimationPlayer_, StaticNodeDebugInfo, TemplateRef_, UNINITIALIZED, ValueUnwrapper, ViewType, ViewUtils, balanceAnimationKeyframes as impBalanceAnimationKeyframes, castByValue, checkBinding, clearStyles as impClearStyles, collectAndResolveStyles as impCollectAndResolveStyles, devModeEqual, flattenNestedViewRenderNodes, interpolate, prepareFinalAnimationStyles as impBalanceAnimationStyles, pureProxy1, pureProxy10, pureProxy2, pureProxy3, pureProxy4, pureProxy5, pureProxy6, pureProxy7, pureProxy8, pureProxy9, renderStyles as impRenderStyles} from '../core_private';

import {CompileIdentifierMetadata, CompileTokenMetadata} from './compile_metadata';
import {assetUrl} from './util';

var APP_VIEW_MODULE_URL = assetUrl('core', 'linker/view');
var VIEW_UTILS_MODULE_URL = assetUrl('core', 'linker/view_utils');
var CD_MODULE_URL = assetUrl('core', 'change_detection/change_detection');

// Reassign the imports to different variables so we can
// define static variables with the name of the import.
// (only needed for Dart).
var impViewUtils = ViewUtils;
var impAppView = AppView;
var impDebugAppView = DebugAppView;
var impDebugContext = DebugContext;
var impAppElement = AppElement;
var impElementRef = ElementRef;
var impViewContainerRef = ViewContainerRef;
var impChangeDetectorRef = ChangeDetectorRef;
var impRenderComponentType = RenderComponentType;
var impQueryList = QueryList;
var impTemplateRef = TemplateRef;
var impTemplateRef_ = TemplateRef_;
var impValueUnwrapper = ValueUnwrapper;
var impInjector = Injector;
var impViewEncapsulation = ViewEncapsulation;
var impViewType = ViewType;
var impChangeDetectionStrategy = ChangeDetectionStrategy;
var impStaticNodeDebugInfo = StaticNodeDebugInfo;
var impRenderer = Renderer;
var impSimpleChange = SimpleChange;
var impUNINITIALIZED = UNINITIALIZED;
var impChangeDetectorStatus = ChangeDetectorStatus;
var impFlattenNestedViewRenderNodes = flattenNestedViewRenderNodes;
var impDevModeEqual = devModeEqual;
var impInterpolate = interpolate;
var impCheckBinding = checkBinding;
var impCastByValue = castByValue;
var impEMPTY_ARRAY = EMPTY_ARRAY;
var impEMPTY_MAP = EMPTY_MAP;
var impAnimationGroupPlayer = AnimationGroupPlayer_;
var impAnimationSequencePlayer = AnimationSequencePlayer_;
var impAnimationKeyframe = AnimationKeyframe_;
var impAnimationStyles = AnimationStyles_;
var impNoOpAnimationPlayer = NoOpAnimationPlayer_;
var impAnimationOutput = AnimationOutput_;

var ANIMATION_STYLE_UTIL_ASSET_URL = assetUrl('core', 'animation/animation_style_util');

export class Identifiers {
  static ANALYZE_FOR_ENTRY_COMPONENTS = new CompileIdentifierMetadata({
    name: 'ANALYZE_FOR_ENTRY_COMPONENTS',
    moduleUrl: assetUrl('core', 'metadata/di'),
    runtime: ANALYZE_FOR_ENTRY_COMPONENTS
  });
  static ViewUtils = new CompileIdentifierMetadata(
      {name: 'ViewUtils', moduleUrl: assetUrl('core', 'linker/view_utils'), runtime: impViewUtils});
  static AppView = new CompileIdentifierMetadata(
      {name: 'AppView', moduleUrl: APP_VIEW_MODULE_URL, runtime: impAppView});
  static DebugAppView = new CompileIdentifierMetadata(
      {name: 'DebugAppView', moduleUrl: APP_VIEW_MODULE_URL, runtime: impDebugAppView});
  static AppElement = new CompileIdentifierMetadata(
      {name: 'AppElement', moduleUrl: assetUrl('core', 'linker/element'), runtime: impAppElement});
  static ElementRef = new CompileIdentifierMetadata({
    name: 'ElementRef',
    moduleUrl: assetUrl('core', 'linker/element_ref'),
    runtime: impElementRef
  });
  static ViewContainerRef = new CompileIdentifierMetadata({
    name: 'ViewContainerRef',
    moduleUrl: assetUrl('core', 'linker/view_container_ref'),
    runtime: impViewContainerRef
  });
  static ChangeDetectorRef = new CompileIdentifierMetadata({
    name: 'ChangeDetectorRef',
    moduleUrl: assetUrl('core', 'change_detection/change_detector_ref'),
    runtime: impChangeDetectorRef
  });
  static RenderComponentType = new CompileIdentifierMetadata({
    name: 'RenderComponentType',
    moduleUrl: assetUrl('core', 'render/api'),
    runtime: impRenderComponentType
  });
  static QueryList = new CompileIdentifierMetadata(
      {name: 'QueryList', moduleUrl: assetUrl('core', 'linker/query_list'), runtime: impQueryList});
  static TemplateRef = new CompileIdentifierMetadata({
    name: 'TemplateRef',
    moduleUrl: assetUrl('core', 'linker/template_ref'),
    runtime: impTemplateRef
  });
  static TemplateRef_ = new CompileIdentifierMetadata({
    name: 'TemplateRef_',
    moduleUrl: assetUrl('core', 'linker/template_ref'),
    runtime: impTemplateRef_
  });
  static CodegenComponentFactoryResolver = new CompileIdentifierMetadata({
    name: 'CodegenComponentFactoryResolver',
    moduleUrl: assetUrl('core', 'linker/component_factory_resolver'),
    runtime: CodegenComponentFactoryResolver
  });
  static ComponentFactoryResolver = new CompileIdentifierMetadata({
    name: 'ComponentFactoryResolver',
    moduleUrl: assetUrl('core', 'linker/component_factory_resolver'),
    runtime: ComponentFactoryResolver
  });
  static ComponentFactory = new CompileIdentifierMetadata({
    name: 'ComponentFactory',
    runtime: ComponentFactory,
    moduleUrl: assetUrl('core', 'linker/component_factory')
  });
  static NgModuleFactory = new CompileIdentifierMetadata({
    name: 'NgModuleFactory',
    runtime: NgModuleFactory,
    moduleUrl: assetUrl('core', 'linker/ng_module_factory')
  });
  static NgModuleInjector = new CompileIdentifierMetadata({
    name: 'NgModuleInjector',
    runtime: NgModuleInjector,
    moduleUrl: assetUrl('core', 'linker/ng_module_factory')
  });
  static ValueUnwrapper = new CompileIdentifierMetadata(
      {name: 'ValueUnwrapper', moduleUrl: CD_MODULE_URL, runtime: impValueUnwrapper});
  static Injector = new CompileIdentifierMetadata(
      {name: 'Injector', moduleUrl: assetUrl('core', 'di/injector'), runtime: impInjector});
  static ViewEncapsulation = new CompileIdentifierMetadata({
    name: 'ViewEncapsulation',
    moduleUrl: assetUrl('core', 'metadata/view'),
    runtime: impViewEncapsulation
  });
  static ViewType = new CompileIdentifierMetadata(
      {name: 'ViewType', moduleUrl: assetUrl('core', 'linker/view_type'), runtime: impViewType});
  static ChangeDetectionStrategy = new CompileIdentifierMetadata({
    name: 'ChangeDetectionStrategy',
    moduleUrl: CD_MODULE_URL,
    runtime: impChangeDetectionStrategy
  });
  static StaticNodeDebugInfo = new CompileIdentifierMetadata({
    name: 'StaticNodeDebugInfo',
    moduleUrl: assetUrl('core', 'linker/debug_context'),
    runtime: impStaticNodeDebugInfo
  });
  static DebugContext = new CompileIdentifierMetadata({
    name: 'DebugContext',
    moduleUrl: assetUrl('core', 'linker/debug_context'),
    runtime: impDebugContext
  });
  static Renderer = new CompileIdentifierMetadata(
      {name: 'Renderer', moduleUrl: assetUrl('core', 'render/api'), runtime: impRenderer});
  static SimpleChange = new CompileIdentifierMetadata(
      {name: 'SimpleChange', moduleUrl: CD_MODULE_URL, runtime: impSimpleChange});
  static UNINITIALIZED = new CompileIdentifierMetadata(
      {name: 'UNINITIALIZED', moduleUrl: CD_MODULE_URL, runtime: impUNINITIALIZED});
  static ChangeDetectorStatus = new CompileIdentifierMetadata(
      {name: 'ChangeDetectorStatus', moduleUrl: CD_MODULE_URL, runtime: impChangeDetectorStatus});
  static checkBinding = new CompileIdentifierMetadata(
      {name: 'checkBinding', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: impCheckBinding});
  static flattenNestedViewRenderNodes = new CompileIdentifierMetadata({
    name: 'flattenNestedViewRenderNodes',
    moduleUrl: VIEW_UTILS_MODULE_URL,
    runtime: impFlattenNestedViewRenderNodes
  });
  static devModeEqual = new CompileIdentifierMetadata(
      {name: 'devModeEqual', moduleUrl: CD_MODULE_URL, runtime: impDevModeEqual});
  static interpolate = new CompileIdentifierMetadata(
      {name: 'interpolate', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: impInterpolate});
  static castByValue = new CompileIdentifierMetadata(
      {name: 'castByValue', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: impCastByValue});
  static EMPTY_ARRAY = new CompileIdentifierMetadata(
      {name: 'EMPTY_ARRAY', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: impEMPTY_ARRAY});
  static EMPTY_MAP = new CompileIdentifierMetadata(
      {name: 'EMPTY_MAP', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: impEMPTY_MAP});

  static pureProxies = [
    null,
    new CompileIdentifierMetadata(
        {name: 'pureProxy1', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: pureProxy1}),
    new CompileIdentifierMetadata(
        {name: 'pureProxy2', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: pureProxy2}),
    new CompileIdentifierMetadata(
        {name: 'pureProxy3', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: pureProxy3}),
    new CompileIdentifierMetadata(
        {name: 'pureProxy4', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: pureProxy4}),
    new CompileIdentifierMetadata(
        {name: 'pureProxy5', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: pureProxy5}),
    new CompileIdentifierMetadata(
        {name: 'pureProxy6', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: pureProxy6}),
    new CompileIdentifierMetadata(
        {name: 'pureProxy7', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: pureProxy7}),
    new CompileIdentifierMetadata(
        {name: 'pureProxy8', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: pureProxy8}),
    new CompileIdentifierMetadata(
        {name: 'pureProxy9', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: pureProxy9}),
    new CompileIdentifierMetadata(
        {name: 'pureProxy10', moduleUrl: VIEW_UTILS_MODULE_URL, runtime: pureProxy10}),
  ];
  static SecurityContext = new CompileIdentifierMetadata({
    name: 'SecurityContext',
    moduleUrl: assetUrl('core', 'security'),
    runtime: SecurityContext,
  });
  static AnimationKeyframe = new CompileIdentifierMetadata({
    name: 'AnimationKeyframe',
    moduleUrl: assetUrl('core', 'animation/animation_keyframe'),
    runtime: impAnimationKeyframe
  });
  static AnimationStyles = new CompileIdentifierMetadata({
    name: 'AnimationStyles',
    moduleUrl: assetUrl('core', 'animation/animation_styles'),
    runtime: impAnimationStyles
  });
  static NoOpAnimationPlayer = new CompileIdentifierMetadata({
    name: 'NoOpAnimationPlayer',
    moduleUrl: assetUrl('core', 'animation/animation_player'),
    runtime: impNoOpAnimationPlayer
  });
  static AnimationGroupPlayer = new CompileIdentifierMetadata({
    name: 'AnimationGroupPlayer',
    moduleUrl: assetUrl('core', 'animation/animation_group_player'),
    runtime: impAnimationGroupPlayer
  });
  static AnimationSequencePlayer = new CompileIdentifierMetadata({
    name: 'AnimationSequencePlayer',
    moduleUrl: assetUrl('core', 'animation/animation_sequence_player'),
    runtime: impAnimationSequencePlayer
  });
  static prepareFinalAnimationStyles = new CompileIdentifierMetadata({
    name: 'prepareFinalAnimationStyles',
    moduleUrl: ANIMATION_STYLE_UTIL_ASSET_URL,
    runtime: impBalanceAnimationStyles
  });
  static balanceAnimationKeyframes = new CompileIdentifierMetadata({
    name: 'balanceAnimationKeyframes',
    moduleUrl: ANIMATION_STYLE_UTIL_ASSET_URL,
    runtime: impBalanceAnimationKeyframes
  });
  static clearStyles = new CompileIdentifierMetadata(
      {name: 'clearStyles', moduleUrl: ANIMATION_STYLE_UTIL_ASSET_URL, runtime: impClearStyles});
  static renderStyles = new CompileIdentifierMetadata(
      {name: 'renderStyles', moduleUrl: ANIMATION_STYLE_UTIL_ASSET_URL, runtime: impRenderStyles});
  static collectAndResolveStyles = new CompileIdentifierMetadata({
    name: 'collectAndResolveStyles',
    moduleUrl: ANIMATION_STYLE_UTIL_ASSET_URL,
    runtime: impCollectAndResolveStyles
  });
  static LOCALE_ID = new CompileIdentifierMetadata(
      {name: 'LOCALE_ID', moduleUrl: assetUrl('core', 'i18n/tokens'), runtime: LOCALE_ID_});
  static TRANSLATIONS_FORMAT = new CompileIdentifierMetadata({
    name: 'TRANSLATIONS_FORMAT',
    moduleUrl: assetUrl('core', 'i18n/tokens'),
    runtime: TRANSLATIONS_FORMAT_
  });
  static AnimationOutput = new CompileIdentifierMetadata({
    name: 'AnimationOutput',
    moduleUrl: assetUrl('core', 'animation/animation_output'),
    runtime: impAnimationOutput
  });
}

export function identifierToken(identifier: CompileIdentifierMetadata): CompileTokenMetadata {
  return new CompileTokenMetadata({identifier: identifier});
}
