declare module PROJECT {
    /**
     * Babylon universal camera rig system pro class
     * @class UniversalCameraSystem - All rights reserved (c) 2020 Mackey Kinard
     * https://doc.babylonjs.com/divingDeeper/postProcesses/defaultRenderingPipeline
     */
    class UniversalCameraSystem extends BABYLON.ScriptComponent {
        protected static PlayerOneCamera: BABYLON.UniversalCamera;
        protected static PlayerTwoCamera: BABYLON.UniversalCamera;
        protected static PlayerThreeCamera: BABYLON.UniversalCamera;
        protected static PlayerFourCamera: BABYLON.UniversalCamera;
        protected static XRExperienceHelper: BABYLON.WebXRDefaultExperience;
        private static multiPlayerView;
        private static multiPlayerCount;
        private static multiPlayerCameras;
        private static stereoCameras;
        private static startupMode;
        private static cameraReady;
        private static renderingPipeline;
        static GetRenderingPipeline(): BABYLON.DefaultRenderingPipeline;
        static IsCameraSystemReady(): boolean;
        private mainCamera;
        private cameraType;
        private cameraInertia;
        private cameraController;
        private virtualReality;
        private arcRotateConfig;
        private multiPlayerSetup;
        private editorPostProcessing;
        isMainCamera(): boolean;
        getCameraType(): number;
        protected m_cameraRig: BABYLON.TargetCamera;
        protected awake(): void;
        protected start(): void;
        protected update(): void;
        protected destroy(): void;
        protected awakeCameraSystemState(): void;
        protected startCameraSystemState(): Promise<void>;
        protected updateCameraSystemState(): void;
        protected destroyCameraSystemState(): void;
        /** Get the WebXR default experience helper */
        static GetWebXR(): BABYLON.WebXRDefaultExperience;
        /** Get universal camera rig for desired player */
        static GetPlayerCamera(scene: BABYLON.Scene, player?: BABYLON.PlayerNumber, detach?: boolean): BABYLON.UniversalCamera;
        /** Get camera transform node for desired player */
        static GetCameraTransform(scene: BABYLON.Scene, player?: BABYLON.PlayerNumber): BABYLON.TransformNode;
        /** Are stereo side side camera services available. */
        static IsStereoCameras(): boolean;
        /** Are local multi player view services available. */
        static IsMultiPlayerView(): boolean;
        /** Get the current local multi player count */
        static GetMultiPlayerCount(): number;
        /** Activates current local multi player cameras. */
        static ActivateMultiPlayerCameras(scene: BABYLON.Scene): boolean;
        /** Disposes current local multiplayer cameras */
        static DisposeMultiPlayerCameras(): void;
        /** Sets the multi player camera view layout */
        static SetMultiPlayerViewLayout(scene: BABYLON.Scene, totalNumPlayers: number): boolean;
    }
    /*********************************************/
    /** Camera Editor Properties Support Classes */
    /*********************************************/
    interface IEditorArcRtotate {
        alpha: number;
        beta: number;
        radius: number;
        target: BABYLON.IUnityVector3;
    }
    interface IEditorPostProcessing {
        usePostProcessing: boolean;
        highDynamicRange: boolean;
        screenAntiAliasing: PROJECT.IEditorAntiAliasing;
        focalDepthOfField: PROJECT.IEditorDepthOfField;
        chromaticAberration: PROJECT.IEditorChromaticAberration;
        glowLayerProperties: PROJECT.IEditorGlowLayer;
        grainEffectProperties: PROJECT.IEditorGrainEffect;
        sharpEffectProperties: PROJECT.IEditorSharpenEffect;
        bloomEffectProperties: PROJECT.IEditorBloomProcessing;
        imageProcessingConfig: PROJECT.IEditorImageProcessing;
    }
    interface IEditorAntiAliasing {
        msaaSamples: number;
        fxaaEnabled: boolean;
        fxaaScaling: boolean;
        fxaaSamples: number;
    }
    interface IEditorDepthOfField {
        depthOfField: boolean;
        blurLevel: number;
        focalStop: number;
        focalLength: number;
        focusDistance: number;
        maxLensSize: number;
    }
    interface IEditorChromaticAberration {
        aberrationEnabled: boolean;
        aberrationAmount: number;
        adaptScaleViewport: boolean;
        alphaMode: number;
        alwaysForcePOT: boolean;
        pixelPerfectMode: boolean;
        fullscreenViewport: boolean;
    }
    interface IEditorGlowLayer {
        glowEnabled: boolean;
        glowIntensity: number;
        blurKernelSize: number;
    }
    interface IEditorGrainEffect {
        grainEnabled: boolean;
        grainAnimated: boolean;
        grainIntensity: number;
        adaptScaleViewport: boolean;
    }
    interface IEditorSharpenEffect {
        sharpenEnabled: boolean;
        sharpEdgeAmount: number;
        sharpColorAmount: number;
        adaptScaleViewport: boolean;
    }
    interface IEditorBloomProcessing {
        bloomEnabled: boolean;
        bloomKernel: number;
        bloomScale: number;
        bloomWeight: number;
        bloomThreshold: number;
    }
    interface IEditorColorCurves {
        curvesEnabled: boolean;
        globalDen: number;
        globalExp: number;
        globalHue: number;
        globalSat: number;
        highlightsDen: number;
        highlightsExp: number;
        highlightsHue: number;
        highlightsSat: number;
        midtonesDen: number;
        midtonesExp: number;
        midtonesHue: number;
        midtonesSat: number;
        shadowsDen: number;
        shadowsExp: number;
        shadowsHue: number;
        shadowsSat: number;
    }
    interface IEditorImageProcessing {
        imageProcessing: boolean;
        imageContrast: number;
        imageExposure: number;
        vignetteEnabled: boolean;
        vignetteBlendMode: number;
        vignetteCameraFov: number;
        vignetteStretch: number;
        vignetteCentreX: number;
        vignetteCentreY: number;
        vignetteWeight: number;
        vignetteColor: BABYLON.IUnityColor;
        useColorGrading: boolean;
        setGradingTexture: any;
        imagingColorCurves: PROJECT.IEditorColorCurves;
    }
}
declare module PROJECT {
    /**
    * Babylon Script Component
    * @class LightProjection
    */
    class LightProjection extends BABYLON.ScriptComponent {
        private static ShaderFragmentUpdated;
        private projectionTexture;
        private spotLightExponent;
        private spotLightAngle;
        private nearClipPlane;
        private farClipPlane;
        private excludeChildren;
        private includeOnly;
        enableRotation: boolean;
        projectionRotation: number;
        projectionPosition: BABYLON.Vector3;
        getLightProjector(): BABYLON.SpotLight;
        protected m_spotLight: BABYLON.SpotLight;
        protected m_projectorDirty: boolean;
        protected m_projectorPosition: BABYLON.Vector3;
        protected m_projectorRotation: BABYLON.Vector3;
        protected m_lastPosition: BABYLON.Vector3;
        protected m_lastRotation: BABYLON.Vector3;
        protected awake(): void;
        protected start(): void;
        protected update(): void;
        protected destroy(): void;
        private updateProjectorPosition;
    }
}
declare module BABYLON {
    /**
     * Babylon photon client controller class (Photon Engine)
     * @class PhotonController - All rights reserved (c) 2020 Mackey Kinard
     */
    class PhotonController {
        /** Connects a window state photon client to a name server (Photon Cloud Services) */
        static ConnectToNameServer(options?: {
            region?: string;
            lobbyName?: string;
            lobbyType?: number;
            lobbyStats?: boolean;
            keepMasterConnection?: boolean;
        }, address?: string, handler?: (state: number) => void): Photon.LoadBalancing.LoadBalancingClient;
        /** Connects a window state photon client to a region server (Photon Cloud Services) */
        static ConnectToRegionServer(region: string, address?: string, handler?: (state: number) => void): Photon.LoadBalancing.LoadBalancingClient;
        /** Connects a window state photon client to a master server (Private Windows Server) */
        static ConnectToMasterServer(server: string, options?: {
            keepMasterConnection?: boolean;
            lobbyName?: string;
            lobbyType?: number;
            lobbyStats?: boolean;
            userAuthSecret?: string;
            region?: string;
        }, handler?: (state: number) => void): Photon.LoadBalancing.LoadBalancingClient;
        /** Get the window state photon client */
        static GetPhotonClient(): Photon.LoadBalancing.LoadBalancingClient;
    }
}
declare module BABYLON {
    /**
     * Babylon window socket controller class (Socket.IO)
     * @class SocketController - All rights reserved (c) 2020 Mackey Kinard
     */
    class SocketController {
        /** Registers an handler for window socket connect event */
        static RegisterOnSocketConnect(func: () => void): void;
        /** Registers an handler for window socket disconnect event */
        static RegisterOnSocketDisconnect(func: () => void): void;
        /** Connects a window state socket */
        static ConnectWindowSocket(connection: string): SocketIOClient.Socket;
        /** Get the window state socket */
        static GetWindowSocket(): SocketIOClient.Socket;
    }
}
declare module PROJECT {
    /**
    * Babylon Script Component
    * @class UniversalPlayerController
    */
    class UniversalPlayerController extends BABYLON.ScriptComponent {
        enableInput: boolean;
        attachCamera: boolean;
        rotateCamera: boolean;
        moveCharacter: boolean;
        toggleView: boolean;
        freeLooking: boolean;
        rootMotion: boolean;
        gravityForce: number;
        slopeForce: number;
        rayLength: number;
        rayOrigin: number;
        maxAngle: number;
        speedFactor: number;
        moveSpeed: number;
        lookSpeed: number;
        jumpSpeed: number;
        jumpDelay: number;
        eyesHeight: number;
        pivotHeight: number;
        topLookLimit: number;
        downLookLimit: number;
        lowTurnSpeed: number;
        highTurnSpeed: number;
        takeoffPower: number;
        stoppingPower: number;
        acceleration: boolean;
        avatarSkinTag: string;
        distanceFactor: number;
        cameraSmoothing: number;
        cameraCollisions: boolean;
        inputMagnitude: number;
        minimumDistance: number;
        buttonJump: number;
        keyboardJump: number;
        buttonCamera: number;
        keyboardCamera: number;
        playerNumber: BABYLON.PlayerNumber;
        boomPosition: BABYLON.Vector3;
        movementVelocity: BABYLON.Vector3;
        getPlayerInputX(): number;
        getPlayerInputZ(): number;
        getPlayerMouseX(): number;
        getPlayerMouseY(): number;
        getPlayerJumping(): boolean;
        getPlayerGrounded(): boolean;
        getGroundedMesh(): BABYLON.AbstractMesh;
        getGroundedPoint(): BABYLON.Vector3;
        getGroundedAngle(): number;
        getGroundedNormal(): BABYLON.Vector3;
        getCameraBoomNode(): BABYLON.TransformNode;
        getCameraTransform(): BABYLON.TransformNode;
        getAnimationState(): BABYLON.AnimationState;
        getCharacterController(): BABYLON.CharacterController;
        private abstractMesh;
        private cameraDistance;
        private forwardCamera;
        private dollyDirection;
        private rotationEulers;
        private cameraPivotOffset;
        private cameraForwardVector;
        private cameraRightVector;
        private desiredForwardVector;
        private desiredRightVector;
        private scaledCamDirection;
        private scaledMaxDirection;
        private parentNodePosition;
        private maximumCameraPos;
        private raycastShape;
        private raycastGroup;
        private raycastMask;
        private avatarSkins;
        private cameraNode;
        private cameraPivot;
        private navigationAgent;
        private characterController;
        private isCharacterNavigating;
        private isCharacterGrounded;
        private isCharacterJumpFrame;
        private isCharacterJumpState;
        private navigationAngularSpeed;
        private animationControllerTag;
        private animationStateMachine;
        private animationStateParams;
        private showDebugColliders;
        private colliderVisibility;
        private deltaTime;
        private jumpTimer;
        private playerControl;
        private playerInputX;
        private playerInputZ;
        private playerMouseX;
        private playerMouseY;
        private groundedMesh;
        private groundedPoint;
        private groundedAngle;
        private groundedNormal;
        private verticalVelocity;
        private rootmotionSpeed;
        private smoothDeltaTime;
        private animationState;
        private inputMovementVector;
        private playerLookRotation;
        private playerRotationVector;
        private playerMovementVelocity;
        private playerRotationQuaternion;
        protected awake(): void;
        protected start(): void;
        protected update(): void;
        protected late(): void;
        protected after(): void;
        protected destroy(): void;
        /** Register handler that is triggered before the controller has been updated */
        onPreUpdateObservable: BABYLON.Observable<BABYLON.TransformNode>;
        /** Register handler that is triggered before the controller movement has been applied */
        onBeforeMoveObservable: BABYLON.Observable<BABYLON.TransformNode>;
        /** Register handler that is triggered after the controller has been updated */
        onPostUpdateObservable: BABYLON.Observable<BABYLON.TransformNode>;
        /** TODO */
        setPlayerControl(mode: PROJECT.PlayerInputControl): void;
        /** TODO */
        togglePlayerControl(): void;
        private showAvatarSkins;
        /** TODO */
        attachPlayerCamera(player: BABYLON.PlayerNumber): void;
        private attachAnimationController;
        /** TODO */
        resetPlayerRotation(): void;
        private awakePlayerController;
        private startPlayerController;
        private updatePlayerController;
        private updateCharacterController;
        private updateCheckCollisions;
        private pickingRay;
        private pickingHelper;
        private pickingOrigin;
        private pickingDirection;
        private pickCheckCollisionsRaycast;
        private cameraRay;
        private cameraHelper;
        private cameraForward;
        private cameraDirection;
        private pickCameraCollisionsRaycast;
        private latePlayerController;
        private afterPlayerController;
        private destroyPlayerController;
        private validateAnimationStateParams;
    }
    /**
    * Babylon Interface Definition
    * @interface AnimationStateParams
    */
    interface AnimationStateParams {
        horizontalInput: string;
        verticalInput: string;
        mouseXInput: string;
        mouseYInput: string;
        speedInput: string;
        jumpedInput: string;
        jumpingInput: string;
        groundedInput: string;
    }
    /**
    * Babylon Enum Definition
    * @interface PlayerInputControl
    */
    enum PlayerInputControl {
        FirstPersonStrafing = 0,
        ThirdPersonStrafing = 1,
        ThirdPersonForward = 2
    }
}
declare module PROJECT {
    /**
    * Babylon Script Component
    * @class FxParticleSystem
    */
    class FxParticleSystem extends BABYLON.ScriptComponent {
        getParticleEmitter(): BABYLON.AbstractMesh;
        getParticleSystem(): BABYLON.ParticleSystem | BABYLON.GPUParticleSystem;
        protected m_particleEmitter: BABYLON.AbstractMesh;
        protected m_particleSystem: BABYLON.ParticleSystem | BABYLON.GPUParticleSystem;
        protected awake(): void;
        protected destroy(): void;
    }
}
declare module PROJECT {
    /**
     * Babylon water material system pro class (Babylon Water Material)
     * @class SkyMaterialSystem - All rights reserved (c) 2020 Mackey Kinard
     */
    class SkyMaterialSystem extends BABYLON.ScriptComponent {
        private skyfog;
        private skysize;
        private probesize;
        private reflections;
        private reflectlevel;
        private skytintcolor;
        getSkyboxMesh(): BABYLON.AbstractMesh;
        getSkyMaterial(): BABYLON.SkyMaterial;
        getReflectionProbe(): BABYLON.ReflectionProbe;
        protected awake(): void;
        protected start(): void;
        protected update(): void;
        protected late(): void;
        protected after(): void;
        protected destroy(): void;
        protected m_skyboxMesh: BABYLON.Mesh;
        protected m_skyMaterial: BABYLON.SkyMaterial;
        protected m_reflectProbe: BABYLON.ReflectionProbe;
        protected awakeSkyboxMaterial(): void;
        protected destroySkyboxMaterial(): void;
        /** Set Skybox Mesh tint color. (Box Mesh Vertex Colors) */
        setSkyboxTintColor(color: BABYLON.Color3): void;
    }
}
declare module PROJECT {
    /**
     * Babylon water material system pro class (Babylon Water Material)
     * @class WaterMaterialSystem - All rights reserved (c) 2020 Mackey Kinard
     */
    class WaterMaterialSystem extends BABYLON.ScriptComponent {
        private waterTag;
        private targetSize;
        private renderSize;
        private depthFactor;
        private reflectSkybox;
        private subDivisions;
        private heightOffset;
        private windDirection;
        private windForce;
        private waveSpeed;
        private waveLength;
        private waveHeight;
        private bumpHeight;
        private bumpSuperimpose;
        private bumpAffectsReflection;
        private waterColor;
        private colorBlendFactor;
        private waterColor2;
        private colorBlendFactor2;
        private disableClipPlane;
        private fresnelSeparate;
        getWaterGeometry(): BABYLON.AbstractMesh;
        getWaterMaterial(): BABYLON.WaterMaterial;
        protected m_waterGeometry: BABYLON.AbstractMesh;
        protected m_waterMaterial: BABYLON.WaterMaterial;
        protected awake(): void;
        protected start(): void;
        protected update(): void;
        protected late(): void;
        protected after(): void;
        protected destroy(): void;
    }
}
declare module PROJECT {
    /**
    * Babylon Script Component
    * @class SimpleFollowCamera
    */
    class SimpleFollowCamera extends BABYLON.ScriptComponent {
        private smoothFollow;
        private smoothRotate;
        private matchRotation;
        private followTarget;
        private targetPosition;
        private targetRotation;
        protected awake(): void;
        protected start(): void;
        protected late(): void;
    }
}
declare module PROJECT {
    /**
    * Babylon Script Component
    * @class SmoothFollowTarget
    */
    class SmoothFollowTarget extends BABYLON.ScriptComponent {
        target: BABYLON.TransformNode;
        targetHeight: number;
        followHeight: number;
        heightDamping: number;
        rotationDamping: number;
        minimumDistance: number;
        maximumDistance: number;
        startBehindTarget: boolean;
        followBehindTarget: boolean;
        private targetPosition;
        private targetAngles;
        private transformAngles;
        private positionBuffer;
        private rotationBuffer;
        private tempRotationBuffer;
        protected awake(): void;
        protected start(): void;
        protected late(): void;
        protected destroy(): void;
    }
}
declare module PROJECT {
    /**
    * Babylon Script Component
    * @class WaypointTargetManager
    */
    class WaypointTargetManager extends BABYLON.ScriptComponent {
        private _waypointMeshLines;
        private _waypointSplineCurve;
        private _waypointTransformNodes;
        private _waypointSplinePositions;
        private _waypointSphereMaterial;
        resolution: number;
        closedLoop: boolean;
        drawLines: boolean;
        drawPoints: boolean;
        drawTraces: boolean;
        pointSize: number;
        lineHeight: number;
        lineColor: BABYLON.Color3;
        pointColor: BABYLON.Color3;
        traceColor: BABYLON.Color3;
        getSplineCurve(): BABYLON.Curve3;
        getSplineCurveLength(): number;
        getSplineCurvePositions(): BABYLON.Vector3[];
        getControlPointTransforms(): BABYLON.TransformNode[];
        protected awake(): void;
        protected start(): void;
        protected destroy(): void;
    }
}
declare module PROJECT {
    /**
     * Babylon Script Component
     * @class DebugInformation
     */
    class DebugInformation extends BABYLON.ScriptComponent {
        private keys;
        private show;
        private popup;
        private views;
        private xbox;
        private color;
        protected awake(): void;
        protected start(): void;
        protected destroy(): void;
    }
}
declare module PROJECT {
    /**
    * Babylon Script Component
    * @class TestNavigationAgent
    */
    class TestNavigationAgent extends BABYLON.ScriptComponent {
        protected m_playerAgent: BABYLON.NavigationAgent;
        protected m_charController: BABYLON.CharacterController;
        protected awake(): void;
        protected doPointerCancel(): void;
        protected doPointerDown(pointerInfo: BABYLON.PointerInfo): void;
        protected update(): void;
        private time;
        private duration;
        private jumpCurve;
        private traversalTime;
        protected updateNavAgent(): void;
    }
}
declare module PROJECT {
    /**
    * Babylon Script Component
    * @class TestRootMotion
    */
    class TestRootMotion extends BABYLON.ScriptComponent {
        private motionType;
        updatePosition: boolean;
        updateRotation: boolean;
        moveWithCollisions: boolean;
        protected m_animator: BABYLON.AnimationState;
        protected m_character: BABYLON.CharacterController;
        protected m_rigidbody: BABYLON.RigidbodyPhysics;
        protected awake(): void;
        protected start(): void;
        protected update(): void;
        protected turn(): void;
        protected move(): void;
    }
}
declare module BABYLON {
    /**
     * Babylon metadata parser class (Internal use only)
     * @class PerlinNoiseGenerator - All rights reserved (c) 2020 Mackey Kinard
     */
    class PerlinNoiseGenerator {
        private static gradients;
        private static rand_vect;
        private static dot_prod_grid;
        private static smootherstep;
        private static interp;
        /** Seed perlin noise generator */
        static seed(): void;
        /** Generate perlin noise value from 2D coordinates. (Note: Use normalized input values) */
        static generate(x: number, y: number): number;
    }
}
declare module BABYLON {
    /**
     * Babylon windows platform pro class
     * @class WindowsPlatform - All rights reserved (c) 2020 Mackey Kinard
     */
    class WindowsPlatform {
        /** Is xbox live user signed in if platform services enabled. (WinRT) */
        static IsXboxLiveUserSignedIn(systemUser?: Windows.System.User, player?: BABYLON.PlayerNumber): boolean;
        /** Validated sign in xbox live user if platform services available. (WinRT) */
        static XboxLiveUserSignIn(player?: BABYLON.PlayerNumber, oncomplete?: (result: Microsoft.Xbox.Services.System.SignInResult) => void, onerror?: (error: any) => void, onprogress?: (progress: any) => void): void;
        /** Silent sign in xbox live user if platform services available. (WinRT) */
        static XboxLiveUserSilentSignIn(player?: BABYLON.PlayerNumber, oncomplete?: (result: Microsoft.Xbox.Services.System.SignInResult) => void, onerror?: (error: any) => void, onprogress?: (progress: any) => void): Windows.Foundation.Projections.Promise<void>;
        /** Dialog sign in xbox live user if platform services available. (WinRT) */
        static XboxLiveUserDialogSignIn(player?: BABYLON.PlayerNumber, oncomplete?: (result: Microsoft.Xbox.Services.System.SignInResult) => void, onerror?: (error: any) => void, onprogress?: (progress: any) => void): Windows.Foundation.Projections.Promise<void>;
        /** Loads a xbox live user profile if platform services available. (WinRT) */
        static LoadXboxLiveUserProfile(player?: BABYLON.PlayerNumber, oncomplete?: (result: Microsoft.Xbox.Services.Social.XboxUserProfile) => void, onerror?: (error: any) => void, onprogress?: (progress: any) => void): Windows.Foundation.Projections.Promise<void>;
        /** Get xbox live user if platform services available. (WinRT) */
        static GetXboxLiveUser(player?: BABYLON.PlayerNumber): Microsoft.Xbox.Services.System.XboxLiveUser;
        /** Get xbox live user if platform services available. (WinRT) */
        static GetXboxLiveSystemUser(systemUser: Windows.System.User, player?: BABYLON.PlayerNumber): Microsoft.Xbox.Services.System.XboxLiveUser;
        /** Get xbox live user context if platform services available. (WinRT) */
        static GetXboxLiveUserContext(player?: BABYLON.PlayerNumber): Microsoft.Xbox.Services.XboxLiveContext;
        /** Resets xbox live user context if platform services available. (WinRT) */
        static ResetXboxLiveUserContext(player?: BABYLON.PlayerNumber): void;
        /** Get xbox live context property if platform services available. (WinRT) */
        static GetXboxLiveContextProperty(name: any): any;
        /** Get xbox live context property if platform services available. (WinRT) */
        static SetXboxLiveContextProperty(name: any, property: any): void;
        /** Resets xbox live property context bag if platform services available. (WinRT) */
        static ResetXboxLivePropertyContexts(): void;
        /** Sets the Xbox User Sign Out Complete Handler (WinRT) */
        static SetXboxLiveSignOutHandler(handler?: (result: Microsoft.Xbox.Services.System.SignOutCompletedEventArgs) => void): void;
    }
}
declare module BABYLON {
    /**
     * Babylon animation state pro class (Unity Style Mechanim Animation System)
     * @class AnimationState - All rights reserved (c) 2020 Mackey Kinard
     */
    class AnimationState extends BABYLON.ScriptComponent {
        private static FPS;
        private static TIME;
        private static EXIT;
        private static DEG90;
        private _frametime;
        private _layercount;
        private _updatemode;
        private _hasrootmotion;
        private _initialtargetblending;
        private _hastransformhierarchy;
        private _leftfeetbottomheight;
        private _rightfeetbottomheight;
        private _runtimecontroller;
        private _executed;
        private _checkers;
        private _source;
        private _machine;
        private _deltaPosition;
        private _deltaRotation;
        private _positionWeight;
        private _rootBoneWeight;
        private _rotationWeight;
        private _rootQuatWeight;
        private _angularVelocity;
        private _positionHolder;
        private _rootBoneHolder;
        private _rotationHolder;
        private _rootQuatHolder;
        private _rootMotionMatrix;
        private _rootMotionScaling;
        private _rootMotionRotation;
        private _rootMotionPosition;
        private _lastMotionRotation;
        private _lastMotionPosition;
        private _deltaPositionFixed;
        private _deltaPositionMatrix;
        private _saveDeltaPosition;
        private _saveDeltaRotation;
        private _dirtyMotionMatrix;
        private _dirtyBlenderMatrix;
        private _targetPosition;
        private _targetRotation;
        private _targetScaling;
        private _updateMatrix;
        private _blenderMatrix;
        private _blendWeights;
        private _emptyScaling;
        private _emptyPosition;
        private _emptyRotation;
        private _data;
        private _anims;
        private _numbers;
        private _booleans;
        private _triggers;
        private _parameters;
        speedRatio: number;
        updatePosition: boolean;
        updateRotation: boolean;
        applyRootMotion: boolean;
        enableAnimation: boolean;
        moveWithCollisions: boolean;
        hasRootMotion(): boolean;
        getAnimationTime(): number;
        getDeltaPosition(): BABYLON.Vector3;
        getDeltaRotation(): BABYLON.Quaternion;
        getAngularVelocity(): BABYLON.Vector3;
        getRootMotionAngle(): number;
        getRootMotionSpeed(): number;
        getCharacterController(): BABYLON.CharacterController;
        getRuntimeController(): string;
        protected m_avatarMask: Map<string, number>;
        protected m_defaultGroup: BABYLON.AnimationGroup;
        protected m_animationTargets: BABYLON.TargetedAnimation[];
        protected m_characterController: BABYLON.CharacterController;
        protected awake(): void;
        protected late(): void;
        protected destroy(): void;
        /** Register handler that is triggered when the animation ik setup has been triggered */
        onAnimationIKObservable: Observable<number>;
        /** Register handler that is triggered when the animation end has been triggered */
        onAnimationEndObservable: Observable<number>;
        /** Register handler that is triggered when the animation loop has been triggered */
        onAnimationLoopObservable: Observable<number>;
        /** Register handler that is triggered when the animation event has been triggered */
        onAnimationEventObservable: Observable<IAnimatorEvent>;
        /** Register handler that is triggered when the animation frame has been updated */
        onAnimationUpdateObservable: Observable<TransformNode>;
        playAnimation(state: string, transitionDuration?: number, animationLayer?: number, frameRate?: number): boolean;
        getBool(name: string): boolean;
        setBool(name: string, value: boolean): void;
        getFloat(name: string): float;
        setFloat(name: string, value: float): void;
        getInteger(name: string): int;
        setInteger(name: string, value: int): void;
        getTrigger(name: string): boolean;
        setTrigger(name: string): void;
        resetTrigger(name: string): void;
        private getMachineState;
        private setMachineState;
        getCurrentState(layer: number): BABYLON.MachineState;
        getAnimationGroup(name: string): BABYLON.AnimationGroup;
        getAnimationGroups(): Map<string, BABYLON.AnimationGroup>;
        setAnimationGroups(groups: BABYLON.AnimationGroup[], remapTargets?: boolean): void;
        private awakeStateMachine;
        private lateStateMachine;
        private destroyStateMachine;
        private updateAnimationState;
        private updateAnimationTargets;
        private updateBlendableTargets;
        private finalizeAnimationTargets;
        private checkStateMachine;
        private checkStateTransitions;
        private setCurrentAnimationState;
        private checkAvatarTransformPath;
        private filterTargetAvatarMask;
        private sortWeightedBlendingList;
        private computeWeightedFrameRatio;
        private setupTreeBranches;
        private parseTreeBranches;
        private parse1DSimpleTreeBranches;
        private parse2DSimpleDirectionalTreeBranches;
        private parse2DFreeformDirectionalTreeBranches;
        private parse2DFreeformCartesianTreeBranches;
    }
    class BlendTreeValue {
        source: BABYLON.IBlendTreeChild;
        motion: string;
        posX: number;
        posY: number;
        weight: number;
        constructor(config: {
            source: BABYLON.IBlendTreeChild;
            motion: string;
            posX?: number;
            posY?: number;
            weight?: number;
        });
    }
    class BlendTreeUtils {
        static ClampValue(num: number, min: number, max: number): number;
        static GetSignedAngle(a: BABYLON.Vector2, b: BABYLON.Vector2): number;
        static GetLinearInterpolation(x0: number, y0: number, x1: number, y1: number, x: number): number;
        static GetRightNeighbourIndex(inputX: number, blendTreeArray: BABYLON.BlendTreeValue[]): number;
    }
    class BlendTreeSystem {
        static Calculate1DSimpleBlendTree(inputX: number, blendTreeArray: BABYLON.BlendTreeValue[]): void;
        static Calculate2DFreeformDirectional(inputX: number, inputY: number, blendTreeArray: BABYLON.BlendTreeValue[]): void;
        static Calculate2DFreeformCartesian(inputX: number, inputY: number, blendTreeArray: BABYLON.BlendTreeValue[]): void;
        private static TempVector2_IP;
        private static TempVector2_POSI;
        private static TempVector2_POSJ;
        private static TempVector2_POSIP;
        private static TempVector2_POSIJ;
    }
    class MachineState {
        hash: number;
        name: string;
        tag: string;
        time: number;
        type: BABYLON.MotionType;
        rate: number;
        length: number;
        layer: string;
        layerIndex: number;
        played: number;
        machine: string;
        motionid: number;
        interrupted: boolean;
        apparentSpeed: number;
        averageAngularSpeed: number;
        averageDuration: number;
        averageSpeed: number[];
        cycleOffset: number;
        cycleOffsetParameter: string;
        cycleOffsetParameterActive: boolean;
        iKOnFeet: boolean;
        mirror: boolean;
        mirrorParameter: string;
        irrorParameterActive: boolean;
        speed: number;
        speedParameter: string;
        speedParameterActive: boolean;
        blendtree: BABYLON.IBlendTree;
        transitions: BABYLON.ITransition[];
        behaviours: BABYLON.IBehaviour[];
        events: BABYLON.IAnimatorEvent[];
        ccurves: BABYLON.IUnityCurve[];
        tcurves: BABYLON.Animation[];
        constructor();
    }
    class TransitionCheck {
        result: string;
        offest: number;
        blending: number;
        triggered: string[];
    }
    class AnimationMixer {
        influenceBuffer: number;
        positionBuffer: BABYLON.Vector3;
        rotationBuffer: BABYLON.Quaternion;
        scalingBuffer: BABYLON.Vector3;
        originalMatrix: BABYLON.Matrix;
        blendingFactor: number;
        blendingSpeed: number;
        rootPosition: BABYLON.Vector3;
        rootRotation: BABYLON.Quaternion;
    }
    class BlendingWeights {
        primary: BABYLON.IBlendTreeChild;
        secondary: BABYLON.IBlendTreeChild;
    }
    enum MotionType {
        Clip = 0,
        Tree = 1
    }
    enum ConditionMode {
        If = 1,
        IfNot = 2,
        Greater = 3,
        Less = 4,
        Equals = 6,
        NotEqual = 7
    }
    enum InterruptionSource {
        None = 0,
        Source = 1,
        Destination = 2,
        SourceThenDestination = 3,
        DestinationThenSource = 4
    }
    enum BlendTreeType {
        Simple1D = 0,
        SimpleDirectional2D = 1,
        FreeformDirectional2D = 2,
        FreeformCartesian2D = 3,
        Direct = 4,
        Clip = 5
    }
    enum BlendTreePosition {
        Lower = 0,
        Upper = 1
    }
    enum AnimatorParameterType {
        Float = 1,
        Int = 3,
        Bool = 4,
        Trigger = 9
    }
    interface IAnimatorEvent {
        id: number;
        clip: string;
        time: number;
        function: string;
        intParameter: number;
        floatParameter: number;
        stringParameter: string;
        objectIdParameter: string;
        objectNameParameter: string;
    }
    interface IAvatarMask {
        hash: number;
        maskName: string;
        maskType: string;
        transformCount: number;
        transformPaths: string[];
    }
    interface IAnimationLayer {
        hash: number;
        name: string;
        index: number;
        entry: string;
        machine: string;
        iKPass: boolean;
        avatarMask: BABYLON.IAvatarMask;
        blendingMode: number;
        defaultWeight: number;
        syncedLayerIndex: number;
        syncedLayerAffectsTiming: boolean;
        animationTime: number;
        animationNormal: number;
        animationFirstRun: boolean;
        animationEndFrame: boolean;
        animationLoopFrame: boolean;
        animationLoopEvents: any;
        animationStateMachine: BABYLON.MachineState;
    }
    interface IAnimationCurve {
        length: number;
        preWrapMode: string;
        postWrapMode: string;
        keyframes: BABYLON.IAnimationKeyframe[];
    }
    interface IAnimationKeyframe {
        time: number;
        value: number;
        inTangent: number;
        outTangent: number;
        tangentMode: number;
    }
    interface IBehaviour {
        hash: number;
        name: string;
        layerIndex: number;
        properties: any;
    }
    interface ITransition {
        hash: number;
        anyState: boolean;
        layerIndex: number;
        machineLayer: string;
        machineName: string;
        canTransitionToSelf: boolean;
        destination: string;
        duration: number;
        exitTime: number;
        hasExitTime: boolean;
        fixedDuration: boolean;
        intSource: BABYLON.InterruptionSource;
        isExit: boolean;
        mute: boolean;
        name: string;
        offset: number;
        orderedInt: boolean;
        solo: boolean;
        conditions: BABYLON.ICondition[];
    }
    interface ICondition {
        hash: number;
        mode: BABYLON.ConditionMode;
        parameter: string;
        threshold: number;
    }
    interface IBlendTree {
        hash: number;
        name: string;
        state: string;
        children: BABYLON.IBlendTreeChild[];
        layerIndex: number;
        apparentSpeed: number;
        averageAngularSpeed: number;
        averageDuration: number;
        averageSpeed: number[];
        blendParameterX: string;
        blendParameterY: string;
        blendType: BABYLON.BlendTreeType;
        isAnimatorMotion: boolean;
        isHumanMotion: boolean;
        isLooping: boolean;
        minThreshold: number;
        maxThreshold: number;
        useAutomaticThresholds: boolean;
        valueParameterX: number;
        valueParameterY: number;
    }
    interface IBlendTreeChild {
        hash: number;
        layerIndex: number;
        cycleOffset: number;
        directBlendParameter: string;
        apparentSpeed: number;
        averageAngularSpeed: number;
        averageDuration: number;
        averageSpeed: number[];
        mirror: boolean;
        type: BABYLON.MotionType;
        motion: string;
        positionX: number;
        positionY: number;
        threshold: number;
        timescale: number;
        subtree: BABYLON.IBlendTree;
        weight: number;
        ratio: number;
        track: BABYLON.AnimationGroup;
    }
}
declare module BABYLON {
    /**
     * Babylon audio source manager pro class
     * @class AudioSource - All rights reserved (c) 2020 Mackey Kinard
     */
    class AudioSource extends BABYLON.ScriptComponent {
        private _audio;
        private _name;
        private _file;
        private _loop;
        private _mute;
        private _volume;
        private _pitch;
        private _priority;
        private _panstereo;
        private _mindistance;
        private _maxdistance;
        private _rolloffmode;
        private _rollofffactor;
        private _playonawake;
        private _spatialblend;
        private _reverbzonemix;
        private _lastmutedvolume;
        private _bypasseffects;
        private _bypassreverbzones;
        private _bypasslistenereffects;
        private _initializedReadyInstance;
        getSoundClip(): BABYLON.Sound;
        getAudioElement(): HTMLAudioElement;
        /** Register handler that is triggered when the audio clip is ready */
        onReadyObservable: Observable<Sound>;
        protected awake(): void;
        protected destroy(): void;
        protected awakeAudioSource(): void;
        protected destroyAudioSource(): void;
        /**
         * Gets the ready status for track
         */
        isReady(): boolean;
        /**
         * Gets the playing status for track
         */
        isPlaying(): boolean;
        /**
         * Gets the paused status for track
         */
        isPaused(): boolean;
        /**
         * Play the sound track
         * @param time (optional) Start the sound after X seconds. Start immediately (0) by default.
         * @param offset (optional) Start the sound at a specific time in seconds
         * @param length (optional) Sound duration (in seconds)
         */
        play(time?: number, offset?: number, length?: number): boolean;
        /**
         * Pause the sound track
         */
        pause(): boolean;
        /**
         * Stop the sound track
         * @param time (optional) Start the sound after X seconds. Start immediately (0) by default.
         */
        stop(time?: number): boolean;
        /**
         * Mute the sound track
         * @param time (optional) Mute the sound after X seconds. Start immediately (0) by default.
         */
        mute(time?: number): boolean;
        /**
         * Unmute the sound track
         * @param time (optional) Unmute the sound after X seconds. Start immediately (0) by default.
         */
        unmute(time?: number): boolean;
        /**
         * Gets the volume of the track
         */
        getVolume(): number;
        /**
         * Sets the volume of the track
         * @param volume Define the new volume of the sound
         * @param time Define time for gradual change to new volume
         */
        setVolume(volume: number, time?: number): boolean;
        /**
         * Gets the spatial sound option of the track
         */
        getSpatialSound(): boolean;
        /**
         * Gets the spatial sound option of the track
         * @param value Define the value of the spatial sound
         */
        setSpatialSound(value: boolean): void;
        /**
         * Sets the sound track playback speed
         * @param rate the audio playback rate
         */
        setPlaybackSpeed(rate: number): void;
        /**
         * Gets the current time of the track
         */
        getCurrentTrackTime(): number;
    }
}
declare module BABYLON {
    /**
     * Babylon kinematic character controller pro class (Native Bullet Physics 2.82)
     * @class CharacterController - All rights reserved (c) 2020 Mackey Kinard
     */
    class CharacterController extends BABYLON.ScriptComponent {
        private static MARGIN_FACTOR;
        private _abstractMesh;
        private _avatarRadius;
        private _avatarHeight;
        private _centerOffset;
        private _skinWidth;
        private _stepOffset;
        private _slopeLimit;
        private _capsuleSegments;
        private _minMoveDistance;
        private _isPhysicsReady;
        private _maxCollisions;
        private _useGhostSweepTest;
        private _tmpPositionBuffer;
        private _tmpCollisionContacts;
        updatePosition: boolean;
        getInternalCharacter(): any;
        getAvatarRadius(): number;
        getAvatarHeight(): number;
        getSkinWidth(): number;
        getStepOffset(): number;
        getUseSweepTest(): any;
        getMinMoveDistance(): number;
        setMinMoveDistance(distance: number): void;
        getVerticalVelocity(): number;
        getAddedMargin(): number;
        setAddedMargin(margin: number): void;
        setMaxJumpHeight(maxJumpHeight: number): void;
        setFallingSpeed(fallSpeed: number): void;
        getSlopeLimit(): number;
        setSlopeLimit(slopeRadians: number): void;
        setUpAxis(axis: number): void;
        getGravity(): number;
        setGravity(gravity: number): void;
        isGrounded(): boolean;
        isReady(): boolean;
        canJump(): boolean;
        protected m_character: any;
        protected m_ghostShape: any;
        protected m_ghostObject: any;
        protected m_ghostCollision: any;
        protected m_ghostTransform: any;
        protected m_ghostPosition: any;
        protected m_startPosition: any;
        protected m_startTransform: any;
        protected m_walkDirection: any;
        protected m_warpPosition: any;
        protected m_turningRate: number;
        protected m_moveDeltaX: number;
        protected m_moveDeltaZ: number;
        protected m_physicsEngine: BABYLON.IPhysicsEngine;
        protected m_characterPosition: BABYLON.Vector3;
        protected internalWarp(position: any): void;
        protected internalJump(): void;
        protected internalSetJumpSpeed(speed: number): void;
        protected internalSetWalkDirection(direction: any): void;
        protected internalSetVelocityForTimeInterval(velocity: any, interval: number): void;
        protected awake(): void;
        protected start(): void;
        protected update(): void;
        protected destroy(): void;
        protected awakeMovementState(): void;
        protected startMovementState(): void;
        protected syncMovementState(): void;
        protected updateMovementState(): void;
        protected parseGhostCollisionContacts(): void;
        protected destroyMovementState(): void;
        /** Register handler that is triggered when the transform position has been updated */
        onUpdatePositionObservable: Observable<TransformNode>;
        /** Register handler that is triggered when the a collision contact has entered */
        onCollisionEnterObservable: Observable<AbstractMesh>;
        /** Register handler that is triggered when the a collision contact is active */
        onCollisionStayObservable: Observable<AbstractMesh>;
        /** Register handler that is triggered when the a collision contact has exited */
        onCollisionExitObservable: Observable<AbstractMesh>;
        /** Sets the maximum number of simultaneous contact notfications to dispatch per frame. Defaults value is 4. (Advanved Use Only) */
        setMaxNotifications(max: number): void;
        /** Sets character collision activation state using physics ghost object. (Advanved Use Only) */
        setActivationState(state: number): void;
        /** Gets character collision group filter using physics ghost object. (Advanved Use Only) */
        getCollisionFilterGroup(): number;
        /** Sets character collision group filter using physics ghost object. (Advanved Use Only) */
        setCollisionFilterGroup(group: number): void;
        /** Gets character collision mask filter using physics ghost object. (Advanved Use Only) */
        getCollisionFilterMask(): number;
        /** Sets the character collision mask filter using physics ghost object. (Advanved Use Only) */
        setCollisionFilterMask(mask: number): void;
        /** Gets the chracter contact processing threshold using physics ghost object. (Advanved Use Only) */
        getContactProcessingThreshold(): number;
        /** Sets character contact processing threshold using physics ghost object. (Advanved Use Only) */
        setContactProcessingThreshold(threshold: number): void;
        /** Get the current position of the physics ghost object world transform. (Advanved Use Only) */
        getGhostWorldPosition(): BABYLON.Vector3;
        /** Get the current position of the physics ghost object world transform. (Advanved Use Only) */
        getGhostWorldPositionToRef(result: BABYLON.Vector3): void;
        /** Manually set the position of the physics ghost object world transform. (Advanved Use Only) */
        setGhostWorldPosition(position: BABYLON.Nullable<BABYLON.Vector3>): void;
        /** Sets the kinematic character position to the specified location. */
        set(x: number, y: number, z: number): void;
        /** Translates the kinematic character with the specfied velocity. */
        move(velocity: BABYLON.Vector3): void;
        /** Jumps the kinematic chacracter with the specified speed. */
        jump(speed: number): void;
        /** Warps the kinematic chacracter to the specified position. */
        warp(position: BABYLON.Vector3): void;
    }
}
declare module BABYLON {
    /**
     * Babylon navigation agent pro class (Unity Style Navigation Agent System)
     * @class NavigationAgent - All rights reserved (c) 2020 Mackey Kinard
     */
    class NavigationAgent extends BABYLON.ScriptComponent {
        private static TARGET_ANGLE_FACTOR;
        private static ANGULAR_SPEED_RATIO;
        private type;
        private speed;
        private baseOffset;
        private avoidRadius;
        private avoidHeight;
        private acceleration;
        private areaMask;
        private autoRepath;
        private autoBraking;
        private autoTraverseOffMeshLink;
        private avoidancePriority;
        private obstacleAvoidanceType;
        private distanceToTarget;
        private teleporting;
        private moveDirection;
        private resetPosition;
        private lastPosition;
        private distancePosition;
        private currentPosition;
        private currentRotation;
        private currentVelocity;
        private currentWaypoint;
        heightOffset: number;
        angularSpeed: number;
        updatePosition: boolean;
        updateRotation: boolean;
        distanceEpsilon: number;
        velocityEpsilon: number;
        offMeshVelocity: number;
        stoppingDistance: number;
        isReady(): boolean;
        isNavigating(): boolean;
        isTeleporting(): boolean;
        isOnOffMeshLink(): boolean;
        getAgentType(): number;
        getAgentState(): number;
        getAgentIndex(): number;
        getAgentOffset(): number;
        getTargetDistance(): number;
        getCurrentPosition(): BABYLON.Vector3;
        getCurrentRotation(): BABYLON.Quaternion;
        getCurrentVelocity(): BABYLON.Vector3;
        getAgentParameters(): BABYLON.IAgentParameters;
        setAgentParameters(parameters: BABYLON.IAgentParameters): void;
        protected m_agentState: number;
        protected m_agentIndex: number;
        protected m_agentReady: boolean;
        protected m_agentGhost: BABYLON.TransformNode;
        protected m_agentParams: BABYLON.IAgentParameters;
        protected m_agentMovement: BABYLON.Vector3;
        protected m_agentDirection: BABYLON.Vector3;
        protected m_agentQuaternion: BABYLON.Quaternion;
        protected m_agentDestination: BABYLON.Vector3;
        protected awake(): void;
        protected update(): void;
        protected destroy(): void;
        /** Register handler that is triggered when the agent is ready for navigation */
        onReadyObservable: Observable<TransformNode>;
        /** Register handler that is triggered before the navigation update */
        onPreUpdateObservable: Observable<TransformNode>;
        /** Register handler that is triggered after the navigation update */
        onPostUpdateObservable: Observable<TransformNode>;
        /** Register handler that is triggered when the navigation is complete */
        onNavCompleteObservable: Observable<TransformNode>;
        private awakeNavigationAgent;
        private updateNavigationAgent;
        private updateAgentParameters;
        private destroyNavigationAgent;
        /** Move agent relative to current position. */
        move(offset: BABYLON.Vector3, closetPoint?: boolean): void;
        /** Teleport agent to destination point. */
        teleport(destination: BABYLON.Vector3, closetPoint?: boolean): void;
        /** Sets agent current destination point. */
        setDestination(destination: BABYLON.Vector3, closetPoint?: boolean): void;
        /** Gets agent current world space velocity. */
        getAgentVelocity(): BABYLON.Vector3;
        /** Gets agent current world space velocity. */
        getAgentVelocityToRef(result: BABYLON.Vector3): void;
        /** Gets agent current world space position. */
        getAgentPosition(): BABYLON.Vector3;
        /** Gets agent current world space position. */
        getAgentPositionToRef(result: BABYLON.Vector3): void;
        /** Gets agent current waypoint position. */
        getAgentWaypoint(): BABYLON.Vector3;
        /** Gets agent current waypoint position. */
        getAgentWaypointToRef(result: BABYLON.Vector3): void;
        /** Cancel current waypoint path navigation. */
        cancelNavigation(): void;
    }
    /**
     *  Recast Detour Crowd Agent States
     */
    enum CrowdAgentState {
        DT_CROWDAGENT_STATE_INVALID = 0,
        DT_CROWDAGENT_STATE_WALKING = 1,
        DT_CROWDAGENT_STATE_OFFMESH = 2
    }
}
declare module BABYLON {
    /**
     * Babylon raycast vehicle controller pro class (Native Bullet Physics 2.82)
     * @class RaycastVehicle - All rights reserved (c) 2020 Mackey Kinard
     */
    class RaycastVehicle {
        private _centerMass;
        private _chassisMesh;
        private _tempVectorPos;
        lockedWheelIndexes: number[];
        getInternalVehicle(): any;
        getUpAxis(): number;
        getRightAxis(): number;
        getForwardAxis(): number;
        getForwardVector(): any;
        getNumWheels(): number;
        getWheelInfo(wheel: number): any;
        resetSuspension(): void;
        setPitchControl(pitch: number): void;
        setEngineForce(power: number, wheel: number): void;
        setBrakingForce(brake: number, wheel: number): void;
        getWheelTransform(wheel: number): any;
        updateWheelTransform(wheel: number, interpolate: boolean): void;
        getUserConstraintType(): number;
        setUserConstraintType(userConstraintType: number): void;
        setUserConstraintId(uid: number): void;
        getUserConstraintId(): number;
        getRawCurrentSpeedKph(): number;
        getRawCurrentSpeedMph(): number;
        getAbsCurrentSpeedKph(): number;
        getAbsCurrentSpeedMph(): number;
        getVehicleTuningSystem(): any;
        getChassisWorldTransform(): any;
        protected m_vehicle: any;
        protected m_vehicleTuning: any;
        protected m_vehicleRaycaster: any;
        protected m_vehicleColliders: any[];
        protected m_tempTransform: any;
        protected m_tempPosition: any;
        protected m_wheelDirectionCS0: any;
        protected m_wheelAxleCS: any;
        constructor(entity: BABYLON.AbstractMesh, world: any, center: BABYLON.Vector3, defaultAngularFactor?: BABYLON.Vector3);
        dispose(): void;
        /** Gets the rigidbody raycast vehicle controller for the entity. Note: Wheel collider metadata informaion is required for raycast vehicle control. */
        static GetInstance(scene: BABYLON.Scene, rigidbody: BABYLON.RigidbodyPhysics, defaultAngularFactor?: BABYLON.Vector3): BABYLON.RaycastVehicle;
        /** Gets vehicle enable multi raycast flag using physics vehicle object. (Advanved Use Only) */
        getEnableMultiRaycast(): boolean;
        /** Sets vehicle enable multi raycast flag using physics vehicle object. (Advanved Use Only) */
        setEnableMultiRaycast(flag: boolean): void;
        /** Gets vehicle stable force using physics vehicle object. (Advanved Use Only) */
        getStabilizingForce(): number;
        /** Sets vehicle stable force using physics vehicle object. (Advanved Use Only) */
        setStabilizingForce(force: number): void;
        /** Gets vehicle smooth flying impulse force using physics vehicle object. (Advanved Use Only) */
        getSmoothFlyingImpulse(): number;
        /** Sets vehicle smooth flying impulse using physics vehicle object. (Advanved Use Only) */
        setSmoothFlyingImpulse(impulse: number): void;
        /** Gets vehicle track connection accel force using physics vehicle object. (Advanved Use Only) */
        getTrackConnectionAccel(): number;
        /** Sets vehicle track connection accel force using physics vehicle object. (Advanved Use Only) */
        setTrackConnectionAccel(force: number): void;
        /** Gets vehicle min wheel contact count using physics vehicle object. (Advanved Use Only) */
        getMinimumWheelContacts(): number;
        /** Sets vehicle min wheel contact count using physics vehicle object. (Advanved Use Only) */
        setMinimumWheelContacts(force: number): void;
        /** Gets vehicle interpolate mesh normals flag using physics raycaster object. (Advanved Use Only) */
        getInterpolateNormals(): boolean;
        /** Sets the vehicle interpolate mesh normals using physics raycaster object. (Advanved Use Only) */
        setInterpolateNormals(flag: boolean): void;
        /** Gets vehicle shape testing mode using physics raycaster object. (Advanved Use Only) */
        getShapeTestingMode(): boolean;
        /** Sets the vehicle shape testing mode using physics raycaster object. (Advanved Use Only) */
        setShapeTestingMode(mode: boolean): void;
        /** Gets vehicle shape testing size using physics raycaster object. (Advanved Use Only) */
        getShapeTestingSize(): float;
        /** Sets the vehicle shape testing mode using physics raycaster object. (Advanved Use Only) */
        setShapeTestingSize(size: float): void;
        /** Gets vehicle shape test point count using physics raycaster object. (Advanved Use Only) */
        getShapeTestingCount(): float;
        /** Sets the vehicle shape test point count using physics raycaster object. (Advanved Use Only) */
        setShapeTestingCount(count: float): void;
        /** Gets vehicle sweep penetration amount using physics raycaster object. (Advanved Use Only) */
        getSweepPenetration(): float;
        /** Sets the vehicle sweep penetration amount using physics raycaster object. (Advanved Use Only) */
        setSweepPenetration(amount: float): void;
        /** Gets vehicle collision group filter using physics raycaster object. (Advanved Use Only) */
        getCollisionFilterGroup(): number;
        /** Sets vehicle collision group filter using physics raycaster object. (Advanved Use Only) */
        setCollisionFilterGroup(group: number): void;
        /** Gets vehicle collision mask filter using physics raycaster object. (Advanved Use Only) */
        getCollisionFilterMask(): number;
        /** Sets the vehicle collision mask filter using physics raycaster object. (Advanved Use Only) */
        setCollisionFilterMask(mask: number): void;
        /** Gets the internal wheel index by id string. */
        getWheelIndexByID(id: string): number;
        /** Gets the internal wheel index by name string. */
        getWheelIndexByName(name: string): number;
        /** Gets the internal wheel collider information. */
        getWheelColliderInfo(wheel: number): number;
        /** Sets the internal wheel hub transform mesh by index. Used to rotate and bounce wheels. */
        setWheelTransformMesh(wheel: number, transform: BABYLON.TransformNode): void;
        getVisualSteeringAngle(wheel: number): number;
        setVisualSteeringAngle(angle: number, wheel: number): void;
        getPhysicsSteeringAngle(wheel: number): number;
        setPhysicsSteeringAngle(angle: number, wheel: number): void;
        protected setupWheelInformation(defaultAngularFactor?: BABYLON.Vector3): void;
        protected updateWheelInformation(): void;
        protected lockedWheelInformation(wheel: number): boolean;
        protected deleteWheelInformation(): void;
    }
}
declare module BABYLON {
    /**
     * Babylon realtime reflection system pro class (Unity Style Realtime Reflection Probes)
     * @class RealtimeReflection - All rights reserved (c) 2020 Mackey Kinard
     */
    class RealtimeReflection extends BABYLON.ScriptComponent {
        private static SKYBOX_FLAG;
        private renderList;
        private probeList;
        private refreshMode;
        private cullingMask;
        private clearFlags;
        private probeid;
        private useProbeList;
        private includeChildren;
        private resolution;
        private boxPos;
        private boxSize;
        private boxProjection;
        getProbeList(): BABYLON.AbstractMesh[];
        getRenderList(): BABYLON.AbstractMesh[];
        protected awake(): void;
        protected start(): void;
        protected destroy(): void;
        protected awakeRealtimReflections(): void;
        protected startRealtimReflections(): void;
        protected destroyRealtimReflections(): void;
    }
}
declare module BABYLON {
    /**
     * Babylon full rigidbody physics pro class (Native Bullet Physics 2.82)
     * @class RigidbodyPhysics - All rights reserved (c) 2020 Mackey Kinard
     */
    class RigidbodyPhysics extends BABYLON.ScriptComponent {
        private static TempAmmoVector;
        private static TempAmmoVectorAux;
        private static TempCenterTransform;
        private _abstractMesh;
        private _isKinematic;
        private _maxCollisions;
        private _isPhysicsReady;
        private _collisionObject;
        private _centerOfMass;
        private _tmpLinearFactor;
        private _tmpAngularFactor;
        private _tmpCenterOfMass;
        private _tmpGravityVector;
        private _tmpCollisionContacts;
        get isKinematic(): boolean;
        get centerOfMass(): BABYLON.Vector3;
        protected m_physicsWorld: any;
        protected m_physicsEngine: BABYLON.IPhysicsEngine;
        protected m_raycastVehicle: any;
        protected awake(): void;
        protected update(): void;
        protected after(): void;
        protected destroy(): void;
        protected awakeRigidbodyState(): void;
        protected updateRigidbodyState(): void;
        protected afterRigidbodyState(): void;
        protected destroyRigidbodyState(): void;
        protected syncronizeVehicleController(): void;
        protected parseBodyCollisionContacts(): void;
        protected resetBodyCollisionContacts(): void;
        /** Register handler that is triggered when the a collision contact has entered */
        onCollisionEnterObservable: Observable<AbstractMesh>;
        /** Register handler that is triggered when the a collision contact is active */
        onCollisionStayObservable: Observable<AbstractMesh>;
        /** Register handler that is triggered when the a collision contact has exited */
        onCollisionExitObservable: Observable<AbstractMesh>;
        /** Sets entity gravity value using physics impostor body. */
        setGravity(gravity: BABYLON.Vector3): void;
        /** Gets entity gravity value using physics impostor body. */
        getGravity(): BABYLON.Nullable<BABYLON.Vector3>;
        /** Gets entity gravity value using physics impostor body. */
        getGravityToRef(result: BABYLON.Vector3): void;
        /** Gets mass of entity using physics impostor. */
        getMass(): number;
        /** Sets mass to entity using physics impostor. */
        setMass(mass: number): void;
        /** Gets entity friction level using physics impostor. */
        getFriction(): number;
        /** Applies friction to entity using physics impostor. */
        setFriction(friction: number): void;
        /** Gets restitution of entity using physics impostor. */
        getRestitution(): number;
        /** Sets restitution to entity using physics impostor. */
        setRestitution(restitution: number): void;
        /** Gets entity linear velocity using physics impostor. */
        getLinearVelocity(): BABYLON.Nullable<BABYLON.Vector3>;
        /** Sets entity linear velocity using physics impostor. */
        setLinearVelocity(velocity: BABYLON.Vector3): void;
        /** Gets entity angular velocity using physics impostor. */
        getAngularVelocity(): BABYLON.Nullable<BABYLON.Vector3>;
        /** Sets entity angular velocity using physics impostor. */
        setAngularVelocity(velocity: BABYLON.Vector3): void;
        /** Gets the native physics world transform object using physics impostor body. (Ammo.btTransform) */
        getWorldTransform(): any;
        /** sets the native physics world transform object using physics impostor body. (Ammo.btTransform) */
        setWorldTransform(btTransform: any): any;
        clearForces(): void;
        applyTorque(torque: BABYLON.Vector3): void;
        applyLocalTorque(torque: BABYLON.Vector3): void;
        applyImpulse(impulse: BABYLON.Vector3, rel_pos: BABYLON.Vector3): void;
        applyCentralImpulse(impulse: BABYLON.Vector3): void;
        applyTorqueImpulse(torque: BABYLON.Vector3): void;
        applyForce(force: BABYLON.Vector3, rel_pos: BABYLON.Vector3): void;
        applyCentralForce(force: BABYLON.Vector3): void;
        applyCentralLocalForce(force: BABYLON.Vector3): void;
        /** gets rigidbody center of mass */
        getCenterOfMassTransform(): BABYLON.Vector3;
        /** Sets rigidbody center of mass */
        setCenterOfMassTransform(center: BABYLON.Vector3): void;
        /** Gets entity linear factor using physics impostor body. */
        getLinearFactor(): BABYLON.Vector3;
        /** Sets entity linear factor using physics impostor body. */
        setLinearFactor(factor: BABYLON.Vector3): void;
        /** Gets entity angular factor using physics impostor body. */
        getAngularFactor(): BABYLON.Vector3;
        /** Sets entity angular factor using physics impostor body. */
        setAngularFactor(factor: BABYLON.Vector3): void;
        /** Gets entity angular damping using physics impostor body. */
        getAngularDamping(): number;
        /** Gets entity linear damping using physics impostor body. */
        getLinearDamping(): number;
        /** Sets entity drag damping using physics impostor body. */
        setDamping(linear: number, angular: number): void;
        /** Sets entity sleeping threshold using physics impostor body. */
        setSleepingThresholds(linear: number, angular: number): void;
        /** Checks if rigidbody has wheel collider metadata for the entity. Note: Wheel collider metadata informaion is required for vehicle control. */
        hasWheelColliders(): boolean;
        /** Sets the maximum number of simultaneous contact notfications to dispatch per frame. Defaults value is 4. (Advanved Use Only) */
        setMaxNotifications(max: number): void;
        /** Sets entity collision activation state using physics impostor body. (Advanved Use Only) */
        setActivationState(state: number): void;
        /** Gets entity collision filter group using physics impostor body. (Advanved Use Only) */
        getCollisionFilterGroup(): number;
        /** Sets entity collision filter group using physics impostor body. (Advanved Use Only) */
        setCollisionFilterGroup(group: number): void;
        /** Gets entity collision filter mask using physics impostor body. (Advanved Use Only) */
        getCollisionFilterMask(): number;
        /** Sets entity collision filter mask using physics impostor body. (Advanved Use Only) */
        setCollisionFilterMask(mask: number): void;
        /** Gets the entity collision shape type using physics impostor body. (Advanved Use Only) */
        getCollisionShapeType(): number;
        /** Gets the entity collision shape margin using physics impostor body. (Advanved Use Only) */
        getCollisionShapeMargin(): number;
        /** Sets entity collision shape margin using physics impostor body. (Advanved Use Only) */
        setCollisionShapeMargin(margin: number): void;
        /** Gets the entity contact processing threshold using physics impostor body. (Advanved Use Only) */
        /** Sets entity contact processing threshold using physics impostor body. (Advanved Use Only) */
        setContactProcessingThreshold(threshold: number): void;
        /** TODO */
        static CreatePhysicsMetadata(mass: number, drag?: number, angularDrag?: number, centerMass?: Vector3): any;
        /** TODO */
        static CreateCollisionMetadata(type: string, trigger?: boolean, convexmesh?: boolean, restitution?: number, dynamicfriction?: number, staticfriction?: number): any;
        /** TODO */
        static CreatePhysicsProperties(mass: number, drag?: number, angularDrag?: number, useGravity?: boolean, isKinematic?: boolean): any;
        /** TODO */
        static SetupPhysicsComponent(scene: BABYLON.Scene, entity: BABYLON.AbstractMesh): void;
        private static ConfigRigidbodyPhysics;
    }
    /**
     * Babylon collision contact info pro class (Native Bullet Physics 2.82)
     * @class CollisionContactInfo - All rights reserved (c) 2020 Mackey Kinard
     */
    class CollisionContactInfo {
        mesh: BABYLON.AbstractMesh;
        state: number;
        reset: boolean;
    }
}
declare module BABYLON {
    /**
     * Babylon shuriken particle system pro class (Unity Style Shuriken Particle System)
     * @class ShurikenParticles - All rights reserved (c) 2020 Mackey Kinard
     */
    class ShurikenParticles extends BABYLON.ScriptComponent {
        protected awake(): void;
        protected start(): void;
        protected update(): void;
        protected late(): void;
        protected after(): void;
        protected destroy(): void;
    }
}
declare module BABYLON {
    /**
     * Babylon web video player pro class (Unity Style Shuriken Particle System)
     * @class WebVideoPlayer - All rights reserved (c) 2020 Mackey Kinard
     */
    class WebVideoPlayer extends BABYLON.ScriptComponent {
        getVideoMaterial(): BABYLON.StandardMaterial;
        getVideoTexture(): BABYLON.VideoTexture;
        getVideoElement(): HTMLVideoElement;
        getVideoScreen(): BABYLON.AbstractMesh;
        protected m_abstractMesh: BABYLON.AbstractMesh;
        protected m_videoTexture: BABYLON.VideoTexture;
        protected m_videoMaterial: BABYLON.StandardMaterial;
        protected m_diffuseIntensity: number;
        protected awake(): void;
        protected destroy(): void;
        protected awakeWebVideoPlayer(): void;
        protected destroyWebVideoPlayer(): void;
        /** Set web video player source */
        setVideoSource(src: string | string[] | HTMLVideoElement, generateMipMaps?: boolean, invertY?: boolean, samplingMode?: number, settings?: BABYLON.VideoTextureSettings, volume?: number, speed?: number): void;
    }
}
