import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
import { Readable } from "stream";

export enum AacCodingMode {
  AD_RECEIVER_MIX = "AD_RECEIVER_MIX",
  CODING_MODE_1_0 = "CODING_MODE_1_0",
  CODING_MODE_1_1 = "CODING_MODE_1_1",
  CODING_MODE_2_0 = "CODING_MODE_2_0",
  CODING_MODE_5_1 = "CODING_MODE_5_1",
}

export enum AacInputType {
  BROADCASTER_MIXED_AD = "BROADCASTER_MIXED_AD",
  NORMAL = "NORMAL",
}

export enum AacProfile {
  HEV1 = "HEV1",
  HEV2 = "HEV2",
  LC = "LC",
}

export enum AacRateControlMode {
  CBR = "CBR",
  VBR = "VBR",
}

export enum AacRawFormat {
  LATM_LOAS = "LATM_LOAS",
  NONE = "NONE",
}

/**
 * Aac Settings
 */
export interface AacSettings {
  /**
   * Use MPEG-2 AAC audio instead of MPEG-4 AAC audio for raw or MPEG-2 Transport Stream containers.
   */
  Spec?: AacSpec | string;

  /**
   * Set to "broadcasterMixedAd" when input contains pre-mixed main audio + AD (narration) as a stereo pair.  The Audio Type field (audioType) will be set to 3, which signals to downstream systems that this stream contains "broadcaster mixed AD". Note that the input received by the encoder must contain pre-mixed audio; the encoder does not perform the mixing. The values in audioTypeControl and audioType (in AudioDescription) are ignored when set to broadcasterMixedAd.
   *
   * Leave set to "normal" when input does not contain pre-mixed audio + AD.
   */
  InputType?: AacInputType | string;

  /**
   * Rate Control Mode.
   */
  RateControlMode?: AacRateControlMode | string;

  /**
   * Sample rate in Hz. Valid values depend on rate control mode and profile.
   */
  SampleRate?: number;

  /**
   * AAC Profile.
   */
  Profile?: AacProfile | string;

  /**
   * VBR Quality Level - Only used if rateControlMode is VBR.
   */
  VbrQuality?: AacVbrQuality | string;

  /**
   * Average bitrate in bits/second. Valid values depend on rate control mode and profile.
   */
  Bitrate?: number;

  /**
   * Mono, Stereo, or 5.1 channel layout. Valid values depend on rate control mode and profile. The adReceiverMix setting receives a stereo description plus control track and emits a mono AAC encode of the description track, with control data emitted in the PES header as per ETSI TS 101 154 Annex E.
   */
  CodingMode?: AacCodingMode | string;

  /**
   * Sets LATM / LOAS AAC output for raw containers.
   */
  RawFormat?: AacRawFormat | string;
}

export namespace AacSettings {
  export const filterSensitiveLog = (obj: AacSettings): any => ({
    ...obj,
  });
}

export enum AacSpec {
  MPEG2 = "MPEG2",
  MPEG4 = "MPEG4",
}

export enum AacVbrQuality {
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM_HIGH = "MEDIUM_HIGH",
  MEDIUM_LOW = "MEDIUM_LOW",
}

export enum Ac3BitstreamMode {
  COMMENTARY = "COMMENTARY",
  COMPLETE_MAIN = "COMPLETE_MAIN",
  DIALOGUE = "DIALOGUE",
  EMERGENCY = "EMERGENCY",
  HEARING_IMPAIRED = "HEARING_IMPAIRED",
  MUSIC_AND_EFFECTS = "MUSIC_AND_EFFECTS",
  VISUALLY_IMPAIRED = "VISUALLY_IMPAIRED",
  VOICE_OVER = "VOICE_OVER",
}

export enum Ac3CodingMode {
  CODING_MODE_1_0 = "CODING_MODE_1_0",
  CODING_MODE_1_1 = "CODING_MODE_1_1",
  CODING_MODE_2_0 = "CODING_MODE_2_0",
  CODING_MODE_3_2_LFE = "CODING_MODE_3_2_LFE",
}

export enum Ac3DrcProfile {
  FILM_STANDARD = "FILM_STANDARD",
  NONE = "NONE",
}

export enum Ac3LfeFilter {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum Ac3MetadataControl {
  FOLLOW_INPUT = "FOLLOW_INPUT",
  USE_CONFIGURED = "USE_CONFIGURED",
}

/**
 * Ac3 Settings
 */
export interface Ac3Settings {
  /**
   * When set to enabled, applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid in codingMode32Lfe mode.
   */
  LfeFilter?: Ac3LfeFilter | string;

  /**
   * Sets the dialnorm for the output. If excluded and input audio is Dolby Digital, dialnorm will be passed through.
   */
  Dialnorm?: number;

  /**
   * If set to filmStandard, adds dynamic range compression signaling to the output bitstream as defined in the Dolby Digital specification.
   */
  DrcProfile?: Ac3DrcProfile | string;

  /**
   * Average bitrate in bits/second. Valid bitrates depend on the coding mode.
   */
  Bitrate?: number;

  /**
   * When set to "followInput", encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used.
   */
  MetadataControl?: Ac3MetadataControl | string;

  /**
   * Dolby Digital coding mode. Determines number of channels.
   */
  CodingMode?: Ac3CodingMode | string;

  /**
   * Specifies the bitstream mode (bsmod) for the emitted AC-3 stream. See ATSC A/52-2012 for background on these values.
   */
  BitstreamMode?: Ac3BitstreamMode | string;
}

export namespace Ac3Settings {
  export const filterSensitiveLog = (obj: Ac3Settings): any => ({
    ...obj,
  });
}

export enum AcceptHeader {
  image_jpeg = "image/jpeg",
}

export enum AfdSignaling {
  AUTO = "AUTO",
  FIXED = "FIXED",
  NONE = "NONE",
}

/**
 * Archive Container Settings
 */
export interface ArchiveContainerSettings {
  /**
   * M2ts Settings
   */
  M2tsSettings?: M2tsSettings;
}

export namespace ArchiveContainerSettings {
  export const filterSensitiveLog = (obj: ArchiveContainerSettings): any => ({
    ...obj,
  });
}

/**
 * Archive Group Settings
 */
export interface ArchiveGroupSettings {
  /**
   * Number of seconds to write to archive file before closing and starting a new one.
   */
  RolloverInterval?: number;

  /**
   * A directory and base filename where archive files should be written.
   */
  Destination: OutputLocationRef | undefined;
}

export namespace ArchiveGroupSettings {
  export const filterSensitiveLog = (obj: ArchiveGroupSettings): any => ({
    ...obj,
  });
}

/**
 * Archive Output Settings
 */
export interface ArchiveOutputSettings {
  /**
   * Settings specific to the container type of the file.
   */
  ContainerSettings: ArchiveContainerSettings | undefined;

  /**
   * Output file extension. If excluded, this will be auto-selected from the container type.
   */
  Extension?: string;

  /**
   * String concatenated to the end of the destination filename.  Required for multiple outputs of the same type.
   */
  NameModifier?: string;
}

export namespace ArchiveOutputSettings {
  export const filterSensitiveLog = (obj: ArchiveOutputSettings): any => ({
    ...obj,
  });
}

/**
 * Arib Destination Settings
 */
export interface AribDestinationSettings {}

export namespace AribDestinationSettings {
  export const filterSensitiveLog = (obj: AribDestinationSettings): any => ({
    ...obj,
  });
}

/**
 * Arib Source Settings
 */
export interface AribSourceSettings {}

export namespace AribSourceSettings {
  export const filterSensitiveLog = (obj: AribSourceSettings): any => ({
    ...obj,
  });
}

/**
 * Audio Channel Mapping
 */
export interface AudioChannelMapping {
  /**
   * Indices and gain values for each input channel that should be remixed into this output channel.
   */
  InputChannelLevels: InputChannelLevel[] | undefined;

  /**
   * The index of the output channel being produced.
   */
  OutputChannel: number | undefined;
}

export namespace AudioChannelMapping {
  export const filterSensitiveLog = (obj: AudioChannelMapping): any => ({
    ...obj,
  });
}

/**
 * Audio Codec Settings
 */
export interface AudioCodecSettings {
  /**
   * Pass Through Settings
   */
  PassThroughSettings?: PassThroughSettings;

  /**
   * Ac3 Settings
   */
  Ac3Settings?: Ac3Settings;

  /**
   * Mp2 Settings
   */
  Mp2Settings?: Mp2Settings;

  /**
   * Aac Settings
   */
  AacSettings?: AacSettings;

  /**
   * Eac3 Settings
   */
  Eac3Settings?: Eac3Settings;
}

export namespace AudioCodecSettings {
  export const filterSensitiveLog = (obj: AudioCodecSettings): any => ({
    ...obj,
  });
}

/**
 * Audio Description
 */
export interface AudioDescription {
  /**
   * Advanced audio normalization settings.
   */
  AudioNormalizationSettings?: AudioNormalizationSettings;

  /**
   * RFC 5646 language code representing the language of the audio output track. Only used if languageControlMode is useConfigured, or there is no ISO 639 language code specified in the input.
   */
  LanguageCode?: string;

  /**
   * The name of the AudioSelector used as the source for this AudioDescription.
   */
  AudioSelectorName: string | undefined;

  /**
   * Used for MS Smooth and Apple HLS outputs. Indicates the name displayed by the player (eg. English, or Director Commentary).
   */
  StreamName?: string;

  /**
   * Choosing followInput will cause the ISO 639 language code of the output to follow the ISO 639 language code of the input. The languageCode will be used when useConfigured is set, or when followInput is selected but there is no ISO 639 language code specified by the input.
   */
  LanguageCodeControl?: AudioDescriptionLanguageCodeControl | string;

  /**
   * Applies only if audioTypeControl is useConfigured. The values for audioType are defined in ISO-IEC 13818-1.
   */
  AudioType?: AudioType | string;

  /**
   * The name of this AudioDescription. Outputs will use this name to uniquely identify this AudioDescription.  Description names should be unique within this Live Event.
   */
  Name: string | undefined;

  /**
   * Audio codec settings.
   */
  CodecSettings?: AudioCodecSettings;

  /**
   * Settings that control how input audio channels are remixed into the output audio channels.
   */
  RemixSettings?: RemixSettings;

  /**
   * Determines how audio type is determined.
   *   followInput: If the input contains an ISO 639 audioType, then that value is passed through to the output. If the input contains no ISO 639 audioType, the value in Audio Type is included in the output.
   *   useConfigured: The value in Audio Type is included in the output.
   * Note that this field and audioType are both ignored if inputType is broadcasterMixedAd.
   */
  AudioTypeControl?: AudioDescriptionAudioTypeControl | string;
}

export namespace AudioDescription {
  export const filterSensitiveLog = (obj: AudioDescription): any => ({
    ...obj,
  });
}

export enum AudioDescriptionAudioTypeControl {
  FOLLOW_INPUT = "FOLLOW_INPUT",
  USE_CONFIGURED = "USE_CONFIGURED",
}

export enum AudioDescriptionLanguageCodeControl {
  FOLLOW_INPUT = "FOLLOW_INPUT",
  USE_CONFIGURED = "USE_CONFIGURED",
}

/**
 * Audio Language Selection
 */
export interface AudioLanguageSelection {
  /**
   * When set to "strict", the transport stream demux strictly identifies audio streams by their language descriptor. If a PMT update occurs such that an audio stream matching the initially selected language is no longer present then mute will be encoded until the language returns. If "loose", then on a PMT update the demux will choose another audio stream in the program with the same stream type if it can't find one with the same language.
   */
  LanguageSelectionPolicy?: AudioLanguageSelectionPolicy | string;

  /**
   * Selects a specific three-letter language code from within an audio source.
   */
  LanguageCode: string | undefined;
}

export namespace AudioLanguageSelection {
  export const filterSensitiveLog = (obj: AudioLanguageSelection): any => ({
    ...obj,
  });
}

export enum AudioLanguageSelectionPolicy {
  LOOSE = "LOOSE",
  STRICT = "STRICT",
}

export enum AudioNormalizationAlgorithm {
  ITU_1770_1 = "ITU_1770_1",
  ITU_1770_2 = "ITU_1770_2",
}

export enum AudioNormalizationAlgorithmControl {
  CORRECT_AUDIO = "CORRECT_AUDIO",
}

/**
 * Audio Normalization Settings
 */
export interface AudioNormalizationSettings {
  /**
   * Target LKFS(loudness) to adjust volume to. If no value is entered, a default value will be used according to the chosen algorithm.  The CALM Act (1770-1) recommends a target of -24 LKFS. The EBU R-128 specification (1770-2) recommends a target of -23 LKFS.
   */
  TargetLkfs?: number;

  /**
   * When set to correctAudio the output audio is corrected using the chosen algorithm. If set to measureOnly, the audio will be measured but not adjusted.
   */
  AlgorithmControl?: AudioNormalizationAlgorithmControl | string;

  /**
   * Audio normalization algorithm to use. itu17701 conforms to the CALM Act specification, itu17702 conforms to the EBU R-128 specification.
   */
  Algorithm?: AudioNormalizationAlgorithm | string;
}

export namespace AudioNormalizationSettings {
  export const filterSensitiveLog = (obj: AudioNormalizationSettings): any => ({
    ...obj,
  });
}

export enum AudioOnlyHlsSegmentType {
  AAC = "AAC",
  FMP4 = "FMP4",
}

/**
 * Audio Only Hls Settings
 */
export interface AudioOnlyHlsSettings {
  /**
   * Specifies the segment type.
   */
  SegmentType?: AudioOnlyHlsSegmentType | string;

  /**
   * Four types of audio-only tracks are supported:
   *
   * Audio-Only Variant Stream
   * The client can play back this audio-only stream instead of video in low-bandwidth scenarios. Represented as an EXT-X-STREAM-INF in the HLS manifest.
   *
   * Alternate Audio, Auto Select, Default
   * Alternate rendition that the client should try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=YES, AUTOSELECT=YES
   *
   * Alternate Audio, Auto Select, Not Default
   * Alternate rendition that the client may try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=YES
   *
   * Alternate Audio, not Auto Select
   * Alternate rendition that the client will not try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=NO
   */
  AudioTrackType?: AudioOnlyHlsTrackType | string;

  /**
   * Specifies the group to which the audio Rendition belongs.
   */
  AudioGroupId?: string;

  /**
   * Optional. Specifies the .jpg or .png image to use as the cover art for an audio-only output. We recommend a low bit-size file because the image increases the output audio bandwidth.
   *
   * The image is attached to the audio as an ID3 tag, frame type APIC, picture type 0x10, as per the "ID3 tag version 2.4.0 - Native Frames" standard.
   */
  AudioOnlyImage?: InputLocation;
}

export namespace AudioOnlyHlsSettings {
  export const filterSensitiveLog = (obj: AudioOnlyHlsSettings): any => ({
    ...obj,
  });
}

export enum AudioOnlyHlsTrackType {
  ALTERNATE_AUDIO_AUTO_SELECT = "ALTERNATE_AUDIO_AUTO_SELECT",
  ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT = "ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT",
  ALTERNATE_AUDIO_NOT_AUTO_SELECT = "ALTERNATE_AUDIO_NOT_AUTO_SELECT",
  AUDIO_ONLY_VARIANT_STREAM = "AUDIO_ONLY_VARIANT_STREAM",
}

/**
 * Audio Pid Selection
 */
export interface AudioPidSelection {
  /**
   * Selects a specific PID from within a source.
   */
  Pid: number | undefined;
}

export namespace AudioPidSelection {
  export const filterSensitiveLog = (obj: AudioPidSelection): any => ({
    ...obj,
  });
}

/**
 * Audio Selector
 */
export interface AudioSelector {
  /**
   * The name of this AudioSelector. AudioDescriptions will use this name to uniquely identify this Selector.  Selector names should be unique per input.
   */
  Name: string | undefined;

  /**
   * The audio selector settings.
   */
  SelectorSettings?: AudioSelectorSettings;
}

export namespace AudioSelector {
  export const filterSensitiveLog = (obj: AudioSelector): any => ({
    ...obj,
  });
}

/**
 * Audio Selector Settings
 */
export interface AudioSelectorSettings {
  /**
   * Audio Language Selection
   */
  AudioLanguageSelection?: AudioLanguageSelection;

  /**
   * Audio Pid Selection
   */
  AudioPidSelection?: AudioPidSelection;

  /**
   * Audio Track Selection
   */
  AudioTrackSelection?: AudioTrackSelection;
}

export namespace AudioSelectorSettings {
  export const filterSensitiveLog = (obj: AudioSelectorSettings): any => ({
    ...obj,
  });
}

/**
 * Audio Track
 */
export interface AudioTrack {
  /**
   * 1-based integer value that maps to a specific audio track
   */
  Track: number | undefined;
}

export namespace AudioTrack {
  export const filterSensitiveLog = (obj: AudioTrack): any => ({
    ...obj,
  });
}

/**
 * Audio Track Selection
 */
export interface AudioTrackSelection {
  /**
   * Selects one or more unique audio tracks from within an mp4 source.
   */
  Tracks: AudioTrack[] | undefined;
}

export namespace AudioTrackSelection {
  export const filterSensitiveLog = (obj: AudioTrackSelection): any => ({
    ...obj,
  });
}

export enum AudioType {
  CLEAN_EFFECTS = "CLEAN_EFFECTS",
  HEARING_IMPAIRED = "HEARING_IMPAIRED",
  UNDEFINED = "UNDEFINED",
  VISUAL_IMPAIRED_COMMENTARY = "VISUAL_IMPAIRED_COMMENTARY",
}

export enum AuthenticationScheme {
  AKAMAI = "AKAMAI",
  COMMON = "COMMON",
}

/**
 * The settings for Automatic Input Failover.
 */
export interface AutomaticInputFailoverSettings {
  /**
   * The input ID of the secondary input in the automatic input failover pair.
   */
  SecondaryInputId: string | undefined;

  /**
   * Input preference when deciding which input to make active when a previously failed input has recovered.
   */
  InputPreference?: InputPreference | string;
}

export namespace AutomaticInputFailoverSettings {
  export const filterSensitiveLog = (obj: AutomaticInputFailoverSettings): any => ({
    ...obj,
  });
}

/**
 * Avail Blanking
 */
export interface AvailBlanking {
  /**
   * When set to enabled, causes video, audio and captions to be blanked when insertion metadata is added.
   */
  State?: AvailBlankingState | string;

  /**
   * Blanking image to be used. Leave empty for solid black. Only bmp and png images are supported.
   */
  AvailBlankingImage?: InputLocation;
}

export namespace AvailBlanking {
  export const filterSensitiveLog = (obj: AvailBlanking): any => ({
    ...obj,
  });
}

export enum AvailBlankingState {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * Avail Configuration
 */
export interface AvailConfiguration {
  /**
   * Ad avail settings.
   */
  AvailSettings?: AvailSettings;
}

export namespace AvailConfiguration {
  export const filterSensitiveLog = (obj: AvailConfiguration): any => ({
    ...obj,
  });
}

/**
 * Avail Settings
 */
export interface AvailSettings {
  /**
   * Scte35 Time Signal Apos
   */
  Scte35TimeSignalApos?: Scte35TimeSignalApos;

  /**
   * Scte35 Splice Insert
   */
  Scte35SpliceInsert?: Scte35SpliceInsert;
}

export namespace AvailSettings {
  export const filterSensitiveLog = (obj: AvailSettings): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for BadGatewayException
 */
export interface BadGatewayException extends __SmithyException, $MetadataBearer {
  name: "BadGatewayException";
  $fault: "server";
  /**
   * Placeholder documentation for __string
   */
  Message?: string;
}

export namespace BadGatewayException {
  export const filterSensitiveLog = (obj: BadGatewayException): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for BadRequestException
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  /**
   * Placeholder documentation for __string
   */
  Message?: string;
}

export namespace BadRequestException {
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj,
  });
}

/**
 * A list of schedule actions to create (in a request) or that have been created (in a response).
 */
export interface BatchScheduleActionCreateRequest {
  /**
   * A list of schedule actions to create.
   */
  ScheduleActions: ScheduleAction[] | undefined;
}

export namespace BatchScheduleActionCreateRequest {
  export const filterSensitiveLog = (obj: BatchScheduleActionCreateRequest): any => ({
    ...obj,
  });
}

/**
 * List of actions that have been created in the schedule.
 */
export interface BatchScheduleActionCreateResult {
  /**
   * List of actions that have been created in the schedule.
   */
  ScheduleActions: ScheduleAction[] | undefined;
}

export namespace BatchScheduleActionCreateResult {
  export const filterSensitiveLog = (obj: BatchScheduleActionCreateResult): any => ({
    ...obj,
  });
}

/**
 * A list of schedule actions to delete.
 */
export interface BatchScheduleActionDeleteRequest {
  /**
   * A list of schedule actions to delete.
   */
  ActionNames: string[] | undefined;
}

export namespace BatchScheduleActionDeleteRequest {
  export const filterSensitiveLog = (obj: BatchScheduleActionDeleteRequest): any => ({
    ...obj,
  });
}

/**
 * List of actions that have been deleted from the schedule.
 */
export interface BatchScheduleActionDeleteResult {
  /**
   * List of actions that have been deleted from the schedule.
   */
  ScheduleActions: ScheduleAction[] | undefined;
}

export namespace BatchScheduleActionDeleteResult {
  export const filterSensitiveLog = (obj: BatchScheduleActionDeleteResult): any => ({
    ...obj,
  });
}

/**
 * List of actions to create and list of actions to delete.
 */
export interface BatchUpdateScheduleRequest {
  /**
   * Id of the channel whose schedule is being updated.
   */
  ChannelId: string | undefined;

  /**
   * Schedule actions to delete from the schedule.
   */
  Deletes?: BatchScheduleActionDeleteRequest;

  /**
   * Schedule actions to create in the schedule.
   */
  Creates?: BatchScheduleActionCreateRequest;
}

export namespace BatchUpdateScheduleRequest {
  export const filterSensitiveLog = (obj: BatchUpdateScheduleRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for BatchUpdateScheduleResponse
 */
export interface BatchUpdateScheduleResponse {
  /**
   * Schedule actions deleted from the schedule.
   */
  Deletes?: BatchScheduleActionDeleteResult;

  /**
   * Schedule actions created in the schedule.
   */
  Creates?: BatchScheduleActionCreateResult;
}

export namespace BatchUpdateScheduleResponse {
  export const filterSensitiveLog = (obj: BatchUpdateScheduleResponse): any => ({
    ...obj,
  });
}

/**
 * Blackout Slate
 */
export interface BlackoutSlate {
  /**
   * When set to enabled, causes video, audio and captions to be blanked when indicated by program metadata.
   */
  State?: BlackoutSlateState | string;

  /**
   * Path to local file to use as Network End Blackout image. Image will be scaled to fill the entire output raster.
   */
  NetworkEndBlackoutImage?: InputLocation;

  /**
   * Setting to enabled causes the encoder to blackout the video, audio, and captions, and raise the "Network Blackout Image" slate when an SCTE104/35 Network End Segmentation Descriptor is encountered. The blackout will be lifted when the Network Start Segmentation Descriptor is encountered. The Network End and Network Start descriptors must contain a network ID that matches the value entered in "Network ID".
   */
  NetworkEndBlackout?: BlackoutSlateNetworkEndBlackout | string;

  /**
   * Provides Network ID that matches EIDR ID format (e.g., "10.XXXX/XXXX-XXXX-XXXX-XXXX-XXXX-C").
   */
  NetworkId?: string;

  /**
   * Blackout slate image to be used. Leave empty for solid black. Only bmp and png images are supported.
   */
  BlackoutSlateImage?: InputLocation;
}

export namespace BlackoutSlate {
  export const filterSensitiveLog = (obj: BlackoutSlate): any => ({
    ...obj,
  });
}

export enum BlackoutSlateNetworkEndBlackout {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum BlackoutSlateState {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum BurnInAlignment {
  CENTERED = "CENTERED",
  LEFT = "LEFT",
  SMART = "SMART",
}

export enum BurnInBackgroundColor {
  BLACK = "BLACK",
  NONE = "NONE",
  WHITE = "WHITE",
}

/**
 * Burn In Destination Settings
 */
export interface BurnInDestinationSettings {
  /**
   * External font file used for caption burn-in. File extension must be 'ttf' or 'tte'.  Although the user can select output fonts for many different types of input captions,  embedded, STL and teletext sources use a strict grid system. Using external fonts with these caption sources could cause unexpected display of proportional fonts.  All burn-in and DVB-Sub font settings must match.
   */
  Font?: InputLocation;

  /**
   * Specifies the horizontal position of the caption relative to the left side of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the left of the output. If no explicit xPosition is provided, the horizontal caption position will be determined by the alignment parameter.  All burn-in and DVB-Sub font settings must match.
   */
  XPosition?: number;

  /**
   * When set to 'auto' fontSize will scale depending on the size of the output.  Giving a positive integer will specify the exact font size in points.  All burn-in and DVB-Sub font settings must match.
   */
  FontSize?: string;

  /**
   * Specifies the vertical offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels above the text.  All burn-in and DVB-Sub font settings must match.
   */
  ShadowYOffset?: number;

  /**
   * Specifies the vertical position of the caption relative to the top of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the top of the output. If no explicit yPosition is provided, the caption will be positioned towards the bottom of the output.  All burn-in and DVB-Sub font settings must match.
   */
  YPosition?: number;

  /**
   * Controls whether a fixed grid size will be used to generate the output subtitles bitmap. Only applicable for Teletext inputs and DVB-Sub/Burn-in outputs.
   */
  TeletextGridControl?: BurnInTeletextGridControl | string;

  /**
   * Specifies the color of the rectangle behind the captions.  All burn-in and DVB-Sub font settings must match.
   */
  BackgroundColor?: BurnInBackgroundColor | string;

  /**
   * Specifies font outline size in pixels. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  OutlineSize?: number;

  /**
   * Specifies the horizontal offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels to the left.  All burn-in and DVB-Sub font settings must match.
   */
  ShadowXOffset?: number;

  /**
   * Specifies the opacity of the burned-in captions. 255 is opaque; 0 is transparent.  All burn-in and DVB-Sub font settings must match.
   */
  FontOpacity?: number;

  /**
   * Specifies font outline color. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  OutlineColor?: BurnInOutlineColor | string;

  /**
   * Specifies the color of the shadow cast by the captions.  All burn-in and DVB-Sub font settings must match.
   */
  ShadowColor?: BurnInShadowColor | string;

  /**
   * Font resolution in DPI (dots per inch); default is 96 dpi.  All burn-in and DVB-Sub font settings must match.
   */
  FontResolution?: number;

  /**
   * Specifies the opacity of the background rectangle. 255 is opaque; 0 is transparent. Leaving this parameter out is equivalent to setting it to 0 (transparent).  All burn-in and DVB-Sub font settings must match.
   */
  BackgroundOpacity?: number;

  /**
   * If no explicit xPosition or yPosition is provided, setting alignment to centered will place the captions at the bottom center of the output. Similarly, setting a left alignment will align captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates. Selecting "smart" justification will left-justify live subtitles and center-justify pre-recorded subtitles.  All burn-in and DVB-Sub font settings must match.
   */
  Alignment?: BurnInAlignment | string;

  /**
   * Specifies the color of the burned-in captions.  This option is not valid for source captions that are STL, 608/embedded or teletext.  These source settings are already pre-defined by the caption stream.  All burn-in and DVB-Sub font settings must match.
   */
  FontColor?: BurnInFontColor | string;

  /**
   * Specifies the opacity of the shadow. 255 is opaque; 0 is transparent. Leaving this parameter out is equivalent to setting it to 0 (transparent).  All burn-in and DVB-Sub font settings must match.
   */
  ShadowOpacity?: number;
}

export namespace BurnInDestinationSettings {
  export const filterSensitiveLog = (obj: BurnInDestinationSettings): any => ({
    ...obj,
  });
}

export enum BurnInFontColor {
  BLACK = "BLACK",
  BLUE = "BLUE",
  GREEN = "GREEN",
  RED = "RED",
  WHITE = "WHITE",
  YELLOW = "YELLOW",
}

export enum BurnInOutlineColor {
  BLACK = "BLACK",
  BLUE = "BLUE",
  GREEN = "GREEN",
  RED = "RED",
  WHITE = "WHITE",
  YELLOW = "YELLOW",
}

export enum BurnInShadowColor {
  BLACK = "BLACK",
  NONE = "NONE",
  WHITE = "WHITE",
}

export enum BurnInTeletextGridControl {
  FIXED = "FIXED",
  SCALED = "SCALED",
}

/**
 * Caption Description
 */
export interface CaptionDescription {
  /**
   * Additional settings for captions destination that depend on the destination type.
   */
  DestinationSettings?: CaptionDestinationSettings;

  /**
   * ISO 639-2 three-digit code: http://www.loc.gov/standards/iso639-2/
   */
  LanguageCode?: string;

  /**
   * Human readable information to indicate captions available for players (eg. English, or Spanish).
   */
  LanguageDescription?: string;

  /**
   * Name of the caption description.  Used to associate a caption description with an output.  Names must be unique within an event.
   */
  Name: string | undefined;

  /**
   * Specifies which input caption selector to use as a caption source when generating output captions. This field should match a captionSelector name.
   */
  CaptionSelectorName: string | undefined;
}

export namespace CaptionDescription {
  export const filterSensitiveLog = (obj: CaptionDescription): any => ({
    ...obj,
  });
}

/**
 * Caption Destination Settings
 */
export interface CaptionDestinationSettings {
  /**
   * Smpte Tt Destination Settings
   */
  SmpteTtDestinationSettings?: SmpteTtDestinationSettings;

  /**
   * Embedded Plus Scte20 Destination Settings
   */
  EmbeddedPlusScte20DestinationSettings?: EmbeddedPlusScte20DestinationSettings;

  /**
   * Arib Destination Settings
   */
  AribDestinationSettings?: AribDestinationSettings;

  /**
   * Ebu Tt DDestination Settings
   */
  EbuTtDDestinationSettings?: EbuTtDDestinationSettings;

  /**
   * Ttml Destination Settings
   */
  TtmlDestinationSettings?: TtmlDestinationSettings;

  /**
   * Scte20 Plus Embedded Destination Settings
   */
  Scte20PlusEmbeddedDestinationSettings?: Scte20PlusEmbeddedDestinationSettings;

  /**
   * Dvb Sub Destination Settings
   */
  DvbSubDestinationSettings?: DvbSubDestinationSettings;

  /**
   * Webvtt Destination Settings
   */
  WebvttDestinationSettings?: WebvttDestinationSettings;

  /**
   * Teletext Destination Settings
   */
  TeletextDestinationSettings?: TeletextDestinationSettings;

  /**
   * Burn In Destination Settings
   */
  BurnInDestinationSettings?: BurnInDestinationSettings;

  /**
   * Scte27 Destination Settings
   */
  Scte27DestinationSettings?: Scte27DestinationSettings;

  /**
   * Embedded Destination Settings
   */
  EmbeddedDestinationSettings?: EmbeddedDestinationSettings;

  /**
   * Rtmp Caption Info Destination Settings
   */
  RtmpCaptionInfoDestinationSettings?: RtmpCaptionInfoDestinationSettings;
}

export namespace CaptionDestinationSettings {
  export const filterSensitiveLog = (obj: CaptionDestinationSettings): any => ({
    ...obj,
  });
}

/**
 * Maps a caption channel to an ISO 693-2 language code (http://www.loc.gov/standards/iso639-2), with an optional description.
 */
export interface CaptionLanguageMapping {
  /**
   * Three character ISO 639-2 language code (see http://www.loc.gov/standards/iso639-2)
   */
  LanguageCode: string | undefined;

  /**
   * Textual description of language
   */
  LanguageDescription: string | undefined;

  /**
   * The closed caption channel being described by this CaptionLanguageMapping.  Each channel mapping must have a unique channel number (maximum of 4)
   */
  CaptionChannel: number | undefined;
}

export namespace CaptionLanguageMapping {
  export const filterSensitiveLog = (obj: CaptionLanguageMapping): any => ({
    ...obj,
  });
}

/**
 * Output groups for this Live Event. Output groups contain information about where streams should be distributed.
 */
export interface CaptionSelector {
  /**
   * Caption selector settings.
   */
  SelectorSettings?: CaptionSelectorSettings;

  /**
   * When specified this field indicates the three letter language code of the caption track to extract from the source.
   */
  LanguageCode?: string;

  /**
   * Name identifier for a caption selector.  This name is used to associate this caption selector with one or more caption descriptions.  Names must be unique within an event.
   */
  Name: string | undefined;
}

export namespace CaptionSelector {
  export const filterSensitiveLog = (obj: CaptionSelector): any => ({
    ...obj,
  });
}

/**
 * Caption Selector Settings
 */
export interface CaptionSelectorSettings {
  /**
   * Scte27 Source Settings
   */
  Scte27SourceSettings?: Scte27SourceSettings;

  /**
   * Dvb Sub Source Settings
   */
  DvbSubSourceSettings?: DvbSubSourceSettings;

  /**
   * Arib Source Settings
   */
  AribSourceSettings?: AribSourceSettings;

  /**
   * Scte20 Source Settings
   */
  Scte20SourceSettings?: Scte20SourceSettings;

  /**
   * Embedded Source Settings
   */
  EmbeddedSourceSettings?: EmbeddedSourceSettings;

  /**
   * Teletext Source Settings
   */
  TeletextSourceSettings?: TeletextSourceSettings;
}

export namespace CaptionSelectorSettings {
  export const filterSensitiveLog = (obj: CaptionSelectorSettings): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for Channel
 */
export interface Channel {
  /**
   * Placeholder documentation for InputSpecification
   */
  InputSpecification?: InputSpecification;

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   */
  RoleArn?: string;

  /**
   * The unique id of the channel.
   */
  Id?: string;

  /**
   * List of input attachments for channel.
   */
  InputAttachments?: InputAttachment[];

  /**
   * The unique arn of the channel.
   */
  Arn?: string;

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * Runtime details for the pipelines of a running channel.
   */
  PipelineDetails?: PipelineDetail[];

  /**
   * Encoder Settings
   */
  EncoderSettings?: EncoderSettings;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   */
  ChannelClass?: ChannelClass | string;

  /**
   * The endpoints where outgoing connections initiate from
   */
  EgressEndpoints?: ChannelEgressEndpoint[];

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * The log level being written to CloudWatch Logs.
   */
  LogLevel?: LogLevel | string;

  /**
   * The name of the channel. (user-mutable)
   */
  Name?: string;

  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   */
  Destinations?: OutputDestination[];

  /**
   * Placeholder documentation for ChannelState
   */
  State?: ChannelState | string;
}

export namespace Channel {
  export const filterSensitiveLog = (obj: Channel): any => ({
    ...obj,
  });
}

export enum ChannelClass {
  SINGLE_PIPELINE = "SINGLE_PIPELINE",
  STANDARD = "STANDARD",
}

/**
 * Placeholder documentation for ChannelEgressEndpoint
 */
export interface ChannelEgressEndpoint {
  /**
   * Public IP of where a channel's output comes from
   */
  SourceIp?: string;
}

export namespace ChannelEgressEndpoint {
  export const filterSensitiveLog = (obj: ChannelEgressEndpoint): any => ({
    ...obj,
  });
}

export enum ChannelState {
  CREATE_FAILED = "CREATE_FAILED",
  CREATING = "CREATING",
  DELETED = "DELETED",
  DELETING = "DELETING",
  IDLE = "IDLE",
  RECOVERING = "RECOVERING",
  RUNNING = "RUNNING",
  STARTING = "STARTING",
  STOPPING = "STOPPING",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATING = "UPDATING",
}

/**
 * Placeholder documentation for ChannelSummary
 */
export interface ChannelSummary {
  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   */
  Destinations?: OutputDestination[];

  /**
   * List of input attachments for channel.
   */
  InputAttachments?: InputAttachment[];

  /**
   * Placeholder documentation for InputSpecification
   */
  InputSpecification?: InputSpecification;

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   */
  RoleArn?: string;

  /**
   * The log level being written to CloudWatch Logs.
   */
  LogLevel?: LogLevel | string;

  /**
   * Placeholder documentation for ChannelState
   */
  State?: ChannelState | string;

  /**
   * The name of the channel. (user-mutable)
   */
  Name?: string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * The endpoints where outgoing connections initiate from
   */
  EgressEndpoints?: ChannelEgressEndpoint[];

  /**
   * The unique id of the channel.
   */
  Id?: string;

  /**
   * The unique arn of the channel.
   */
  Arn?: string;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   */
  ChannelClass?: ChannelClass | string;

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;
}

export namespace ChannelSummary {
  export const filterSensitiveLog = (obj: ChannelSummary): any => ({
    ...obj,
  });
}

/**
 * Passthrough applies no color space conversion to the output
 */
export interface ColorSpacePassthroughSettings {}

export namespace ColorSpacePassthroughSettings {
  export const filterSensitiveLog = (obj: ColorSpacePassthroughSettings): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ConflictException
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  /**
   * Placeholder documentation for __string
   */
  Message?: string;
}

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

export enum ContentType {
  image_jpeg = "image/jpeg",
}

/**
 * A request to create a channel
 */
export interface CreateChannelRequest {
  /**
   * Name of channel.
   */
  Name?: string;

  /**
   * Encoder Settings
   */
  EncoderSettings?: EncoderSettings;

  /**
   * The log level to write to CloudWatch Logs.
   */
  LogLevel?: LogLevel | string;

  /**
   * List of input attachments for channel.
   */
  InputAttachments?: InputAttachment[];

  /**
   * An optional Amazon Resource Name (ARN) of the role to assume when running the Channel.
   */
  RoleArn?: string;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   */
  ChannelClass?: ChannelClass | string;

  /**
   * Unique request ID to be specified. This is needed to prevent retries from
   * creating multiple resources.
   */
  RequestId?: string;

  /**
   * Deprecated field that's only usable by whitelisted customers.
   */
  Reserved?: string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * Specification of input for this channel (max. bitrate, resolution, codec, etc.)
   */
  InputSpecification?: InputSpecification;

  /**
   * Placeholder documentation for __listOfOutputDestination
   */
  Destinations?: OutputDestination[];
}

export namespace CreateChannelRequest {
  export const filterSensitiveLog = (obj: CreateChannelRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for CreateChannelResponse
 */
export interface CreateChannelResponse {
  /**
   * Placeholder documentation for Channel
   */
  Channel?: Channel;
}

export namespace CreateChannelResponse {
  export const filterSensitiveLog = (obj: CreateChannelResponse): any => ({
    ...obj,
  });
}

/**
 * The name of the input
 */
export interface CreateInputRequest {
  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * Placeholder documentation for InputType
   */
  Type?: InputType | string;

  /**
   * Settings for the devices.
   */
  InputDevices?: InputDeviceSettings[];

  /**
   * A list of security groups referenced by IDs to attach to the input.
   */
  InputSecurityGroups?: string[];

  /**
   * The Amazon Resource Name (ARN) of the role this input assumes during and after creation.
   */
  RoleArn?: string;

  /**
   * Name of the input.
   */
  Name?: string;

  /**
   * The source URLs for a PULL-type input. Every PULL type input needs
   * exactly two source URLs for redundancy.
   * Only specify sources for PULL type Inputs. Leave Destinations empty.
   */
  Sources?: InputSourceRequest[];

  /**
   * A list of the MediaConnect Flows that you want to use in this input. You can specify as few as one
   * Flow and presently, as many as two. The only requirement is when you have more than one is that each Flow is in a
   * separate Availability Zone as this ensures your EML input is redundant to AZ issues.
   */
  MediaConnectFlows?: MediaConnectFlowRequest[];

  /**
   * Settings for a private VPC Input.
   * When this property is specified, the input destination addresses will be created in a VPC rather than with public Internet addresses.
   * This property requires setting the roleArn property on Input creation.
   * Not compatible with the inputSecurityGroups property.
   */
  Vpc?: InputVpcRequest;

  /**
   * Destination settings for PUSH type inputs.
   */
  Destinations?: InputDestinationRequest[];

  /**
   * Unique identifier of the request to ensure the request is handled
   * exactly once in case of retries.
   */
  RequestId?: string;
}

export namespace CreateInputRequest {
  export const filterSensitiveLog = (obj: CreateInputRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for CreateInputResponse
 */
export interface CreateInputResponse {
  /**
   * Placeholder documentation for Input
   */
  Input?: Input;
}

export namespace CreateInputResponse {
  export const filterSensitiveLog = (obj: CreateInputResponse): any => ({
    ...obj,
  });
}

/**
 * The IPv4 CIDRs to whitelist for this Input Security Group
 */
export interface CreateInputSecurityGroupRequest {
  /**
   * List of IPv4 CIDR addresses to whitelist
   */
  WhitelistRules?: InputWhitelistRuleCidr[];

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };
}

export namespace CreateInputSecurityGroupRequest {
  export const filterSensitiveLog = (obj: CreateInputSecurityGroupRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for CreateInputSecurityGroupResponse
 */
export interface CreateInputSecurityGroupResponse {
  /**
   * An Input Security Group
   */
  SecurityGroup?: InputSecurityGroup;
}

export namespace CreateInputSecurityGroupResponse {
  export const filterSensitiveLog = (obj: CreateInputSecurityGroupResponse): any => ({
    ...obj,
  });
}

/**
 * A request to create a program in a multiplex.
 */
export interface CreateMultiplexProgramRequest {
  /**
   * ID of the multiplex where the program is to be created.
   */
  MultiplexId: string | undefined;

  /**
   * The settings for this multiplex program.
   */
  MultiplexProgramSettings: MultiplexProgramSettings | undefined;

  /**
   * Name of multiplex program.
   */
  ProgramName: string | undefined;

  /**
   * Unique request ID. This prevents retries from creating multiple
   * resources.
   */
  RequestId?: string;
}

export namespace CreateMultiplexProgramRequest {
  export const filterSensitiveLog = (obj: CreateMultiplexProgramRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for CreateMultiplexProgramResponse
 */
export interface CreateMultiplexProgramResponse {
  /**
   * The newly created multiplex program.
   */
  MultiplexProgram?: MultiplexProgram;
}

export namespace CreateMultiplexProgramResponse {
  export const filterSensitiveLog = (obj: CreateMultiplexProgramResponse): any => ({
    ...obj,
  });
}

/**
 * A request to create a multiplex.
 */
export interface CreateMultiplexRequest {
  /**
   * A list of availability zones for the multiplex. You must specify exactly two.
   */
  AvailabilityZones: string[] | undefined;

  /**
   * Configuration for a multiplex event.
   */
  MultiplexSettings: MultiplexSettings | undefined;

  /**
   * Unique request ID. This prevents retries from creating multiple
   * resources.
   */
  RequestId?: string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * Name of multiplex.
   */
  Name: string | undefined;
}

export namespace CreateMultiplexRequest {
  export const filterSensitiveLog = (obj: CreateMultiplexRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for CreateMultiplexResponse
 */
export interface CreateMultiplexResponse {
  /**
   * The newly created multiplex.
   */
  Multiplex?: Multiplex;
}

export namespace CreateMultiplexResponse {
  export const filterSensitiveLog = (obj: CreateMultiplexResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for CreateTagsRequest
 */
export interface CreateTagsRequest {
  /**
   * Placeholder documentation for Tags
   */
  Tags?: { [key: string]: string };

  /**
   * Placeholder documentation for __string
   */
  ResourceArn: string | undefined;
}

export namespace CreateTagsRequest {
  export const filterSensitiveLog = (obj: CreateTagsRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteChannelRequest
 */
export interface DeleteChannelRequest {
  /**
   * Unique ID of the channel.
   */
  ChannelId: string | undefined;
}

export namespace DeleteChannelRequest {
  export const filterSensitiveLog = (obj: DeleteChannelRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteChannelResponse
 */
export interface DeleteChannelResponse {
  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   */
  Destinations?: OutputDestination[];

  /**
   * The unique id of the channel.
   */
  Id?: string;

  /**
   * Encoder Settings
   */
  EncoderSettings?: EncoderSettings;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   */
  ChannelClass?: ChannelClass | string;

  /**
   * Runtime details for the pipelines of a running channel.
   */
  PipelineDetails?: PipelineDetail[];

  /**
   * The unique arn of the channel.
   */
  Arn?: string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * The endpoints where outgoing connections initiate from
   */
  EgressEndpoints?: ChannelEgressEndpoint[];

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * Placeholder documentation for ChannelState
   */
  State?: ChannelState | string;

  /**
   * List of input attachments for channel.
   */
  InputAttachments?: InputAttachment[];

  /**
   * Placeholder documentation for InputSpecification
   */
  InputSpecification?: InputSpecification;

  /**
   * The log level being written to CloudWatch Logs.
   */
  LogLevel?: LogLevel | string;

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   */
  RoleArn?: string;

  /**
   * The name of the channel. (user-mutable)
   */
  Name?: string;
}

export namespace DeleteChannelResponse {
  export const filterSensitiveLog = (obj: DeleteChannelResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteInputRequest
 */
export interface DeleteInputRequest {
  /**
   * Unique ID of the input
   */
  InputId: string | undefined;
}

export namespace DeleteInputRequest {
  export const filterSensitiveLog = (obj: DeleteInputRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteInputResponse
 */
export interface DeleteInputResponse {}

export namespace DeleteInputResponse {
  export const filterSensitiveLog = (obj: DeleteInputResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteInputSecurityGroupRequest
 */
export interface DeleteInputSecurityGroupRequest {
  /**
   * The Input Security Group to delete
   */
  InputSecurityGroupId: string | undefined;
}

export namespace DeleteInputSecurityGroupRequest {
  export const filterSensitiveLog = (obj: DeleteInputSecurityGroupRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteInputSecurityGroupResponse
 */
export interface DeleteInputSecurityGroupResponse {}

export namespace DeleteInputSecurityGroupResponse {
  export const filterSensitiveLog = (obj: DeleteInputSecurityGroupResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteMultiplexProgramRequest
 */
export interface DeleteMultiplexProgramRequest {
  /**
   * The multiplex program name.
   */
  ProgramName: string | undefined;

  /**
   * The ID of the multiplex that the program belongs to.
   */
  MultiplexId: string | undefined;
}

export namespace DeleteMultiplexProgramRequest {
  export const filterSensitiveLog = (obj: DeleteMultiplexProgramRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteMultiplexProgramResponse
 */
export interface DeleteMultiplexProgramResponse {
  /**
   * The settings for this multiplex program.
   */
  MultiplexProgramSettings?: MultiplexProgramSettings;

  /**
   * The MediaLive channel associated with the program.
   */
  ChannelId?: string;

  /**
   * The name of the multiplex program.
   */
  ProgramName?: string;

  /**
   * The packet identifier map for this multiplex program.
   */
  PacketIdentifiersMap?: MultiplexProgramPacketIdentifiersMap;
}

export namespace DeleteMultiplexProgramResponse {
  export const filterSensitiveLog = (obj: DeleteMultiplexProgramResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteMultiplexRequest
 */
export interface DeleteMultiplexRequest {
  /**
   * The ID of the multiplex.
   */
  MultiplexId: string | undefined;
}

export namespace DeleteMultiplexRequest {
  export const filterSensitiveLog = (obj: DeleteMultiplexRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteMultiplexResponse
 */
export interface DeleteMultiplexResponse {
  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * A list of availability zones for the multiplex.
   */
  AvailabilityZones?: string[];

  /**
   * The name of the multiplex.
   */
  Name?: string;

  /**
   * A list of the multiplex output destinations.
   */
  Destinations?: MultiplexOutputDestination[];

  /**
   * The current state of the multiplex.
   */
  State?: MultiplexState | string;

  /**
   * The unique arn of the multiplex.
   */
  Arn?: string;

  /**
   * The number of programs in the multiplex.
   */
  ProgramCount?: number;

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * Configuration for a multiplex event.
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * The unique id of the multiplex.
   */
  Id?: string;
}

export namespace DeleteMultiplexResponse {
  export const filterSensitiveLog = (obj: DeleteMultiplexResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteReservationRequest
 */
export interface DeleteReservationRequest {
  /**
   * Unique reservation ID, e.g. '1234567'
   */
  ReservationId: string | undefined;
}

export namespace DeleteReservationRequest {
  export const filterSensitiveLog = (obj: DeleteReservationRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteReservationResponse
 */
export interface DeleteReservationResponse {
  /**
   * Unique offering ID, e.g. '87654321'
   */
  OfferingId?: string;

  /**
   * Reservation UTC start date and time in ISO-8601 format, e.g. '2018-03-01T00:00:00'
   */
  Start?: string;

  /**
   * Reservation UTC end date and time in ISO-8601 format, e.g. '2019-03-01T00:00:00'
   */
  End?: string;

  /**
   * Unique reservation ARN, e.g. 'arn:aws:medialive:us-west-2:123456789012:reservation:1234567'
   */
  Arn?: string;

  /**
   * One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering
   */
  FixedPrice?: number;

  /**
   * AWS region, e.g. 'us-west-2'
   */
  Region?: string;

  /**
   * A collection of key-value pairs
   */
  Tags?: { [key: string]: string };

  /**
   * Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'
   */
  OfferingDescription?: string;

  /**
   * Unique reservation ID, e.g. '1234567'
   */
  ReservationId?: string;

  /**
   * Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'
   */
  CurrencyCode?: string;

  /**
   * Units for duration, e.g. 'MONTHS'
   */
  DurationUnits?: OfferingDurationUnits | string;

  /**
   * Current state of reservation, e.g. 'ACTIVE'
   */
  State?: ReservationState | string;

  /**
   * User specified reservation name
   */
  Name?: string;

  /**
   * Lease duration, e.g. '12'
   */
  Duration?: number;

  /**
   * Recurring usage charge for each reserved resource, e.g. '157.0'
   */
  UsagePrice?: number;

  /**
   * Offering type, e.g. 'NO_UPFRONT'
   */
  OfferingType?: OfferingType | string;

  /**
   * Number of reserved resources
   */
  Count?: number;

  /**
   * Resource configuration details
   */
  ResourceSpecification?: ReservationResourceSpecification;
}

export namespace DeleteReservationResponse {
  export const filterSensitiveLog = (obj: DeleteReservationResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteScheduleRequest
 */
export interface DeleteScheduleRequest {
  /**
   * Id of the channel whose schedule is being deleted.
   */
  ChannelId: string | undefined;
}

export namespace DeleteScheduleRequest {
  export const filterSensitiveLog = (obj: DeleteScheduleRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteScheduleResponse
 */
export interface DeleteScheduleResponse {}

export namespace DeleteScheduleResponse {
  export const filterSensitiveLog = (obj: DeleteScheduleResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DeleteTagsRequest
 */
export interface DeleteTagsRequest {
  /**
   * Placeholder documentation for __string
   */
  ResourceArn: string | undefined;

  /**
   * An array of tag keys to delete
   */
  TagKeys: string[] | undefined;
}

export namespace DeleteTagsRequest {
  export const filterSensitiveLog = (obj: DeleteTagsRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeChannelRequest
 */
export interface DescribeChannelRequest {
  /**
   * channel ID
   */
  ChannelId: string | undefined;
}

export namespace DescribeChannelRequest {
  export const filterSensitiveLog = (obj: DescribeChannelRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeChannelResponse
 */
export interface DescribeChannelResponse {
  /**
   * The unique arn of the channel.
   */
  Arn?: string;

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   */
  RoleArn?: string;

  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   */
  Destinations?: OutputDestination[];

  /**
   * Placeholder documentation for InputSpecification
   */
  InputSpecification?: InputSpecification;

  /**
   * Runtime details for the pipelines of a running channel.
   */
  PipelineDetails?: PipelineDetail[];

  /**
   * The endpoints where outgoing connections initiate from
   */
  EgressEndpoints?: ChannelEgressEndpoint[];

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   */
  ChannelClass?: ChannelClass | string;

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * The unique id of the channel.
   */
  Id?: string;

  /**
   * Placeholder documentation for ChannelState
   */
  State?: ChannelState | string;

  /**
   * The name of the channel. (user-mutable)
   */
  Name?: string;

  /**
   * The log level being written to CloudWatch Logs.
   */
  LogLevel?: LogLevel | string;

  /**
   * Encoder Settings
   */
  EncoderSettings?: EncoderSettings;

  /**
   * List of input attachments for channel.
   */
  InputAttachments?: InputAttachment[];
}

export namespace DescribeChannelResponse {
  export const filterSensitiveLog = (obj: DescribeChannelResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeInputDeviceRequest
 */
export interface DescribeInputDeviceRequest {
  /**
   * The unique ID of this input device. For example, hd-123456789abcdef.
   */
  InputDeviceId: string | undefined;
}

export namespace DescribeInputDeviceRequest {
  export const filterSensitiveLog = (obj: DescribeInputDeviceRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeInputDeviceResponse
 */
export interface DescribeInputDeviceResponse {
  /**
   * The network MAC address of the input device.
   */
  MacAddress?: string;

  /**
   * The unique ARN of the input device.
   */
  Arn?: string;

  /**
   * The state of the connection between the input device and AWS.
   */
  ConnectionState?: InputDeviceConnectionState | string;

  /**
   * The unique ID of the input device.
   */
  Id?: string;

  /**
   * The network settings for the input device.
   */
  NetworkSettings?: InputDeviceNetworkSettings;

  /**
   * The unique serial number of the input device.
   */
  SerialNumber?: string;

  /**
   * The status of the action to synchronize the device configuration. If you change the configuration of the input device (for example, the maximum bitrate), MediaLive sends the new data to the device. The device might not update itself immediately. SYNCED means the device has updated its configuration. SYNCING means that it has not updated its configuration.
   */
  DeviceSettingsSyncState?: DeviceSettingsSyncState | string;

  /**
   * The type of the input device.
   */
  Type?: InputDeviceType | string;

  /**
   * Settings that describe an input device that is type HD.
   */
  HdDeviceSettings?: InputDeviceHdSettings;

  /**
   * A name that you specify for the input device.
   */
  Name?: string;
}

export namespace DescribeInputDeviceResponse {
  export const filterSensitiveLog = (obj: DescribeInputDeviceResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeInputDeviceThumbnailRequest
 */
export interface DescribeInputDeviceThumbnailRequest {
  /**
   * The unique ID of this input device. For example, hd-123456789abcdef.
   */
  InputDeviceId: string | undefined;

  /**
   * The HTTP Accept header. Indicates the requested type for the thumbnail.
   */
  Accept: AcceptHeader | string | undefined;
}

export namespace DescribeInputDeviceThumbnailRequest {
  export const filterSensitiveLog = (obj: DescribeInputDeviceThumbnailRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeInputDeviceThumbnailResponse
 */
export interface DescribeInputDeviceThumbnailResponse {
  /**
   * Specifies the media type of the thumbnail.
   */
  ContentType?: ContentType | string;

  /**
   * The length of the content.
   */
  ContentLength?: number;

  /**
   * The unique, cacheable version of this thumbnail.
   */
  ETag?: string;

  /**
   * The date and time the thumbnail was last updated at the device.
   */
  LastModified?: Date;

  /**
   * The binary data for the thumbnail that the Link device has most recently sent to MediaLive.
   */
  Body?: Readable | ReadableStream | Blob;
}

export namespace DescribeInputDeviceThumbnailResponse {
  export const filterSensitiveLog = (obj: DescribeInputDeviceThumbnailResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeInputRequest
 */
export interface DescribeInputRequest {
  /**
   * Unique ID of the input
   */
  InputId: string | undefined;
}

export namespace DescribeInputRequest {
  export const filterSensitiveLog = (obj: DescribeInputRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeInputResponse
 */
export interface DescribeInputResponse {
  /**
   * Placeholder documentation for InputType
   */
  Type?: InputType | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * A list of MediaConnect Flows for this input.
   */
  MediaConnectFlows?: MediaConnectFlow[];

  /**
   * The generated ID of the input (unique for user account, immutable).
   */
  Id?: string;

  /**
   * The Amazon Resource Name (ARN) of the role this input assumes during and after creation.
   */
  RoleArn?: string;

  /**
   * Placeholder documentation for InputState
   */
  State?: InputState | string;

  /**
   * A list of the destinations of the input (PUSH-type).
   */
  Destinations?: InputDestination[];

  /**
   * Certain pull input sources can be dynamic, meaning that they can have their URL's dynamically changes
   * during input switch actions. Presently, this functionality only works with MP4_FILE inputs.
   */
  InputSourceType?: InputSourceType | string;

  /**
   * Settings for the input devices.
   */
  InputDevices?: InputDeviceSettings[];

  /**
   * The user-assigned name (This is a mutable value).
   */
  Name?: string;

  /**
   * STANDARD - MediaLive expects two sources to be connected to this input. If the channel is also STANDARD, both sources will be ingested. If the channel is SINGLE_PIPELINE, only the first source will be ingested; the second source will always be ignored, even if the first source fails.
   * SINGLE_PIPELINE - You can connect only one source to this input. If the ChannelClass is also  SINGLE_PIPELINE, this value is valid. If the ChannelClass is STANDARD, this value is not valid because the channel requires two sources in the input.
   */
  InputClass?: InputClass | string;

  /**
   * A list of channel IDs that that input is attached to (currently an input can only be attached to one channel).
   */
  AttachedChannels?: string[];

  /**
   * A list of the sources of the input (PULL-type).
   */
  Sources?: InputSource[];

  /**
   * The Unique ARN of the input (generated, immutable).
   */
  Arn?: string;

  /**
   * A list of IDs for all the Input Security Groups attached to the input.
   */
  SecurityGroups?: string[];
}

export namespace DescribeInputResponse {
  export const filterSensitiveLog = (obj: DescribeInputResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeInputSecurityGroupRequest
 */
export interface DescribeInputSecurityGroupRequest {
  /**
   * The id of the Input Security Group to describe
   */
  InputSecurityGroupId: string | undefined;
}

export namespace DescribeInputSecurityGroupRequest {
  export const filterSensitiveLog = (obj: DescribeInputSecurityGroupRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeInputSecurityGroupResponse
 */
export interface DescribeInputSecurityGroupResponse {
  /**
   * Unique ARN of Input Security Group
   */
  Arn?: string;

  /**
   * Whitelist rules and their sync status
   */
  WhitelistRules?: InputWhitelistRule[];

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * The list of inputs currently using this Input Security Group.
   */
  Inputs?: string[];

  /**
   * The current state of the Input Security Group.
   */
  State?: InputSecurityGroupState | string;

  /**
   * The Id of the Input Security Group
   */
  Id?: string;
}

export namespace DescribeInputSecurityGroupResponse {
  export const filterSensitiveLog = (obj: DescribeInputSecurityGroupResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeMultiplexProgramRequest
 */
export interface DescribeMultiplexProgramRequest {
  /**
   * The ID of the multiplex that the program belongs to.
   */
  MultiplexId: string | undefined;

  /**
   * The name of the program.
   */
  ProgramName: string | undefined;
}

export namespace DescribeMultiplexProgramRequest {
  export const filterSensitiveLog = (obj: DescribeMultiplexProgramRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeMultiplexProgramResponse
 */
export interface DescribeMultiplexProgramResponse {
  /**
   * The MediaLive channel associated with the program.
   */
  ChannelId?: string;

  /**
   * The name of the multiplex program.
   */
  ProgramName?: string;

  /**
   * The settings for this multiplex program.
   */
  MultiplexProgramSettings?: MultiplexProgramSettings;

  /**
   * The packet identifier map for this multiplex program.
   */
  PacketIdentifiersMap?: MultiplexProgramPacketIdentifiersMap;
}

export namespace DescribeMultiplexProgramResponse {
  export const filterSensitiveLog = (obj: DescribeMultiplexProgramResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeMultiplexRequest
 */
export interface DescribeMultiplexRequest {
  /**
   * The ID of the multiplex.
   */
  MultiplexId: string | undefined;
}

export namespace DescribeMultiplexRequest {
  export const filterSensitiveLog = (obj: DescribeMultiplexRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeMultiplexResponse
 */
export interface DescribeMultiplexResponse {
  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * A list of availability zones for the multiplex.
   */
  AvailabilityZones?: string[];

  /**
   * A list of the multiplex output destinations.
   */
  Destinations?: MultiplexOutputDestination[];

  /**
   * The current state of the multiplex.
   */
  State?: MultiplexState | string;

  /**
   * The number of programs in the multiplex.
   */
  ProgramCount?: number;

  /**
   * The unique arn of the multiplex.
   */
  Arn?: string;

  /**
   * The name of the multiplex.
   */
  Name?: string;

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * Configuration for a multiplex event.
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * The unique id of the multiplex.
   */
  Id?: string;
}

export namespace DescribeMultiplexResponse {
  export const filterSensitiveLog = (obj: DescribeMultiplexResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeOfferingRequest
 */
export interface DescribeOfferingRequest {
  /**
   * Unique offering ID, e.g. '87654321'
   */
  OfferingId: string | undefined;
}

export namespace DescribeOfferingRequest {
  export const filterSensitiveLog = (obj: DescribeOfferingRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeOfferingResponse
 */
export interface DescribeOfferingResponse {
  /**
   * Lease duration, e.g. '12'
   */
  Duration?: number;

  /**
   * AWS region, e.g. 'us-west-2'
   */
  Region?: string;

  /**
   * Resource configuration details
   */
  ResourceSpecification?: ReservationResourceSpecification;

  /**
   * Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'
   */
  OfferingDescription?: string;

  /**
   * Recurring usage charge for each reserved resource, e.g. '157.0'
   */
  UsagePrice?: number;

  /**
   * Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'
   */
  CurrencyCode?: string;

  /**
   * Offering type, e.g. 'NO_UPFRONT'
   */
  OfferingType?: OfferingType | string;

  /**
   * Unique offering ID, e.g. '87654321'
   */
  OfferingId?: string;

  /**
   * Units for duration, e.g. 'MONTHS'
   */
  DurationUnits?: OfferingDurationUnits | string;

  /**
   * Unique offering ARN, e.g. 'arn:aws:medialive:us-west-2:123456789012:offering:87654321'
   */
  Arn?: string;

  /**
   * One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering
   */
  FixedPrice?: number;
}

export namespace DescribeOfferingResponse {
  export const filterSensitiveLog = (obj: DescribeOfferingResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeReservationRequest
 */
export interface DescribeReservationRequest {
  /**
   * Unique reservation ID, e.g. '1234567'
   */
  ReservationId: string | undefined;
}

export namespace DescribeReservationRequest {
  export const filterSensitiveLog = (obj: DescribeReservationRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeReservationResponse
 */
export interface DescribeReservationResponse {
  /**
   * Number of reserved resources
   */
  Count?: number;

  /**
   * One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering
   */
  FixedPrice?: number;

  /**
   * Current state of reservation, e.g. 'ACTIVE'
   */
  State?: ReservationState | string;

  /**
   * Units for duration, e.g. 'MONTHS'
   */
  DurationUnits?: OfferingDurationUnits | string;

  /**
   * User specified reservation name
   */
  Name?: string;

  /**
   * AWS region, e.g. 'us-west-2'
   */
  Region?: string;

  /**
   * Offering type, e.g. 'NO_UPFRONT'
   */
  OfferingType?: OfferingType | string;

  /**
   * Unique offering ID, e.g. '87654321'
   */
  OfferingId?: string;

  /**
   * A collection of key-value pairs
   */
  Tags?: { [key: string]: string };

  /**
   * Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'
   */
  OfferingDescription?: string;

  /**
   * Unique reservation ID, e.g. '1234567'
   */
  ReservationId?: string;

  /**
   * Reservation UTC start date and time in ISO-8601 format, e.g. '2018-03-01T00:00:00'
   */
  Start?: string;

  /**
   * Reservation UTC end date and time in ISO-8601 format, e.g. '2019-03-01T00:00:00'
   */
  End?: string;

  /**
   * Unique reservation ARN, e.g. 'arn:aws:medialive:us-west-2:123456789012:reservation:1234567'
   */
  Arn?: string;

  /**
   * Resource configuration details
   */
  ResourceSpecification?: ReservationResourceSpecification;

  /**
   * Lease duration, e.g. '12'
   */
  Duration?: number;

  /**
   * Recurring usage charge for each reserved resource, e.g. '157.0'
   */
  UsagePrice?: number;

  /**
   * Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'
   */
  CurrencyCode?: string;
}

export namespace DescribeReservationResponse {
  export const filterSensitiveLog = (obj: DescribeReservationResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeScheduleRequest
 */
export interface DescribeScheduleRequest {
  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;

  /**
   * Id of the channel whose schedule is being updated.
   */
  ChannelId: string | undefined;

  /**
   * Placeholder documentation for MaxResults
   */
  MaxResults?: number;
}

export namespace DescribeScheduleRequest {
  export const filterSensitiveLog = (obj: DescribeScheduleRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for DescribeScheduleResponse
 */
export interface DescribeScheduleResponse {
  /**
   * The next token; for use in pagination.
   */
  NextToken?: string;

  /**
   * The list of actions in the schedule.
   */
  ScheduleActions?: ScheduleAction[];
}

export namespace DescribeScheduleResponse {
  export const filterSensitiveLog = (obj: DescribeScheduleResponse): any => ({
    ...obj,
  });
}

export enum DeviceSettingsSyncState {
  SYNCED = "SYNCED",
  SYNCING = "SYNCING",
}

/**
 * DVB Network Information Table (NIT)
 */
export interface DvbNitSettings {
  /**
   * The network name text placed in the networkNameDescriptor inside the Network Information Table. Maximum length is 256 characters.
   */
  NetworkName: string | undefined;

  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   */
  RepInterval?: number;

  /**
   * The numeric value placed in the Network Information Table (NIT).
   */
  NetworkId: number | undefined;
}

export namespace DvbNitSettings {
  export const filterSensitiveLog = (obj: DvbNitSettings): any => ({
    ...obj,
  });
}

export enum DvbSdtOutputSdt {
  SDT_FOLLOW = "SDT_FOLLOW",
  SDT_FOLLOW_IF_PRESENT = "SDT_FOLLOW_IF_PRESENT",
  SDT_MANUAL = "SDT_MANUAL",
  SDT_NONE = "SDT_NONE",
}

/**
 * DVB Service Description Table (SDT)
 */
export interface DvbSdtSettings {
  /**
   * Selects method of inserting SDT information into output stream. The sdtFollow setting copies SDT information from input stream to output stream. The sdtFollowIfPresent setting copies SDT information from input stream to output stream if SDT information is present in the input, otherwise it will fall back on the user-defined values. The sdtManual setting means user will enter the SDT information. The sdtNone setting means output stream will not contain SDT information.
   */
  OutputSdt?: DvbSdtOutputSdt | string;

  /**
   * The service provider name placed in the serviceDescriptor in the Service Description Table. Maximum length is 256 characters.
   */
  ServiceProviderName?: string;

  /**
   * The service name placed in the serviceDescriptor in the Service Description Table. Maximum length is 256 characters.
   */
  ServiceName?: string;

  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   */
  RepInterval?: number;
}

export namespace DvbSdtSettings {
  export const filterSensitiveLog = (obj: DvbSdtSettings): any => ({
    ...obj,
  });
}

export enum DvbSubDestinationAlignment {
  CENTERED = "CENTERED",
  LEFT = "LEFT",
  SMART = "SMART",
}

export enum DvbSubDestinationBackgroundColor {
  BLACK = "BLACK",
  NONE = "NONE",
  WHITE = "WHITE",
}

export enum DvbSubDestinationFontColor {
  BLACK = "BLACK",
  BLUE = "BLUE",
  GREEN = "GREEN",
  RED = "RED",
  WHITE = "WHITE",
  YELLOW = "YELLOW",
}

export enum DvbSubDestinationOutlineColor {
  BLACK = "BLACK",
  BLUE = "BLUE",
  GREEN = "GREEN",
  RED = "RED",
  WHITE = "WHITE",
  YELLOW = "YELLOW",
}

/**
 * Dvb Sub Destination Settings
 */
export interface DvbSubDestinationSettings {
  /**
   * Specifies the horizontal position of the caption relative to the left side of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the left of the output. If no explicit xPosition is provided, the horizontal caption position will be determined by the alignment parameter.  This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream.  All burn-in and DVB-Sub font settings must match.
   */
  XPosition?: number;

  /**
   * When set to auto fontSize will scale depending on the size of the output.  Giving a positive integer will specify the exact font size in points.  All burn-in and DVB-Sub font settings must match.
   */
  FontSize?: string;

  /**
   * External font file used for caption burn-in. File extension must be 'ttf' or 'tte'.  Although the user can select output fonts for many different types of input captions, embedded, STL and teletext sources use a strict grid system. Using external fonts with these caption sources could cause unexpected display of proportional fonts.  All burn-in and DVB-Sub font settings must match.
   */
  Font?: InputLocation;

  /**
   * Specifies the color of the rectangle behind the captions.  All burn-in and DVB-Sub font settings must match.
   */
  BackgroundColor?: DvbSubDestinationBackgroundColor | string;

  /**
   * If no explicit xPosition or yPosition is provided, setting alignment to centered will place the captions at the bottom center of the output. Similarly, setting a left alignment will align captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates. Selecting "smart" justification will left-justify live subtitles and center-justify pre-recorded subtitles.  This option is not valid for source captions that are STL or 608/embedded.  These source settings are already pre-defined by the caption stream.  All burn-in and DVB-Sub font settings must match.
   */
  Alignment?: DvbSubDestinationAlignment | string;

  /**
   * Specifies the horizontal offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels to the left.  All burn-in and DVB-Sub font settings must match.
   */
  ShadowXOffset?: number;

  /**
   * Specifies font outline size in pixels. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  OutlineSize?: number;

  /**
   * Specifies the opacity of the background rectangle. 255 is opaque; 0 is transparent. Leaving this parameter blank is equivalent to setting it to 0 (transparent).  All burn-in and DVB-Sub font settings must match.
   */
  BackgroundOpacity?: number;

  /**
   * Controls whether a fixed grid size will be used to generate the output subtitles bitmap. Only applicable for Teletext inputs and DVB-Sub/Burn-in outputs.
   */
  TeletextGridControl?: DvbSubDestinationTeletextGridControl | string;

  /**
   * Specifies the vertical position of the caption relative to the top of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the top of the output. If no explicit yPosition is provided, the caption will be positioned towards the bottom of the output.  This option is not valid for source captions that are STL, 608/embedded or teletext.  These source settings are already pre-defined by the caption stream.  All burn-in and DVB-Sub font settings must match.
   */
  YPosition?: number;

  /**
   * Font resolution in DPI (dots per inch); default is 96 dpi.  All burn-in and DVB-Sub font settings must match.
   */
  FontResolution?: number;

  /**
   * Specifies font outline color. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  OutlineColor?: DvbSubDestinationOutlineColor | string;

  /**
   * Specifies the opacity of the burned-in captions. 255 is opaque; 0 is transparent.  All burn-in and DVB-Sub font settings must match.
   */
  FontOpacity?: number;

  /**
   * Specifies the color of the burned-in captions.  This option is not valid for source captions that are STL, 608/embedded or teletext.  These source settings are already pre-defined by the caption stream.  All burn-in and DVB-Sub font settings must match.
   */
  FontColor?: DvbSubDestinationFontColor | string;

  /**
   * Specifies the opacity of the shadow. 255 is opaque; 0 is transparent. Leaving this parameter blank is equivalent to setting it to 0 (transparent).  All burn-in and DVB-Sub font settings must match.
   */
  ShadowOpacity?: number;

  /**
   * Specifies the vertical offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels above the text.  All burn-in and DVB-Sub font settings must match.
   */
  ShadowYOffset?: number;

  /**
   * Specifies the color of the shadow cast by the captions.  All burn-in and DVB-Sub font settings must match.
   */
  ShadowColor?: DvbSubDestinationShadowColor | string;
}

export namespace DvbSubDestinationSettings {
  export const filterSensitiveLog = (obj: DvbSubDestinationSettings): any => ({
    ...obj,
  });
}

export enum DvbSubDestinationShadowColor {
  BLACK = "BLACK",
  NONE = "NONE",
  WHITE = "WHITE",
}

export enum DvbSubDestinationTeletextGridControl {
  FIXED = "FIXED",
  SCALED = "SCALED",
}

/**
 * Dvb Sub Source Settings
 */
export interface DvbSubSourceSettings {
  /**
   * When using DVB-Sub with Burn-In or SMPTE-TT, use this PID for the source content. Unused for DVB-Sub passthrough. All DVB-Sub content is passed through, regardless of selectors.
   */
  Pid?: number;
}

export namespace DvbSubSourceSettings {
  export const filterSensitiveLog = (obj: DvbSubSourceSettings): any => ({
    ...obj,
  });
}

/**
 * DVB Time and Date Table (SDT)
 */
export interface DvbTdtSettings {
  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   */
  RepInterval?: number;
}

export namespace DvbTdtSettings {
  export const filterSensitiveLog = (obj: DvbTdtSettings): any => ({
    ...obj,
  });
}

export enum Eac3AttenuationControl {
  ATTENUATE_3_DB = "ATTENUATE_3_DB",
  NONE = "NONE",
}

export enum Eac3BitstreamMode {
  COMMENTARY = "COMMENTARY",
  COMPLETE_MAIN = "COMPLETE_MAIN",
  EMERGENCY = "EMERGENCY",
  HEARING_IMPAIRED = "HEARING_IMPAIRED",
  VISUALLY_IMPAIRED = "VISUALLY_IMPAIRED",
}

export enum Eac3CodingMode {
  CODING_MODE_1_0 = "CODING_MODE_1_0",
  CODING_MODE_2_0 = "CODING_MODE_2_0",
  CODING_MODE_3_2 = "CODING_MODE_3_2",
}

export enum Eac3DcFilter {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum Eac3DrcLine {
  FILM_LIGHT = "FILM_LIGHT",
  FILM_STANDARD = "FILM_STANDARD",
  MUSIC_LIGHT = "MUSIC_LIGHT",
  MUSIC_STANDARD = "MUSIC_STANDARD",
  NONE = "NONE",
  SPEECH = "SPEECH",
}

export enum Eac3DrcRf {
  FILM_LIGHT = "FILM_LIGHT",
  FILM_STANDARD = "FILM_STANDARD",
  MUSIC_LIGHT = "MUSIC_LIGHT",
  MUSIC_STANDARD = "MUSIC_STANDARD",
  NONE = "NONE",
  SPEECH = "SPEECH",
}

export enum Eac3LfeControl {
  LFE = "LFE",
  NO_LFE = "NO_LFE",
}

export enum Eac3LfeFilter {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum Eac3MetadataControl {
  FOLLOW_INPUT = "FOLLOW_INPUT",
  USE_CONFIGURED = "USE_CONFIGURED",
}

export enum Eac3PassthroughControl {
  NO_PASSTHROUGH = "NO_PASSTHROUGH",
  WHEN_POSSIBLE = "WHEN_POSSIBLE",
}

export enum Eac3PhaseControl {
  NO_SHIFT = "NO_SHIFT",
  SHIFT_90_DEGREES = "SHIFT_90_DEGREES",
}

/**
 * Eac3 Settings
 */
export interface Eac3Settings {
  /**
   * When set to enabled, activates a DC highpass filter for all input channels.
   */
  DcFilter?: Eac3DcFilter | string;

  /**
   * Left only/Right only center mix level. Only used for 3/2 coding mode.
   */
  LoRoCenterMixLevel?: number;

  /**
   * Left total/Right total surround mix level. Only used for 3/2 coding mode.
   */
  LtRtSurroundMixLevel?: number;

  /**
   * When encoding 3/2 audio, sets whether an extra center back surround channel is matrix encoded into the left and right surround channels.
   */
  SurroundExMode?: Eac3SurroundExMode | string;

  /**
   * When set to whenPossible, input DD+ audio will be passed through if it is present on the input. This detection is dynamic over the life of the transcode. Inputs that alternate between DD+ and non-DD+ content will have a consistent DD+ output as the system alternates between passthrough and encoding.
   */
  PassthroughControl?: Eac3PassthroughControl | string;

  /**
   * Specifies the bitstream mode (bsmod) for the emitted E-AC-3 stream. See ATSC A/52-2012 (Annex E) for background on these values.
   */
  BitstreamMode?: Eac3BitstreamMode | string;

  /**
   * Sets the profile for heavy Dolby dynamic range compression, ensures that the instantaneous signal peaks do not exceed specified levels.
   */
  DrcRf?: Eac3DrcRf | string;

  /**
   * When set to attenuate3Db, applies a 3 dB attenuation to the surround channels. Only used for 3/2 coding mode.
   */
  AttenuationControl?: Eac3AttenuationControl | string;

  /**
   * Dolby Digital Plus coding mode. Determines number of channels.
   */
  CodingMode?: Eac3CodingMode | string;

  /**
   * Sets the Dolby dynamic range compression profile.
   */
  DrcLine?: Eac3DrcLine | string;

  /**
   * Sets the dialnorm for the output. If blank and input audio is Dolby Digital Plus, dialnorm will be passed through.
   */
  Dialnorm?: number;

  /**
   * When set to shift90Degrees, applies a 90-degree phase shift to the surround channels. Only used for 3/2 coding mode.
   */
  PhaseControl?: Eac3PhaseControl | string;

  /**
   * Stereo downmix preference. Only used for 3/2 coding mode.
   */
  StereoDownmix?: Eac3StereoDownmix | string;

  /**
   * When encoding 2/0 audio, sets whether Dolby Surround is matrix encoded into the two channels.
   */
  SurroundMode?: Eac3SurroundMode | string;

  /**
   * Left total/Right total center mix level. Only used for 3/2 coding mode.
   */
  LtRtCenterMixLevel?: number;

  /**
   * When set to enabled, applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid with codingMode32 coding mode.
   */
  LfeFilter?: Eac3LfeFilter | string;

  /**
   * Left only/Right only surround mix level. Only used for 3/2 coding mode.
   */
  LoRoSurroundMixLevel?: number;

  /**
   * Average bitrate in bits/second. Valid bitrates depend on the coding mode.
   */
  Bitrate?: number;

  /**
   * When set to followInput, encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used.
   */
  MetadataControl?: Eac3MetadataControl | string;

  /**
   * When encoding 3/2 audio, setting to lfe enables the LFE channel
   */
  LfeControl?: Eac3LfeControl | string;
}

export namespace Eac3Settings {
  export const filterSensitiveLog = (obj: Eac3Settings): any => ({
    ...obj,
  });
}

export enum Eac3StereoDownmix {
  DPL2 = "DPL2",
  LO_RO = "LO_RO",
  LT_RT = "LT_RT",
  NOT_INDICATED = "NOT_INDICATED",
}

export enum Eac3SurroundExMode {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
  NOT_INDICATED = "NOT_INDICATED",
}

export enum Eac3SurroundMode {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
  NOT_INDICATED = "NOT_INDICATED",
}

/**
 * Ebu Tt DDestination Settings
 */
export interface EbuTtDDestinationSettings {
  /**
   * Specifies the font family to include in the font data attached to the EBU-TT captions. Valid only if styleControl is set to include. If you leave this field empty, the font family is set to "monospaced". (If styleControl is set to exclude, the font family is always set to "monospaced".)
   *
   * You specify only the font family. All other style information (color, bold, position and so on) is copied from the input captions. The size is always set to 100% to allow the downstream player to choose the size.
   *
   * - Enter a list of font families, as a comma-separated list of font names, in order of preference. The name can be a font family (such as “Arial”), or a generic font family (such as “serif”), or “default” (to let the downstream player choose the font).
   * - Leave blank to set the family to “monospace”.
   */
  FontFamily?: string;

  /**
   * Specifies how to handle the gap between the lines (in multi-line captions).
   *
   * - enabled: Fill with the captions background color (as specified in the input captions).
   * - disabled: Leave the gap unfilled.
   */
  FillLineGap?: EbuTtDFillLineGapControl | string;

  /**
   * Specifies the style information (font color, font position, and so on) to include in the font data that is attached to the EBU-TT captions.
   *
   * - include: Take the style information (font color, font position, and so on) from the source captions and include that information in the font data attached to the EBU-TT captions. This option is valid only if the source captions are Embedded or Teletext.
   * - exclude: In the font data attached to the EBU-TT captions, set the font family to "monospaced". Do not include any other style information.
   */
  StyleControl?: EbuTtDDestinationStyleControl | string;
}

export namespace EbuTtDDestinationSettings {
  export const filterSensitiveLog = (obj: EbuTtDDestinationSettings): any => ({
    ...obj,
  });
}

export enum EbuTtDDestinationStyleControl {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

export enum EbuTtDFillLineGapControl {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum EmbeddedConvert608To708 {
  DISABLED = "DISABLED",
  UPCONVERT = "UPCONVERT",
}

/**
 * Embedded Destination Settings
 */
export interface EmbeddedDestinationSettings {}

export namespace EmbeddedDestinationSettings {
  export const filterSensitiveLog = (obj: EmbeddedDestinationSettings): any => ({
    ...obj,
  });
}

/**
 * Embedded Plus Scte20 Destination Settings
 */
export interface EmbeddedPlusScte20DestinationSettings {}

export namespace EmbeddedPlusScte20DestinationSettings {
  export const filterSensitiveLog = (obj: EmbeddedPlusScte20DestinationSettings): any => ({
    ...obj,
  });
}

export enum EmbeddedScte20Detection {
  AUTO = "AUTO",
  OFF = "OFF",
}

/**
 * Embedded Source Settings
 */
export interface EmbeddedSourceSettings {
  /**
   * Specifies the 608/708 channel number within the video track from which to extract captions. Unused for passthrough.
   */
  Source608ChannelNumber?: number;

  /**
   * Set to "auto" to handle streams with intermittent and/or non-aligned SCTE-20 and Embedded captions.
   */
  Scte20Detection?: EmbeddedScte20Detection | string;

  /**
   * If upconvert, 608 data is both passed through via the "608 compatibility bytes" fields of the 708 wrapper as well as translated into 708. 708 data present in the source content will be discarded.
   */
  Convert608To708?: EmbeddedConvert608To708 | string;

  /**
   * This field is unused and deprecated.
   */
  Source608TrackNumber?: number;
}

export namespace EmbeddedSourceSettings {
  export const filterSensitiveLog = (obj: EmbeddedSourceSettings): any => ({
    ...obj,
  });
}

/**
 * Encoder Settings
 */
export interface EncoderSettings {
  /**
   * Placeholder documentation for __listOfAudioDescription
   */
  AudioDescriptions: AudioDescription[] | undefined;

  /**
   * Nielsen configuration settings.
   */
  NielsenConfiguration?: NielsenConfiguration;

  /**
   * Configuration settings that apply to the event as a whole.
   */
  GlobalConfiguration?: GlobalConfiguration;

  /**
   * Placeholder documentation for __listOfVideoDescription
   */
  VideoDescriptions: VideoDescription[] | undefined;

  /**
   * Event-wide configuration settings for ad avail insertion.
   */
  AvailConfiguration?: AvailConfiguration;

  /**
   * Placeholder documentation for __listOfOutputGroup
   */
  OutputGroups: OutputGroup[] | undefined;

  /**
   * Settings for caption decriptions
   */
  CaptionDescriptions?: CaptionDescription[];

  /**
   * Feature Activations
   */
  FeatureActivations?: FeatureActivations;

  /**
   * Contains settings used to acquire and adjust timecode information from inputs.
   */
  TimecodeConfig: TimecodeConfig | undefined;

  /**
   * Settings for ad avail blanking.
   */
  AvailBlanking?: AvailBlanking;

  /**
   * Settings for blackout slate.
   */
  BlackoutSlate?: BlackoutSlate;
}

export namespace EncoderSettings {
  export const filterSensitiveLog = (obj: EncoderSettings): any => ({
    ...obj,
  });
}

/**
 * Feature Activations
 */
export interface FeatureActivations {
  /**
   * Enables the Input Prepare feature. You can create Input Prepare actions in the schedule only if this feature is enabled.
   * If you disable the feature on an existing schedule, make sure that you first delete all input prepare actions from the schedule.
   */
  InputPrepareScheduleActions?: FeatureActivationsInputPrepareScheduleActions | string;
}

export namespace FeatureActivations {
  export const filterSensitiveLog = (obj: FeatureActivations): any => ({
    ...obj,
  });
}

export enum FeatureActivationsInputPrepareScheduleActions {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum FecOutputIncludeFec {
  COLUMN = "COLUMN",
  COLUMN_AND_ROW = "COLUMN_AND_ROW",
}

/**
 * Fec Output Settings
 */
export interface FecOutputSettings {
  /**
   * Parameter D from SMPTE 2022-1. The height of the FEC protection matrix.  The number of transport stream packets per column error correction packet. Must be between 4 and 20, inclusive.
   */
  ColumnDepth?: number;

  /**
   * Parameter L from SMPTE 2022-1. The width of the FEC protection matrix.  Must be between 1 and 20, inclusive. If only Column FEC is used, then larger values increase robustness.  If Row FEC is used, then this is the number of transport stream packets per row error correction packet, and the value must be between 4 and 20, inclusive, if includeFec is columnAndRow. If includeFec is column, this value must be 1 to 20, inclusive.
   */
  RowLength?: number;

  /**
   * Enables column only or column and row based FEC
   */
  IncludeFec?: FecOutputIncludeFec | string;
}

export namespace FecOutputSettings {
  export const filterSensitiveLog = (obj: FecOutputSettings): any => ({
    ...obj,
  });
}

export enum FixedAfd {
  AFD_0000 = "AFD_0000",
  AFD_0010 = "AFD_0010",
  AFD_0011 = "AFD_0011",
  AFD_0100 = "AFD_0100",
  AFD_1000 = "AFD_1000",
  AFD_1001 = "AFD_1001",
  AFD_1010 = "AFD_1010",
  AFD_1011 = "AFD_1011",
  AFD_1101 = "AFD_1101",
  AFD_1110 = "AFD_1110",
  AFD_1111 = "AFD_1111",
}

/**
 * Start time for the action.
 */
export interface FixedModeScheduleActionStartSettings {
  /**
   * Start time for the action to start in the channel. (Not the time for the action to be added to the schedule: actions are always added to the schedule immediately.) UTC format: yyyy-mm-ddThh:mm:ss.nnnZ. All the letters are digits (for example, mm might be 01) except for the two constants "T" for time and "Z" for "UTC format".
   */
  Time: string | undefined;
}

export namespace FixedModeScheduleActionStartSettings {
  export const filterSensitiveLog = (obj: FixedModeScheduleActionStartSettings): any => ({
    ...obj,
  });
}

/**
 * Fmp4 Hls Settings
 */
export interface Fmp4HlsSettings {
  /**
   * If set to passthrough, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.
   */
  NielsenId3Behavior?: Fmp4NielsenId3Behavior | string;

  /**
   * List all the audio groups that are used with the video output stream. Input all the audio GROUP-IDs that are associated to the video, separate by ','.
   */
  AudioRenditionSets?: string;

  /**
   * When set to passthrough, timed metadata is passed through from input to output.
   */
  TimedMetadataBehavior?: Fmp4TimedMetadataBehavior | string;
}

export namespace Fmp4HlsSettings {
  export const filterSensitiveLog = (obj: Fmp4HlsSettings): any => ({
    ...obj,
  });
}

export enum Fmp4NielsenId3Behavior {
  NO_PASSTHROUGH = "NO_PASSTHROUGH",
  PASSTHROUGH = "PASSTHROUGH",
}

export enum Fmp4TimedMetadataBehavior {
  NO_PASSTHROUGH = "NO_PASSTHROUGH",
  PASSTHROUGH = "PASSTHROUGH",
}

/**
 * Settings to specify if an action follows another.
 */
export interface FollowModeScheduleActionStartSettings {
  /**
   * The action name of another action that this one refers to.
   */
  ReferenceActionName: string | undefined;

  /**
   * Identifies whether this action starts relative to the start or relative to the end of the reference action.
   */
  FollowPoint: FollowPoint | string | undefined;
}

export namespace FollowModeScheduleActionStartSettings {
  export const filterSensitiveLog = (obj: FollowModeScheduleActionStartSettings): any => ({
    ...obj,
  });
}

export enum FollowPoint {
  END = "END",
  START = "START",
}

/**
 * Placeholder documentation for ForbiddenException
 */
export interface ForbiddenException extends __SmithyException, $MetadataBearer {
  name: "ForbiddenException";
  $fault: "client";
  /**
   * Placeholder documentation for __string
   */
  Message?: string;
}

export namespace ForbiddenException {
  export const filterSensitiveLog = (obj: ForbiddenException): any => ({
    ...obj,
  });
}

/**
 * Frame Capture Group Settings
 */
export interface FrameCaptureGroupSettings {
  /**
   * The destination for the frame capture files. Either the URI for an Amazon S3 bucket and object, plus a file name prefix (for example, s3ssl://sportsDelivery/highlights/20180820/curling_) or the URI for a MediaStore container, plus a file name prefix (for example, mediastoressl://sportsDelivery/20180820/curling_). The final file names consist of the prefix from the destination field (for example, "curling_") + name modifier + the counter (5 digits, starting from 00001) + extension (which is always .jpg).  For example, curlingLow.00001.jpg
   */
  Destination: OutputLocationRef | undefined;
}

export namespace FrameCaptureGroupSettings {
  export const filterSensitiveLog = (obj: FrameCaptureGroupSettings): any => ({
    ...obj,
  });
}

export enum FrameCaptureIntervalUnit {
  MILLISECONDS = "MILLISECONDS",
  SECONDS = "SECONDS",
}

/**
 * Frame Capture Output Settings
 */
export interface FrameCaptureOutputSettings {
  /**
   * Required if the output group contains more than one output. This modifier forms part of the output file name.
   */
  NameModifier?: string;
}

export namespace FrameCaptureOutputSettings {
  export const filterSensitiveLog = (obj: FrameCaptureOutputSettings): any => ({
    ...obj,
  });
}

/**
 * Frame Capture Settings
 */
export interface FrameCaptureSettings {
  /**
   * Unit for the frame capture interval.
   */
  CaptureIntervalUnits?: FrameCaptureIntervalUnit | string;

  /**
   * The frequency at which to capture frames for inclusion in the output. May be specified in either seconds or milliseconds, as specified by captureIntervalUnits.
   */
  CaptureInterval: number | undefined;
}

export namespace FrameCaptureSettings {
  export const filterSensitiveLog = (obj: FrameCaptureSettings): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for GatewayTimeoutException
 */
export interface GatewayTimeoutException extends __SmithyException, $MetadataBearer {
  name: "GatewayTimeoutException";
  $fault: "server";
  /**
   * Placeholder documentation for __string
   */
  Message?: string;
}

export namespace GatewayTimeoutException {
  export const filterSensitiveLog = (obj: GatewayTimeoutException): any => ({
    ...obj,
  });
}

/**
 * Global Configuration
 */
export interface GlobalConfiguration {
  /**
   * Indicates whether the rate of frames emitted by the Live encoder should be paced by its system clock (which optionally may be locked to another source via NTP) or should be locked to the clock of the source that is providing the input stream.
   */
  OutputTimingSource?: GlobalConfigurationOutputTimingSource | string;

  /**
   * Adjusts video input buffer for streams with very low video framerates. This is commonly set to enabled for music channels with less than one video frame per second.
   */
  SupportLowFramerateInputs?: GlobalConfigurationLowFramerateInputs | string;

  /**
   * Value to set the initial audio gain for the Live Event.
   */
  InitialAudioGain?: number;

  /**
   * Indicates how MediaLive pipelines are synchronized.
   *
   * PIPELINE_LOCKING - MediaLive will attempt to synchronize the output of each pipeline to the other.
   * EPOCH_LOCKING - MediaLive will attempt to synchronize the output of each pipeline to the Unix epoch.
   */
  OutputLockingMode?: GlobalConfigurationOutputLockingMode | string;

  /**
   * Settings for system actions when input is lost.
   */
  InputLossBehavior?: InputLossBehavior;

  /**
   * Indicates the action to take when the current input completes (e.g. end-of-file). When switchAndLoopInputs is configured the encoder will restart at the beginning of the first input.  When "none" is configured the encoder will transcode either black, a solid color, or a user specified slate images per the "Input Loss Behavior" configuration until the next input switch occurs (which is controlled through the Channel Schedule API).
   */
  InputEndAction?: GlobalConfigurationInputEndAction | string;
}

export namespace GlobalConfiguration {
  export const filterSensitiveLog = (obj: GlobalConfiguration): any => ({
    ...obj,
  });
}

export enum GlobalConfigurationInputEndAction {
  NONE = "NONE",
  SWITCH_AND_LOOP_INPUTS = "SWITCH_AND_LOOP_INPUTS",
}

export enum GlobalConfigurationLowFramerateInputs {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum GlobalConfigurationOutputLockingMode {
  EPOCH_LOCKING = "EPOCH_LOCKING",
  PIPELINE_LOCKING = "PIPELINE_LOCKING",
}

export enum GlobalConfigurationOutputTimingSource {
  INPUT_CLOCK = "INPUT_CLOCK",
  SYSTEM_CLOCK = "SYSTEM_CLOCK",
}

export enum H264AdaptiveQuantization {
  HIGH = "HIGH",
  HIGHER = "HIGHER",
  LOW = "LOW",
  MAX = "MAX",
  MEDIUM = "MEDIUM",
  OFF = "OFF",
}

export enum H264ColorMetadata {
  IGNORE = "IGNORE",
  INSERT = "INSERT",
}

/**
 * H264 Color Space Settings
 */
export interface H264ColorSpaceSettings {
  /**
   * Rec601 Settings
   */
  Rec601Settings?: Rec601Settings;

  /**
   * Rec709 Settings
   */
  Rec709Settings?: Rec709Settings;

  /**
   * Passthrough applies no color space conversion to the output
   */
  ColorSpacePassthroughSettings?: ColorSpacePassthroughSettings;
}

export namespace H264ColorSpaceSettings {
  export const filterSensitiveLog = (obj: H264ColorSpaceSettings): any => ({
    ...obj,
  });
}

export enum H264EntropyEncoding {
  CABAC = "CABAC",
  CAVLC = "CAVLC",
}

/**
 * H264 Filter Settings
 */
export interface H264FilterSettings {
  /**
   * Temporal Filter Settings
   */
  TemporalFilterSettings?: TemporalFilterSettings;
}

export namespace H264FilterSettings {
  export const filterSensitiveLog = (obj: H264FilterSettings): any => ({
    ...obj,
  });
}

export enum H264FlickerAq {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H264ForceFieldPictures {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H264FramerateControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum H264GopBReference {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H264GopSizeUnits {
  FRAMES = "FRAMES",
  SECONDS = "SECONDS",
}

export enum H264Level {
  H264_LEVEL_1 = "H264_LEVEL_1",
  H264_LEVEL_1_1 = "H264_LEVEL_1_1",
  H264_LEVEL_1_2 = "H264_LEVEL_1_2",
  H264_LEVEL_1_3 = "H264_LEVEL_1_3",
  H264_LEVEL_2 = "H264_LEVEL_2",
  H264_LEVEL_2_1 = "H264_LEVEL_2_1",
  H264_LEVEL_2_2 = "H264_LEVEL_2_2",
  H264_LEVEL_3 = "H264_LEVEL_3",
  H264_LEVEL_3_1 = "H264_LEVEL_3_1",
  H264_LEVEL_3_2 = "H264_LEVEL_3_2",
  H264_LEVEL_4 = "H264_LEVEL_4",
  H264_LEVEL_4_1 = "H264_LEVEL_4_1",
  H264_LEVEL_4_2 = "H264_LEVEL_4_2",
  H264_LEVEL_5 = "H264_LEVEL_5",
  H264_LEVEL_5_1 = "H264_LEVEL_5_1",
  H264_LEVEL_5_2 = "H264_LEVEL_5_2",
  H264_LEVEL_AUTO = "H264_LEVEL_AUTO",
}

export enum H264LookAheadRateControl {
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
}

export enum H264ParControl {
  INITIALIZE_FROM_SOURCE = "INITIALIZE_FROM_SOURCE",
  SPECIFIED = "SPECIFIED",
}

export enum H264Profile {
  BASELINE = "BASELINE",
  HIGH = "HIGH",
  HIGH_10BIT = "HIGH_10BIT",
  HIGH_422 = "HIGH_422",
  HIGH_422_10BIT = "HIGH_422_10BIT",
  MAIN = "MAIN",
}

export enum H264QualityLevel {
  ENHANCED_QUALITY = "ENHANCED_QUALITY",
  STANDARD_QUALITY = "STANDARD_QUALITY",
}

export enum H264RateControlMode {
  CBR = "CBR",
  MULTIPLEX = "MULTIPLEX",
  QVBR = "QVBR",
  VBR = "VBR",
}

export enum H264ScanType {
  INTERLACED = "INTERLACED",
  PROGRESSIVE = "PROGRESSIVE",
}

export enum H264SceneChangeDetect {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * H264 Settings
 */
export interface H264Settings {
  /**
   * Color Space settings
   */
  ColorSpaceSettings?: H264ColorSpaceSettings;

  /**
   * Softness. Selects quantizer matrix, larger values reduce high-frequency content in the encoded image.
   */
  Softness?: number;

  /**
   * Documentation update needed
   */
  GopBReference?: H264GopBReference | string;

  /**
   * Pixel Aspect Ratio denominator.
   */
  ParDenominator?: number;

  /**
   * Average bitrate in bits/second. Required when the rate control mode is VBR or CBR. Not used for QVBR. In an MS Smooth output group, each output must have a unique value when its bitrate is rounded down to the nearest multiple of 1000.
   */
  Bitrate?: number;

  /**
   * If set to enabled, adjust quantization within each frame based on spatial variation of content complexity.
   */
  SpatialAq?: H264SpatialAq | string;

  /**
   * Entropy encoding mode.  Use cabac (must be in Main or High profile) or cavlc.
   */
  EntropyEncoding?: H264EntropyEncoding | string;

  /**
   * Indicates if the gopSize is specified in frames or seconds. If seconds the system will convert the gopSize into a frame count at run time.
   */
  GopSizeUnits?: H264GopSizeUnits | string;

  /**
   * Four bit AFD value to write on all frames of video in the output stream. Only valid when afdSignaling is set to 'Fixed'.
   */
  FixedAfd?: FixedAfd | string;

  /**
   * Indicates that AFD values will be written into the output stream.  If afdSignaling is "auto", the system will try to preserve the input AFD value (in cases where multiple AFD values are valid). If set to "fixed", the AFD value will be the value configured in the fixedAfd parameter.
   */
  AfdSignaling?: AfdSignaling | string;

  /**
   * GOP size (keyframe interval) in units of either frames or seconds per gopSizeUnits.
   * If gopSizeUnits is frames, gopSize must be an integer and must be greater than or equal to 1.
   * If gopSizeUnits is seconds, gopSize must be greater than 0, but need not be an integer.
   */
  GopSize?: number;

  /**
   * Scene change detection.
   *
   * - On: inserts I-frames when scene change is detected.
   * - Off: does not force an I-frame when scene change is detected.
   */
  SceneChangeDetect?: H264SceneChangeDetect | string;

  /**
   * This setting applies only when scan type is "interlaced." It controls whether coding is performed on a field basis or on a frame basis. (When the video is progressive, the coding is always performed on a frame basis.)
   * enabled: Force MediaLive to code on a field basis, so that odd and even sets of fields are coded separately.
   * disabled: Code the two sets of fields separately (on a field basis) or together (on a frame basis using PAFF), depending on what is most appropriate for the content.
   */
  ForceFieldPictures?: H264ForceFieldPictures | string;

  /**
   * Only meaningful if sceneChangeDetect is set to enabled.  Defaults to 5 if multiplex rate control is used.  Enforces separation between repeated (cadence) I-frames and I-frames inserted by Scene Change Detection. If a scene change I-frame is within I-interval frames of a cadence I-frame, the GOP is shrunk and/or stretched to the scene change I-frame. GOP stretch requires enabling lookahead as well as setting I-interval. The normal cadence resumes for the next GOP. Note: Maximum GOP stretch = GOP size + Min-I-interval - 1
   */
  MinIInterval?: number;

  /**
   * Leave as STANDARD_QUALITY or choose a different value (which might result in additional costs to run the channel).
   * - ENHANCED_QUALITY: Produces a slightly better video quality without an increase in the bitrate. Has an effect only when the Rate control mode is QVBR or CBR. If this channel is in a MediaLive multiplex, the value must be ENHANCED_QUALITY.
   * - STANDARD_QUALITY: Valid for any Rate control mode.
   */
  QualityLevel?: H264QualityLevel | string;

  /**
   * Framerate denominator.
   */
  FramerateDenominator?: number;

  /**
   * This field indicates how the output video frame rate is specified.  If "specified" is selected then the output video frame rate is determined by framerateNumerator and framerateDenominator, else if "initializeFromSource" is selected then the output video frame rate will be set equal to the input video frame rate of the first input.
   */
  FramerateControl?: H264FramerateControl | string;

  /**
   * Adaptive quantization. Allows intra-frame quantizers to vary to improve visual quality.
   */
  AdaptiveQuantization?: H264AdaptiveQuantization | string;

  /**
   * Optional filters that you can apply to an encode.
   */
  FilterSettings?: H264FilterSettings;

  /**
   * Number of reference frames to use. The encoder may use more than requested if using B-frames and/or interlaced encoding.
   */
  NumRefFrames?: number;

  /**
   * Produces a bitstream compliant with SMPTE RP-2027.
   */
  Syntax?: H264Syntax | string;

  /**
   * H.264 Level.
   */
  Level?: H264Level | string;

  /**
   * This field indicates how the output pixel aspect ratio is specified.  If "specified" is selected then the output video pixel aspect ratio is determined by parNumerator and parDenominator, else if "initializeFromSource" is selected then the output pixsel aspect ratio will be set equal to the input video pixel aspect ratio of the first input.
   */
  ParControl?: H264ParControl | string;

  /**
   * If set to enabled, adjust quantization within each frame based on temporal variation of content complexity.
   */
  TemporalAq?: H264TemporalAq | string;

  /**
   * Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.
   */
  GopClosedCadence?: number;

  /**
   * Framerate numerator - framerate is a fraction, e.g. 24000 / 1001 = 23.976 fps.
   */
  FramerateNumerator?: number;

  /**
   * If set to enabled, adjust quantization within each frame to reduce flicker or 'pop' on I-frames.
   */
  FlickerAq?: H264FlickerAq | string;

  /**
   * H.264 Profile.
   */
  Profile?: H264Profile | string;

  /**
   * Rate control mode.
   *
   * QVBR: Quality will match the specified quality level except when it is constrained by the
   * maximum bitrate.  Recommended if you or your viewers pay for bandwidth.
   *
   * VBR: Quality and bitrate vary, depending on the video complexity. Recommended instead of QVBR
   * if you want to maintain a specific average bitrate over the duration of the channel.
   *
   * CBR: Quality varies, depending on the video complexity. Recommended only if you distribute
   * your assets to devices that cannot handle variable bitrates.
   *
   * Multiplex: This rate control mode is only supported (and is required) when the video is being
   * delivered to a MediaLive Multiplex in which case the rate control configuration is controlled
   * by the properties within the Multiplex Program.
   */
  RateControlMode?: H264RateControlMode | string;

  /**
   * For QVBR: See the tooltip for Quality level
   *
   * For VBR: Set the maximum bitrate in order to accommodate expected spikes in the complexity of the video.
   */
  MaxBitrate?: number;

  /**
   * Includes colorspace metadata in the output.
   */
  ColorMetadata?: H264ColorMetadata | string;

  /**
   * Controls the target quality for the video encode. Applies only when the rate control mode is QVBR. Set values for the QVBR quality level field and Max bitrate field that suit your most important viewing devices. Recommended values are:
   * - Primary screen: Quality level: 8 to 10. Max bitrate: 4M
   * - PC or tablet: Quality level: 7. Max bitrate: 1.5M to 3M
   * - Smartphone: Quality level: 6. Max bitrate: 1M to 1.5M
   */
  QvbrQualityLevel?: number;

  /**
   * If set to fixed, use gopNumBFrames B-frames per sub-GOP. If set to dynamic, optimize the number of B-frames used for each sub-GOP to improve visual quality.
   */
  SubgopLength?: H264SubGopLength | string;

  /**
   * Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.
   * This field is optional; when no value is specified the encoder will choose the number of slices based on encode resolution.
   */
  Slices?: number;

  /**
   * Amount of lookahead. A value of low can decrease latency and memory usage, while high can produce better quality for certain content.
   */
  LookAheadRateControl?: H264LookAheadRateControl | string;

  /**
   * Size of buffer (HRD buffer model) in bits.
   */
  BufSize?: number;

  /**
   * Determines how timecodes should be inserted into the video elementary stream.
   * - 'disabled': Do not include timecodes
   * - 'picTimingSei': Pass through picture timing SEI messages from the source specified in Timecode Config
   */
  TimecodeInsertion?: H264TimecodeInsertionBehavior | string;

  /**
   * Sets the scan type of the output to progressive or top-field-first interlaced.
   */
  ScanType?: H264ScanType | string;

  /**
   * Percentage of the buffer that should initially be filled (HRD buffer model).
   */
  BufFillPct?: number;

  /**
   * Pixel Aspect Ratio numerator.
   */
  ParNumerator?: number;

  /**
   * Number of B-frames between reference frames.
   */
  GopNumBFrames?: number;
}

export namespace H264Settings {
  export const filterSensitiveLog = (obj: H264Settings): any => ({
    ...obj,
  });
}

export enum H264SpatialAq {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H264SubGopLength {
  DYNAMIC = "DYNAMIC",
  FIXED = "FIXED",
}

export enum H264Syntax {
  DEFAULT = "DEFAULT",
  RP2027 = "RP2027",
}

export enum H264TemporalAq {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H264TimecodeInsertionBehavior {
  DISABLED = "DISABLED",
  PIC_TIMING_SEI = "PIC_TIMING_SEI",
}

export enum H265AdaptiveQuantization {
  HIGH = "HIGH",
  HIGHER = "HIGHER",
  LOW = "LOW",
  MAX = "MAX",
  MEDIUM = "MEDIUM",
  OFF = "OFF",
}

export enum H265AlternativeTransferFunction {
  INSERT = "INSERT",
  OMIT = "OMIT",
}

export enum H265ColorMetadata {
  IGNORE = "IGNORE",
  INSERT = "INSERT",
}

/**
 * H265 Color Space Settings
 */
export interface H265ColorSpaceSettings {
  /**
   * Hdr10 Settings
   */
  Hdr10Settings?: Hdr10Settings;

  /**
   * Rec601 Settings
   */
  Rec601Settings?: Rec601Settings;

  /**
   * Rec709 Settings
   */
  Rec709Settings?: Rec709Settings;

  /**
   * Passthrough applies no color space conversion to the output
   */
  ColorSpacePassthroughSettings?: ColorSpacePassthroughSettings;
}

export namespace H265ColorSpaceSettings {
  export const filterSensitiveLog = (obj: H265ColorSpaceSettings): any => ({
    ...obj,
  });
}

/**
 * H265 Filter Settings
 */
export interface H265FilterSettings {
  /**
   * Temporal Filter Settings
   */
  TemporalFilterSettings?: TemporalFilterSettings;
}

export namespace H265FilterSettings {
  export const filterSensitiveLog = (obj: H265FilterSettings): any => ({
    ...obj,
  });
}

export enum H265FlickerAq {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum H265GopSizeUnits {
  FRAMES = "FRAMES",
  SECONDS = "SECONDS",
}

export enum H265Level {
  H265_LEVEL_1 = "H265_LEVEL_1",
  H265_LEVEL_2 = "H265_LEVEL_2",
  H265_LEVEL_2_1 = "H265_LEVEL_2_1",
  H265_LEVEL_3 = "H265_LEVEL_3",
  H265_LEVEL_3_1 = "H265_LEVEL_3_1",
  H265_LEVEL_4 = "H265_LEVEL_4",
  H265_LEVEL_4_1 = "H265_LEVEL_4_1",
  H265_LEVEL_5 = "H265_LEVEL_5",
  H265_LEVEL_5_1 = "H265_LEVEL_5_1",
  H265_LEVEL_5_2 = "H265_LEVEL_5_2",
  H265_LEVEL_6 = "H265_LEVEL_6",
  H265_LEVEL_6_1 = "H265_LEVEL_6_1",
  H265_LEVEL_6_2 = "H265_LEVEL_6_2",
  H265_LEVEL_AUTO = "H265_LEVEL_AUTO",
}

export enum H265LookAheadRateControl {
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
}

export enum H265Profile {
  MAIN = "MAIN",
  MAIN_10BIT = "MAIN_10BIT",
}

export enum H265RateControlMode {
  CBR = "CBR",
  MULTIPLEX = "MULTIPLEX",
  QVBR = "QVBR",
}

export enum H265ScanType {
  INTERLACED = "INTERLACED",
  PROGRESSIVE = "PROGRESSIVE",
}

export enum H265SceneChangeDetect {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * H265 Settings
 */
export interface H265Settings {
  /**
   * Whether or not EML should insert an Alternative Transfer Function SEI message to support backwards compatibility with non-HDR decoders and displays.
   */
  AlternativeTransferFunction?: H265AlternativeTransferFunction | string;

  /**
   * Pixel Aspect Ratio denominator.
   */
  ParDenominator?: number;

  /**
   * Color Space settings
   */
  ColorSpaceSettings?: H265ColorSpaceSettings;

  /**
   * H.265 Tier.
   */
  Tier?: H265Tier | string;

  /**
   * For QVBR: See the tooltip for Quality level
   */
  MaxBitrate?: number;

  /**
   * Indicates that AFD values will be written into the output stream.  If afdSignaling is "auto", the system will try to preserve the input AFD value (in cases where multiple AFD values are valid). If set to "fixed", the AFD value will be the value configured in the fixedAfd parameter.
   */
  AfdSignaling?: AfdSignaling | string;

  /**
   * Four bit AFD value to write on all frames of video in the output stream. Only valid when afdSignaling is set to 'Fixed'.
   */
  FixedAfd?: FixedAfd | string;

  /**
   * Indicates if the gopSize is specified in frames or seconds. If seconds the system will convert the gopSize into a frame count at run time.
   */
  GopSizeUnits?: H265GopSizeUnits | string;

  /**
   * Size of buffer (HRD buffer model) in bits.
   */
  BufSize?: number;

  /**
   * Includes colorspace metadata in the output.
   */
  ColorMetadata?: H265ColorMetadata | string;

  /**
   * Pixel Aspect Ratio numerator.
   */
  ParNumerator?: number;

  /**
   * Sets the scan type of the output to progressive or top-field-first interlaced.
   */
  ScanType?: H265ScanType | string;

  /**
   * Determines how timecodes should be inserted into the video elementary stream.
   * - 'disabled': Do not include timecodes
   * - 'picTimingSei': Pass through picture timing SEI messages from the source specified in Timecode Config
   */
  TimecodeInsertion?: H265TimecodeInsertionBehavior | string;

  /**
   * H.265 Level.
   */
  Level?: H265Level | string;

  /**
   * Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.
   * This field is optional; when no value is specified the encoder will choose the number of slices based on encode resolution.
   */
  Slices?: number;

  /**
   * Controls the target quality for the video encode. Applies only when the rate control mode is QVBR. Set values for the QVBR quality level field and Max bitrate field that suit your most important viewing devices. Recommended values are:
   * - Primary screen: Quality level: 8 to 10. Max bitrate: 4M
   * - PC or tablet: Quality level: 7. Max bitrate: 1.5M to 3M
   * - Smartphone: Quality level: 6. Max bitrate: 1M to 1.5M
   */
  QvbrQualityLevel?: number;

  /**
   * Amount of lookahead. A value of low can decrease latency and memory usage, while high can produce better quality for certain content.
   */
  LookAheadRateControl?: H265LookAheadRateControl | string;

  /**
   * If set to enabled, adjust quantization within each frame to reduce flicker or 'pop' on I-frames.
   */
  FlickerAq?: H265FlickerAq | string;

  /**
   * Framerate numerator - framerate is a fraction, e.g. 24000 / 1001 = 23.976 fps.
   */
  FramerateNumerator: number | undefined;

  /**
   * H.265 Profile.
   */
  Profile?: H265Profile | string;

  /**
   * Average bitrate in bits/second. Required when the rate control mode is VBR or CBR. Not used for QVBR. In an MS Smooth output group, each output must have a unique value when its bitrate is rounded down to the nearest multiple of 1000.
   */
  Bitrate?: number;

  /**
   * Adaptive quantization. Allows intra-frame quantizers to vary to improve visual quality.
   */
  AdaptiveQuantization?: H265AdaptiveQuantization | string;

  /**
   * Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.
   */
  GopClosedCadence?: number;

  /**
   * Rate control mode.
   *
   * QVBR: Quality will match the specified quality level except when it is constrained by the
   * maximum bitrate.  Recommended if you or your viewers pay for bandwidth.
   *
   * CBR: Quality varies, depending on the video complexity. Recommended only if you distribute
   * your assets to devices that cannot handle variable bitrates.
   *
   * Multiplex: This rate control mode is only supported (and is required) when the video is being
   * delivered to a MediaLive Multiplex in which case the rate control configuration is controlled
   * by the properties within the Multiplex Program.
   */
  RateControlMode?: H265RateControlMode | string;

  /**
   * Framerate denominator.
   */
  FramerateDenominator: number | undefined;

  /**
   * Optional filters that you can apply to an encode.
   */
  FilterSettings?: H265FilterSettings;

  /**
   * Scene change detection.
   */
  SceneChangeDetect?: H265SceneChangeDetect | string;

  /**
   * GOP size (keyframe interval) in units of either frames or seconds per gopSizeUnits.
   * If gopSizeUnits is frames, gopSize must be an integer and must be greater than or equal to 1.
   * If gopSizeUnits is seconds, gopSize must be greater than 0, but need not be an integer.
   */
  GopSize?: number;

  /**
   * Only meaningful if sceneChangeDetect is set to enabled.  Defaults to 5 if multiplex rate control is used.  Enforces separation between repeated (cadence) I-frames and I-frames inserted by Scene Change Detection. If a scene change I-frame is within I-interval frames of a cadence I-frame, the GOP is shrunk and/or stretched to the scene change I-frame. GOP stretch requires enabling lookahead as well as setting I-interval. The normal cadence resumes for the next GOP. Note: Maximum GOP stretch = GOP size + Min-I-interval - 1
   */
  MinIInterval?: number;
}

export namespace H265Settings {
  export const filterSensitiveLog = (obj: H265Settings): any => ({
    ...obj,
  });
}

export enum H265Tier {
  HIGH = "HIGH",
  MAIN = "MAIN",
}

export enum H265TimecodeInsertionBehavior {
  DISABLED = "DISABLED",
  PIC_TIMING_SEI = "PIC_TIMING_SEI",
}

/**
 * Hdr10 Settings
 */
export interface Hdr10Settings {
  /**
   * Maximum Content Light Level
   * An integer metadata value defining the maximum light level, in nits,
   * of any single pixel within an encoded HDR video stream or file.
   */
  MaxCll?: number;

  /**
   * Maximum Frame Average Light Level
   * An integer metadata value defining the maximum average light level, in nits,
   * for any single frame within an encoded HDR video stream or file.
   */
  MaxFall?: number;
}

export namespace Hdr10Settings {
  export const filterSensitiveLog = (obj: Hdr10Settings): any => ({
    ...obj,
  });
}

export enum HlsAdMarkers {
  ADOBE = "ADOBE",
  ELEMENTAL = "ELEMENTAL",
  ELEMENTAL_SCTE35 = "ELEMENTAL_SCTE35",
}

export enum HlsAkamaiHttpTransferMode {
  CHUNKED = "CHUNKED",
  NON_CHUNKED = "NON_CHUNKED",
}

/**
 * Hls Akamai Settings
 */
export interface HlsAkamaiSettings {
  /**
   * Size in seconds of file cache for streaming outputs.
   */
  FilecacheDuration?: number;

  /**
   * Token parameter for authenticated akamai. If not specified, _gda_ is used.
   */
  Token?: string;

  /**
   * Salt for authenticated Akamai.
   */
  Salt?: string;

  /**
   * Specify whether or not to use chunked transfer encoding to Akamai. User should contact Akamai to enable this feature.
   */
  HttpTransferMode?: HlsAkamaiHttpTransferMode | string;

  /**
   * Number of seconds to wait before retrying connection to the CDN if the connection is lost.
   */
  ConnectionRetryInterval?: number;

  /**
   * If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart.
   */
  RestartDelay?: number;

  /**
   * Number of retry attempts that will be made before the Live Event is put into an error state.
   */
  NumRetries?: number;
}

export namespace HlsAkamaiSettings {
  export const filterSensitiveLog = (obj: HlsAkamaiSettings): any => ({
    ...obj,
  });
}

/**
 * Hls Basic Put Settings
 */
export interface HlsBasicPutSettings {
  /**
   * If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart.
   */
  RestartDelay?: number;

  /**
   * Number of seconds to wait before retrying connection to the CDN if the connection is lost.
   */
  ConnectionRetryInterval?: number;

  /**
   * Size in seconds of file cache for streaming outputs.
   */
  FilecacheDuration?: number;

  /**
   * Number of retry attempts that will be made before the Live Event is put into an error state.
   */
  NumRetries?: number;
}

export namespace HlsBasicPutSettings {
  export const filterSensitiveLog = (obj: HlsBasicPutSettings): any => ({
    ...obj,
  });
}

export enum HlsCaptionLanguageSetting {
  INSERT = "INSERT",
  NONE = "NONE",
  OMIT = "OMIT",
}

/**
 * Hls Cdn Settings
 */
export interface HlsCdnSettings {
  /**
   * Hls Akamai Settings
   */
  HlsAkamaiSettings?: HlsAkamaiSettings;

  /**
   * Hls Webdav Settings
   */
  HlsWebdavSettings?: HlsWebdavSettings;

  /**
   * Hls Basic Put Settings
   */
  HlsBasicPutSettings?: HlsBasicPutSettings;

  /**
   * Hls Media Store Settings
   */
  HlsMediaStoreSettings?: HlsMediaStoreSettings;
}

export namespace HlsCdnSettings {
  export const filterSensitiveLog = (obj: HlsCdnSettings): any => ({
    ...obj,
  });
}

export enum HlsClientCache {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum HlsCodecSpecification {
  RFC_4281 = "RFC_4281",
  RFC_6381 = "RFC_6381",
}

export enum HlsDirectoryStructure {
  SINGLE_DIRECTORY = "SINGLE_DIRECTORY",
  SUBDIRECTORY_PER_STREAM = "SUBDIRECTORY_PER_STREAM",
}

export enum HlsEncryptionType {
  AES128 = "AES128",
  SAMPLE_AES = "SAMPLE_AES",
}

/**
 * Hls Group Settings
 */
export interface HlsGroupSettings {
  /**
   * Indicates whether the output manifest should use floating point or integer values for segment duration.
   */
  ManifestDurationFormat?: HlsManifestDurationFormat | string;

  /**
   * Place segments in subdirectories.
   */
  DirectoryStructure?: HlsDirectoryStructure | string;

  /**
   * Timed Metadata interval in seconds.
   */
  TimedMetadataId3Period?: number;

  /**
   * Applies only if Mode field is LIVE. Specifies the number of media segments (.ts files) to retain in the destination directory.
   */
  KeepSegments?: number;

  /**
   * When set to gzip, compresses HLS playlist.
   */
  ManifestCompression?: HlsManifestCompression | string;

  /**
   * Length of MPEG-2 Transport Stream segments to create (in seconds). Note that segments will end on the next keyframe after this number of seconds, so actual segment length may be longer.
   */
  SegmentLength?: number;

  /**
   * The key provider settings.
   */
  KeyProviderSettings?: KeyProviderSettings;

  /**
   * Applies only if Mode field is LIVE. Specifies the maximum number of segments in the media manifest file. After this maximum, older segments are removed from the media manifest. This number must be less than or equal to the Keep Segments field.
   */
  IndexNSegments?: number;

  /**
   * Mapping of up to 4 caption channels to caption languages.  Is only meaningful if captionLanguageSetting is set to "insert".
   */
  CaptionLanguageMappings?: CaptionLanguageMapping[];

  /**
   * SEGMENTED_FILES: Emit the program as segments - multiple .ts media files.
   *
   * SINGLE_FILE: Applies only if Mode field is VOD. Emit the program as a single .ts media file. The media manifest includes #EXT-X-BYTERANGE tags to index segments for playback. A typical use for this value is when sending the output to AWS Elemental MediaConvert, which can accept only a single media file. Playback while the channel is running is not guaranteed due to HTTP server caching.
   */
  TsFileMode?: HlsTsFileMode | string;

  /**
   * For use with encryptionType. The IV (Initialization Vector) is a 128-bit number used in conjunction with the key for encrypting blocks. If this setting is "followsSegmentNumber", it will cause the IV to change every segment (to match the segment number). If this is set to "explicit", you must enter a constantIv value.
   */
  IvSource?: HlsIvSource | string;

  /**
   * Optional. One value per output group.
   *
   * This field is required only if you are completing Base URL content A, and the downstream system has notified you that the media files for pipeline 1 of all outputs are in a location different from the media files for pipeline 0.
   */
  BaseUrlContent1?: string;

  /**
   * useInputSegmentation has been deprecated. The configured segment size is always used.
   */
  SegmentationMode?: HlsSegmentationMode | string;

  /**
   * The value specifies how the key is represented in the resource identified by the URI.  If parameter is absent, an implicit value of "identity" is used.  A reverse DNS string can also be given.
   */
  KeyFormat?: string;

  /**
   * Includes or excludes EXT-X-PROGRAM-DATE-TIME tag in .m3u8 manifest files. The value is calculated as follows: either the program date and time are initialized using the input timecode source, or the time is initialized using the input timecode source and the date is initialized using the timestampOffset.
   */
  ProgramDateTime?: HlsProgramDateTime | string;

  /**
   * A partial URI prefix that will be prepended to each output in the media .m3u8 file. Can be used if base manifest is delivered from a different URL than the main .m3u8 file.
   */
  BaseUrlManifest?: string;

  /**
   * Choose one or more ad marker types to pass SCTE35 signals through to this group of Apple HLS outputs.
   */
  AdMarkers?: (HlsAdMarkers | string)[];

  /**
   * A partial URI prefix that will be prepended to each output in the media .m3u8 file. Can be used if base manifest is delivered from a different URL than the main .m3u8 file.
   */
  BaseUrlContent?: string;

  /**
   * Provides an extra millisecond delta offset to fine tune the timestamps.
   */
  TimestampDeltaMilliseconds?: number;

  /**
   * Number of segments to write to a subdirectory before starting a new one. directoryStructure must be subdirectoryPerStream for this setting to have an effect.
   */
  SegmentsPerSubdirectory?: number;

  /**
   * Applies only to 608 Embedded output captions.
   * insert: Include CLOSED-CAPTIONS lines in the manifest. Specify at least one language in the CC1 Language Code field. One CLOSED-CAPTION line is added for each Language Code you specify. Make sure to specify the languages in the order in which they appear in the original source (if the source is embedded format) or the order of the caption selectors (if the source is other than embedded). Otherwise, languages in the manifest will not match up properly with the output captions.
   * none: Include CLOSED-CAPTIONS=NONE line in the manifest.
   * omit: Omit any CLOSED-CAPTIONS line from the manifest.
   */
  CaptionLanguageSetting?: HlsCaptionLanguageSetting | string;

  /**
   * DISABLED: Do not create an I-frame-only manifest, but do create the master and media manifests (according to the Output Selection field).
   *
   * STANDARD: Create an I-frame-only manifest for each output that contains video, as well as the other manifests (according to the Output Selection field). The I-frame manifest contains a #EXT-X-I-FRAMES-ONLY tag to indicate it is I-frame only, and one or more #EXT-X-BYTERANGE entries identifying the I-frame position. For example, #EXT-X-BYTERANGE:160364@1461888"
   */
  IFrameOnlyPlaylists?: IFrameOnlyPlaylistType | string;

  /**
   * For use with encryptionType. The IV (Initialization Vector) is a 128-bit number used in conjunction with the key for encrypting blocks. If set to "include", IV is listed in the manifest, otherwise the IV is not in the manifest.
   */
  IvInManifest?: HlsIvInManifest | string;

  /**
   * MANIFESTS_AND_SEGMENTS: Generates manifests (master manifest, if applicable, and media manifests) for this output group.
   *
   * VARIANT_MANIFESTS_AND_SEGMENTS: Generates media manifests for this output group, but not a master manifest.
   *
   * SEGMENTS_ONLY: Does not generate any manifests for this output group.
   */
  OutputSelection?: HlsOutputSelection | string;

  /**
   * Include or exclude RESOLUTION attribute for video in EXT-X-STREAM-INF tag of variant manifest.
   */
  StreamInfResolution?: HlsStreamInfResolution | string;

  /**
   * ENABLED: The master manifest (.m3u8 file) for each pipeline includes information about both pipelines: first its own media files, then the media files of the other pipeline. This feature allows playout device that support stale manifest detection to switch from one manifest to the other, when the current manifest seems to be stale. There are still two destinations and two master manifests, but both master manifests reference the media files from both pipelines.
   *
   * DISABLED: The master manifest (.m3u8 file) for each pipeline includes information about its own pipeline only.
   *
   * For an HLS output group with MediaPackage as the destination, the DISABLED behavior is always followed. MediaPackage regenerates the manifests it serves to players so a redundant manifest from MediaLive is irrelevant.
   */
  RedundantManifest?: HlsRedundantManifest | string;

  /**
   * Period of insertion of EXT-X-PROGRAM-DATE-TIME entry, in seconds.
   */
  ProgramDateTimePeriod?: number;

  /**
   * Indicates ID3 frame that has the timecode.
   */
  TimedMetadataId3Frame?: HlsTimedMetadataId3Frame | string;

  /**
   * When set to "disabled", sets the #EXT-X-ALLOW-CACHE:no tag in the manifest, which prevents clients from saving media segments for later replay.
   */
  ClientCache?: HlsClientCache | string;

  /**
   * When set, minimumSegmentLength is enforced by looking ahead and back within the specified range for a nearby avail and extending the segment size if needed.
   */
  MinSegmentLength?: number;

  /**
   * Optional. One value per output group.
   *
   * Complete this field only if you are completing Base URL manifest A, and the downstream system has notified you that the child manifest files for pipeline 1 of all outputs are in a location different from the child manifest files for pipeline 0.
   */
  BaseUrlManifest1?: string;

  /**
   * If "vod", all segments are indexed and kept permanently in the destination and manifest. If "live", only the number segments specified in keepSegments and indexNSegments are kept; newer segments replace older segments, which may prevent players from rewinding all the way to the beginning of the event.
   *
   * VOD mode uses HLS EXT-X-PLAYLIST-TYPE of EVENT while the channel is running, converting it to a "VOD" type manifest on completion of the stream.
   */
  Mode?: HlsMode | string;

  /**
   * Specification to use (RFC-6381 or the default RFC-4281) during m3u8 playlist generation.
   */
  CodecSpecification?: HlsCodecSpecification | string;

  /**
   * A directory or HTTP destination for the HLS segments, manifest files, and encryption keys (if enabled).
   */
  Destination: OutputLocationRef | undefined;

  /**
   * Parameter that control output group behavior on input loss.
   */
  InputLossAction?: InputLossActionForHlsOut | string;

  /**
   * Encrypts the segments with the given encryption scheme.  Exclude this parameter if no encryption is desired.
   */
  EncryptionType?: HlsEncryptionType | string;

  /**
   * For use with encryptionType. This is a 128-bit, 16-byte hex value represented by a 32-character text string. If ivSource is set to "explicit" then this parameter is required and is used as the IV for encryption.
   */
  ConstantIv?: string;

  /**
   * Either a single positive integer version value or a slash delimited list of version values (1/2/3).
   */
  KeyFormatVersions?: string;

  /**
   * State of HLS ID3 Segment Tagging
   */
  HlsId3SegmentTagging?: HlsId3SegmentTaggingState | string;

  /**
   * Parameters that control interactions with the CDN.
   */
  HlsCdnSettings?: HlsCdnSettings;
}

export namespace HlsGroupSettings {
  export const filterSensitiveLog = (obj: HlsGroupSettings): any => ({
    ...obj,
  });
}

export enum HlsH265PackagingType {
  HEV1 = "HEV1",
  HVC1 = "HVC1",
}

/**
 * Settings for the action to insert a user-defined ID3 tag in each HLS segment
 */
export interface HlsId3SegmentTaggingScheduleActionSettings {
  /**
   * ID3 tag to insert into each segment. Supports special keyword identifiers to substitute in segment-related values.\nSupported keyword identifiers: https://docs.aws.amazon.com/medialive/latest/ug/variable-data-identifiers.html
   */
  Tag: string | undefined;
}

export namespace HlsId3SegmentTaggingScheduleActionSettings {
  export const filterSensitiveLog = (obj: HlsId3SegmentTaggingScheduleActionSettings): any => ({
    ...obj,
  });
}

export enum HlsId3SegmentTaggingState {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * Hls Input Settings
 */
export interface HlsInputSettings {
  /**
   * The number of seconds between retries when an attempt to read a manifest or segment fails.
   */
  RetryInterval?: number;

  /**
   * When specified, reading of the HLS input will begin this many buffer segments from the end (most recently written segment).  When not specified, the HLS input will begin with the first segment specified in the m3u8.
   */
  BufferSegments?: number;

  /**
   * When specified the HLS stream with the m3u8 BANDWIDTH that most closely matches this value will be chosen, otherwise the highest bandwidth stream in the m3u8 will be chosen.  The bitrate is specified in bits per second, as in an HLS manifest.
   */
  Bandwidth?: number;

  /**
   * The number of consecutive times that attempts to read a manifest or segment must fail before the input is considered unavailable.
   */
  Retries?: number;
}

export namespace HlsInputSettings {
  export const filterSensitiveLog = (obj: HlsInputSettings): any => ({
    ...obj,
  });
}

export enum HlsIvInManifest {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

export enum HlsIvSource {
  EXPLICIT = "EXPLICIT",
  FOLLOWS_SEGMENT_NUMBER = "FOLLOWS_SEGMENT_NUMBER",
}

export enum HlsManifestCompression {
  GZIP = "GZIP",
  NONE = "NONE",
}

export enum HlsManifestDurationFormat {
  FLOATING_POINT = "FLOATING_POINT",
  INTEGER = "INTEGER",
}

/**
 * Hls Media Store Settings
 */
export interface HlsMediaStoreSettings {
  /**
   * Number of retry attempts that will be made before the Live Event is put into an error state.
   */
  NumRetries?: number;

  /**
   * If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart.
   */
  RestartDelay?: number;

  /**
   * When set to temporal, output files are stored in non-persistent memory for faster reading and writing.
   */
  MediaStoreStorageClass?: HlsMediaStoreStorageClass | string;

  /**
   * Number of seconds to wait before retrying connection to the CDN if the connection is lost.
   */
  ConnectionRetryInterval?: number;

  /**
   * Size in seconds of file cache for streaming outputs.
   */
  FilecacheDuration?: number;
}

export namespace HlsMediaStoreSettings {
  export const filterSensitiveLog = (obj: HlsMediaStoreSettings): any => ({
    ...obj,
  });
}

export enum HlsMediaStoreStorageClass {
  TEMPORAL = "TEMPORAL",
}

export enum HlsMode {
  LIVE = "LIVE",
  VOD = "VOD",
}

export enum HlsOutputSelection {
  MANIFESTS_AND_SEGMENTS = "MANIFESTS_AND_SEGMENTS",
  SEGMENTS_ONLY = "SEGMENTS_ONLY",
  VARIANT_MANIFESTS_AND_SEGMENTS = "VARIANT_MANIFESTS_AND_SEGMENTS",
}

/**
 * Hls Output Settings
 */
export interface HlsOutputSettings {
  /**
   * String concatenated to the end of the destination filename. Accepts \"Format Identifiers\":#formatIdentifierParameters.
   */
  NameModifier?: string;

  /**
   * Settings regarding the underlying stream. These settings are different for audio-only outputs.
   */
  HlsSettings: HlsSettings | undefined;

  /**
   * Only applicable when this output is referencing an H.265 video description.
   * Specifies whether MP4 segments should be packaged as HEV1 or HVC1.
   */
  H265PackagingType?: HlsH265PackagingType | string;

  /**
   * String concatenated to end of segment filenames.
   */
  SegmentModifier?: string;
}

export namespace HlsOutputSettings {
  export const filterSensitiveLog = (obj: HlsOutputSettings): any => ({
    ...obj,
  });
}

export enum HlsProgramDateTime {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

export enum HlsRedundantManifest {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum HlsSegmentationMode {
  USE_INPUT_SEGMENTATION = "USE_INPUT_SEGMENTATION",
  USE_SEGMENT_DURATION = "USE_SEGMENT_DURATION",
}

/**
 * Hls Settings
 */
export interface HlsSettings {
  /**
   * Standard Hls Settings
   */
  StandardHlsSettings?: StandardHlsSettings;

  /**
   * Fmp4 Hls Settings
   */
  Fmp4HlsSettings?: Fmp4HlsSettings;

  /**
   * Audio Only Hls Settings
   */
  AudioOnlyHlsSettings?: AudioOnlyHlsSettings;
}

export namespace HlsSettings {
  export const filterSensitiveLog = (obj: HlsSettings): any => ({
    ...obj,
  });
}

export enum HlsStreamInfResolution {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

export enum HlsTimedMetadataId3Frame {
  NONE = "NONE",
  PRIV = "PRIV",
  TDRL = "TDRL",
}

/**
 * Settings for the action to emit HLS metadata
 */
export interface HlsTimedMetadataScheduleActionSettings {
  /**
   * Base64 string formatted according to the ID3 specification: http://id3.org/id3v2.4.0-structure
   */
  Id3: string | undefined;
}

export namespace HlsTimedMetadataScheduleActionSettings {
  export const filterSensitiveLog = (obj: HlsTimedMetadataScheduleActionSettings): any => ({
    ...obj,
  });
}

export enum HlsTsFileMode {
  SEGMENTED_FILES = "SEGMENTED_FILES",
  SINGLE_FILE = "SINGLE_FILE",
}

export enum HlsWebdavHttpTransferMode {
  CHUNKED = "CHUNKED",
  NON_CHUNKED = "NON_CHUNKED",
}

/**
 * Hls Webdav Settings
 */
export interface HlsWebdavSettings {
  /**
   * Specify whether or not to use chunked transfer encoding to WebDAV.
   */
  HttpTransferMode?: HlsWebdavHttpTransferMode | string;

  /**
   * Number of retry attempts that will be made before the Live Event is put into an error state.
   */
  NumRetries?: number;

  /**
   * Size in seconds of file cache for streaming outputs.
   */
  FilecacheDuration?: number;

  /**
   * If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart.
   */
  RestartDelay?: number;

  /**
   * Number of seconds to wait before retrying connection to the CDN if the connection is lost.
   */
  ConnectionRetryInterval?: number;
}

export namespace HlsWebdavSettings {
  export const filterSensitiveLog = (obj: HlsWebdavSettings): any => ({
    ...obj,
  });
}

export enum IFrameOnlyPlaylistType {
  DISABLED = "DISABLED",
  STANDARD = "STANDARD",
}

/**
 * Settings to configure an action so that it occurs as soon as possible.
 */
export interface ImmediateModeScheduleActionStartSettings {}

export namespace ImmediateModeScheduleActionStartSettings {
  export const filterSensitiveLog = (obj: ImmediateModeScheduleActionStartSettings): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for Input
 */
export interface Input {
  /**
   * A list of IDs for all the Input Security Groups attached to the input.
   */
  SecurityGroups?: string[];

  /**
   * The Amazon Resource Name (ARN) of the role this input assumes during and after creation.
   */
  RoleArn?: string;

  /**
   * STANDARD - MediaLive expects two sources to be connected to this input. If the channel is also STANDARD, both sources will be ingested. If the channel is SINGLE_PIPELINE, only the first source will be ingested; the second source will always be ignored, even if the first source fails.
   * SINGLE_PIPELINE - You can connect only one source to this input. If the ChannelClass is also  SINGLE_PIPELINE, this value is valid. If the ChannelClass is STANDARD, this value is not valid because the channel requires two sources in the input.
   */
  InputClass?: InputClass | string;

  /**
   * The Unique ARN of the input (generated, immutable).
   */
  Arn?: string;

  /**
   * The generated ID of the input (unique for user account, immutable).
   */
  Id?: string;

  /**
   * A list of the sources of the input (PULL-type).
   */
  Sources?: InputSource[];

  /**
   * A list of the destinations of the input (PUSH-type).
   */
  Destinations?: InputDestination[];

  /**
   * The user-assigned name (This is a mutable value).
   */
  Name?: string;

  /**
   * Placeholder documentation for InputState
   */
  State?: InputState | string;

  /**
   * A list of MediaConnect Flows for this input.
   */
  MediaConnectFlows?: MediaConnectFlow[];

  /**
   * Certain pull input sources can be dynamic, meaning that they can have their URL's dynamically changes
   * during input switch actions. Presently, this functionality only works with MP4_FILE inputs.
   */
  InputSourceType?: InputSourceType | string;

  /**
   * Placeholder documentation for InputType
   */
  Type?: InputType | string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * A list of channel IDs that that input is attached to (currently an input can only be attached to one channel).
   */
  AttachedChannels?: string[];

  /**
   * Settings for the input devices.
   */
  InputDevices?: InputDeviceSettings[];
}

export namespace Input {
  export const filterSensitiveLog = (obj: Input): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for InputAttachment
 */
export interface InputAttachment {
  /**
   * User-specified name for the attachment. This is required if the user wants to use this input in an input switch action.
   */
  InputAttachmentName?: string;

  /**
   * The ID of the input
   */
  InputId?: string;

  /**
   * User-specified settings for defining what the conditions are for declaring the input unhealthy and failing over to a different input.
   */
  AutomaticInputFailoverSettings?: AutomaticInputFailoverSettings;

  /**
   * Settings of an input (caption selector, etc.)
   */
  InputSettings?: InputSettings;
}

export namespace InputAttachment {
  export const filterSensitiveLog = (obj: InputAttachment): any => ({
    ...obj,
  });
}

/**
 * Input Channel Level
 */
export interface InputChannelLevel {
  /**
   * The index of the input channel used as a source.
   */
  InputChannel: number | undefined;

  /**
   * Remixing value. Units are in dB and acceptable values are within the range from -60 (mute) and 6 dB.
   */
  Gain: number | undefined;
}

export namespace InputChannelLevel {
  export const filterSensitiveLog = (obj: InputChannelLevel): any => ({
    ...obj,
  });
}

export enum InputClass {
  SINGLE_PIPELINE = "SINGLE_PIPELINE",
  STANDARD = "STANDARD",
}

/**
 * Settings to let you create a clip of the file input, in order to set up the input to ingest only a portion of the file.
 */
export interface InputClippingSettings {
  /**
   * The source of the timecodes in the source being clipped.
   */
  InputTimecodeSource: InputTimecodeSource | string | undefined;

  /**
   * Settings to identify the end of the clip.
   */
  StopTimecode?: StopTimecode;

  /**
   * Settings to identify the start of the clip.
   */
  StartTimecode?: StartTimecode;
}

export namespace InputClippingSettings {
  export const filterSensitiveLog = (obj: InputClippingSettings): any => ({
    ...obj,
  });
}

export enum InputCodec {
  AVC = "AVC",
  HEVC = "HEVC",
  MPEG2 = "MPEG2",
}

export enum InputDeblockFilter {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum InputDenoiseFilter {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * The settings for a PUSH type input.
 */
export interface InputDestination {
  /**
   * The port number for the input.
   */
  Port?: string;

  /**
   * The properties for a VPC type input destination.
   */
  Vpc?: InputDestinationVpc;

  /**
   * The system-generated static IP address of endpoint.
   * It remains fixed for the lifetime of the input.
   */
  Ip?: string;

  /**
   * This represents the endpoint that the customer stream will be
   * pushed to.
   */
  Url?: string;
}

export namespace InputDestination {
  export const filterSensitiveLog = (obj: InputDestination): any => ({
    ...obj,
  });
}

/**
 * Endpoint settings for a PUSH type input.
 */
export interface InputDestinationRequest {
  /**
   * A unique name for the location the RTMP stream is being pushed
   * to.
   */
  StreamName?: string;
}

export namespace InputDestinationRequest {
  export const filterSensitiveLog = (obj: InputDestinationRequest): any => ({
    ...obj,
  });
}

/**
 * The properties for a VPC type input destination.
 */
export interface InputDestinationVpc {
  /**
   * The network interface ID of the Input destination in the VPC.
   */
  NetworkInterfaceId?: string;

  /**
   * The availability zone of the Input destination.
   */
  AvailabilityZone?: string;
}

export namespace InputDestinationVpc {
  export const filterSensitiveLog = (obj: InputDestinationVpc): any => ({
    ...obj,
  });
}

export enum InputDeviceActiveInput {
  HDMI = "HDMI",
  SDI = "SDI",
}

/**
 * Configurable settings for the input device.
 */
export interface InputDeviceConfigurableSettings {
  /**
   * The maximum bitrate in bits per second. Set a value here to throttle the bitrate of the source video.
   */
  MaxBitrate?: number;

  /**
   * The input source that you want to use. If the device has a source connected to only one of its input ports, or if you don't care which source the device sends, specify Auto. If the device has sources connected to both its input ports, and you want to use a specific source, specify the source.
   */
  ConfiguredInput?: InputDeviceConfiguredInput | string;
}

export namespace InputDeviceConfigurableSettings {
  export const filterSensitiveLog = (obj: InputDeviceConfigurableSettings): any => ({
    ...obj,
  });
}

export enum InputDeviceConfiguredInput {
  AUTO = "AUTO",
  HDMI = "HDMI",
  SDI = "SDI",
}

export enum InputDeviceConnectionState {
  CONNECTED = "CONNECTED",
  DISCONNECTED = "DISCONNECTED",
}

/**
 * Settings that describe the active source from the input device, and the video characteristics of that source.
 */
export interface InputDeviceHdSettings {
  /**
   * The width of the video source, in pixels.
   */
  Width?: number;

  /**
   * The height of the video source, in pixels.
   */
  Height?: number;

  /**
   * If you specified Auto as the configured input, specifies which of the sources is currently active (SDI or HDMI).
   */
  ActiveInput?: InputDeviceActiveInput | string;

  /**
   * The frame rate of the video source.
   */
  Framerate?: number;

  /**
   * The state of the input device.
   */
  DeviceState?: InputDeviceState | string;

  /**
   * The current maximum bitrate for ingesting this source, in bits per second. You can specify this maximum.
   */
  MaxBitrate?: number;

  /**
   * The source at the input device that is currently active. You can specify this source.
   */
  ConfiguredInput?: InputDeviceConfiguredInput | string;

  /**
   * The scan type of the video source.
   */
  ScanType?: InputDeviceScanType | string;
}

export namespace InputDeviceHdSettings {
  export const filterSensitiveLog = (obj: InputDeviceHdSettings): any => ({
    ...obj,
  });
}

export enum InputDeviceIpScheme {
  DHCP = "DHCP",
  STATIC = "STATIC",
}

/**
 * The network settings for the input device.
 */
export interface InputDeviceNetworkSettings {
  /**
   * The subnet mask of the input device.
   */
  SubnetMask?: string;

  /**
   * The network gateway IP address.
   */
  Gateway?: string;

  /**
   * The DNS addresses of the input device.
   */
  DnsAddresses?: string[];

  /**
   * Specifies whether the input device has been configured (outside of MediaLive) to use a dynamic IP address assignment (DHCP) or a static IP address.
   */
  IpScheme?: InputDeviceIpScheme | string;

  /**
   * The IP address of the input device.
   */
  IpAddress?: string;
}

export namespace InputDeviceNetworkSettings {
  export const filterSensitiveLog = (obj: InputDeviceNetworkSettings): any => ({
    ...obj,
  });
}

/**
 * Settings for an input device.
 */
export interface InputDeviceRequest {
  /**
   * The unique ID for the device.
   */
  Id?: string;
}

export namespace InputDeviceRequest {
  export const filterSensitiveLog = (obj: InputDeviceRequest): any => ({
    ...obj,
  });
}

export enum InputDeviceScanType {
  INTERLACED = "INTERLACED",
  PROGRESSIVE = "PROGRESSIVE",
}

/**
 * Settings for an input device.
 */
export interface InputDeviceSettings {
  /**
   * The unique ID for the device.
   */
  Id?: string;
}

export namespace InputDeviceSettings {
  export const filterSensitiveLog = (obj: InputDeviceSettings): any => ({
    ...obj,
  });
}

export enum InputDeviceState {
  IDLE = "IDLE",
  STREAMING = "STREAMING",
}

/**
 * Details of the input device.
 */
export interface InputDeviceSummary {
  /**
   * The status of the action to synchronize the device configuration. If you change the configuration of the input device (for example, the maximum bitrate), MediaLive sends the new data to the device. The device might not update itself immediately. SYNCED means the device has updated its configuration. SYNCING means that it has not updated its configuration.
   */
  DeviceSettingsSyncState?: DeviceSettingsSyncState | string;

  /**
   * A name that you specify for the input device.
   */
  Name?: string;

  /**
   * The unique ID of the input device.
   */
  Id?: string;

  /**
   * The network MAC address of the input device.
   */
  MacAddress?: string;

  /**
   * Settings that describe an input device that is type HD.
   */
  HdDeviceSettings?: InputDeviceHdSettings;

  /**
   * The state of the connection between the input device and AWS.
   */
  ConnectionState?: InputDeviceConnectionState | string;

  /**
   * The unique ARN of the input device.
   */
  Arn?: string;

  /**
   * Network settings for the input device.
   */
  NetworkSettings?: InputDeviceNetworkSettings;

  /**
   * The type of the input device.
   */
  Type?: InputDeviceType | string;

  /**
   * The unique serial number of the input device.
   */
  SerialNumber?: string;
}

export namespace InputDeviceSummary {
  export const filterSensitiveLog = (obj: InputDeviceSummary): any => ({
    ...obj,
  });
}

export enum InputDeviceType {
  HD = "HD",
}

export enum InputFilter {
  AUTO = "AUTO",
  DISABLED = "DISABLED",
  FORCED = "FORCED",
}

/**
 * Input Location
 */
export interface InputLocation {
  /**
   * Uniform Resource Identifier - This should be a path to a file accessible to the Live system (eg. a http:// URI) depending on the output type. For example, a RTMP destination should have a uri simliar to: "rtmp://fmsserver/live".
   */
  Uri: string | undefined;

  /**
   * key used to extract the password from EC2 Parameter store
   */
  PasswordParam?: string;

  /**
   * Documentation update needed
   */
  Username?: string;
}

export namespace InputLocation {
  export const filterSensitiveLog = (obj: InputLocation): any => ({
    ...obj,
  });
}

export enum InputLossActionForHlsOut {
  EMIT_OUTPUT = "EMIT_OUTPUT",
  PAUSE_OUTPUT = "PAUSE_OUTPUT",
}

export enum InputLossActionForMsSmoothOut {
  EMIT_OUTPUT = "EMIT_OUTPUT",
  PAUSE_OUTPUT = "PAUSE_OUTPUT",
}

export enum InputLossActionForRtmpOut {
  EMIT_OUTPUT = "EMIT_OUTPUT",
  PAUSE_OUTPUT = "PAUSE_OUTPUT",
}

export enum InputLossActionForUdpOut {
  DROP_PROGRAM = "DROP_PROGRAM",
  DROP_TS = "DROP_TS",
  EMIT_PROGRAM = "EMIT_PROGRAM",
}

/**
 * Input Loss Behavior
 */
export interface InputLossBehavior {
  /**
   * Documentation update needed
   */
  RepeatFrameMsec?: number;

  /**
   * Documentation update needed
   */
  BlackFrameMsec?: number;

  /**
   * Indicates whether to substitute a solid color or a slate into the output after input loss exceeds blackFrameMsec.
   */
  InputLossImageType?: InputLossImageType | string;

  /**
   * When input loss image type is "color" this field specifies the color to use. Value: 6 hex characters representing the values of RGB.
   */
  InputLossImageColor?: string;

  /**
   * When input loss image type is "slate" these fields specify the parameters for accessing the slate.
   */
  InputLossImageSlate?: InputLocation;
}

export namespace InputLossBehavior {
  export const filterSensitiveLog = (obj: InputLossBehavior): any => ({
    ...obj,
  });
}

export enum InputLossImageType {
  COLOR = "COLOR",
  SLATE = "SLATE",
}

export enum InputMaximumBitrate {
  MAX_10_MBPS = "MAX_10_MBPS",
  MAX_20_MBPS = "MAX_20_MBPS",
  MAX_50_MBPS = "MAX_50_MBPS",
}

export enum InputPreference {
  EQUAL_INPUT_PREFERENCE = "EQUAL_INPUT_PREFERENCE",
  PRIMARY_INPUT_PREFERRED = "PRIMARY_INPUT_PREFERRED",
}

/**
 * Action to prepare an input for a future immediate input switch.
 */
export interface InputPrepareScheduleActionSettings {
  /**
   * Settings to let you create a clip of the file input, in order to set up the input to ingest only a portion of the file.
   */
  InputClippingSettings?: InputClippingSettings;

  /**
   * The value for the variable portion of the URL for the dynamic input, for this instance of the input. Each time you use the same dynamic input in an input switch action, you can provide a different value, in order to connect the input to a different content source.
   */
  UrlPath?: string[];

  /**
   * The name of the input attachment that should be prepared by this action. If no name is provided, the action will stop the most recent prepare (if any) when activated.
   */
  InputAttachmentNameReference?: string;
}

export namespace InputPrepareScheduleActionSettings {
  export const filterSensitiveLog = (obj: InputPrepareScheduleActionSettings): any => ({
    ...obj,
  });
}

export enum InputResolution {
  HD = "HD",
  SD = "SD",
  UHD = "UHD",
}

/**
 * An Input Security Group
 */
export interface InputSecurityGroup {
  /**
   * The Id of the Input Security Group
   */
  Id?: string;

  /**
   * Whitelist rules and their sync status
   */
  WhitelistRules?: InputWhitelistRule[];

  /**
   * Unique ARN of Input Security Group
   */
  Arn?: string;

  /**
   * The current state of the Input Security Group.
   */
  State?: InputSecurityGroupState | string;

  /**
   * The list of inputs currently using this Input Security Group.
   */
  Inputs?: string[];

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };
}

export namespace InputSecurityGroup {
  export const filterSensitiveLog = (obj: InputSecurityGroup): any => ({
    ...obj,
  });
}

export enum InputSecurityGroupState {
  DELETED = "DELETED",
  IDLE = "IDLE",
  IN_USE = "IN_USE",
  UPDATING = "UPDATING",
}

/**
 * Live Event input parameters. There can be multiple inputs in a single Live Event.
 */
export interface InputSettings {
  /**
   * Turns on the filter for this input. MPEG-2 inputs have the deblocking filter enabled by default.
   * 1) auto - filtering will be applied depending on input type/quality
   * 2) disabled - no filtering will be applied to the input
   * 3) forced - filtering will be applied regardless of input type
   */
  InputFilter?: InputFilter | string;

  /**
   * Adjusts the magnitude of filtering from 1 (minimal) to 5 (strongest).
   */
  FilterStrength?: number;

  /**
   * Specifies whether to extract applicable ancillary data from a SMPTE-2038 source in this input. Applicable data types are captions, timecode, AFD, and SCTE-104 messages.
   * - PREFER: Extract from SMPTE-2038 if present in this input, otherwise extract from another source (if any).
   * - IGNORE: Never extract any ancillary data from SMPTE-2038.
   */
  Smpte2038DataPreference?: Smpte2038DataPreference | string;

  /**
   * Used to select the caption input to use for inputs that have multiple available.
   */
  CaptionSelectors?: CaptionSelector[];

  /**
   * Used to select the audio stream to decode for inputs that have multiple available.
   */
  AudioSelectors?: AudioSelector[];

  /**
   * Informs which video elementary stream to decode for input types that have multiple available.
   */
  VideoSelector?: VideoSelector;

  /**
   * Loop input if it is a file. This allows a file input to be streamed indefinitely.
   */
  SourceEndBehavior?: InputSourceEndBehavior | string;

  /**
   * Enable or disable the deblock filter when filtering.
   */
  DeblockFilter?: InputDeblockFilter | string;

  /**
   * Input settings.
   */
  NetworkInputSettings?: NetworkInputSettings;

  /**
   * Enable or disable the denoise filter when filtering.
   */
  DenoiseFilter?: InputDenoiseFilter | string;
}

export namespace InputSettings {
  export const filterSensitiveLog = (obj: InputSettings): any => ({
    ...obj,
  });
}

/**
 * The settings for a PULL type input.
 */
export interface InputSource {
  /**
   * This represents the customer's source URL where stream is
   * pulled from.
   */
  Url?: string;

  /**
   * The username for the input source.
   */
  Username?: string;

  /**
   * The key used to extract the password from EC2 Parameter store.
   */
  PasswordParam?: string;
}

export namespace InputSource {
  export const filterSensitiveLog = (obj: InputSource): any => ({
    ...obj,
  });
}

export enum InputSourceEndBehavior {
  CONTINUE = "CONTINUE",
  LOOP = "LOOP",
}

/**
 * Settings for for a PULL type input.
 */
export interface InputSourceRequest {
  /**
   * This represents the customer's source URL where stream is
   * pulled from.
   */
  Url?: string;

  /**
   * The username for the input source.
   */
  Username?: string;

  /**
   * The key used to extract the password from EC2 Parameter store.
   */
  PasswordParam?: string;
}

export namespace InputSourceRequest {
  export const filterSensitiveLog = (obj: InputSourceRequest): any => ({
    ...obj,
  });
}

export enum InputSourceType {
  DYNAMIC = "DYNAMIC",
  STATIC = "STATIC",
}

/**
 * Placeholder documentation for InputSpecification
 */
export interface InputSpecification {
  /**
   * Input codec
   */
  Codec?: InputCodec | string;

  /**
   * Input resolution, categorized coarsely
   */
  Resolution?: InputResolution | string;

  /**
   * Maximum input bitrate, categorized coarsely
   */
  MaximumBitrate?: InputMaximumBitrate | string;
}

export namespace InputSpecification {
  export const filterSensitiveLog = (obj: InputSpecification): any => ({
    ...obj,
  });
}

export enum InputState {
  ATTACHED = "ATTACHED",
  CREATING = "CREATING",
  DELETED = "DELETED",
  DELETING = "DELETING",
  DETACHED = "DETACHED",
}

/**
 * Settings for the "switch input" action: to switch from ingesting one input to ingesting another input.
 */
export interface InputSwitchScheduleActionSettings {
  /**
   * The name of the input attachment (not the name of the input!) to switch to. The name is specified in the channel configuration.
   */
  InputAttachmentNameReference: string | undefined;

  /**
   * The value for the variable portion of the URL for the dynamic input, for this instance of the input. Each time you use the same dynamic input in an input switch action, you can provide a different value, in order to connect the input to a different content source.
   */
  UrlPath?: string[];

  /**
   * Settings to let you create a clip of the file input, in order to set up the input to ingest only a portion of the file.
   */
  InputClippingSettings?: InputClippingSettings;
}

export namespace InputSwitchScheduleActionSettings {
  export const filterSensitiveLog = (obj: InputSwitchScheduleActionSettings): any => ({
    ...obj,
  });
}

export enum InputTimecodeSource {
  EMBEDDED = "EMBEDDED",
  ZEROBASED = "ZEROBASED",
}

export enum InputType {
  INPUT_DEVICE = "INPUT_DEVICE",
  MEDIACONNECT = "MEDIACONNECT",
  MP4_FILE = "MP4_FILE",
  RTMP_PULL = "RTMP_PULL",
  RTMP_PUSH = "RTMP_PUSH",
  RTP_PUSH = "RTP_PUSH",
  UDP_PUSH = "UDP_PUSH",
  URL_PULL = "URL_PULL",
}

/**
 * Settings for a private VPC Input.
 * When this property is specified, the input destination addresses will be created in a VPC rather than with public Internet addresses.
 * This property requires setting the roleArn property on Input creation.
 * Not compatible with the inputSecurityGroups property.
 */
export interface InputVpcRequest {
  /**
   * A list of 2 VPC subnet IDs from the same VPC.
   * Subnet IDs must be mapped to two unique availability zones (AZ).
   */
  SubnetIds: string[] | undefined;

  /**
   * A list of up to 5 EC2 VPC security group IDs to attach to the Input VPC network interfaces.
   * Requires subnetIds. If none are specified then the VPC default security group will be used.
   */
  SecurityGroupIds?: string[];
}

export namespace InputVpcRequest {
  export const filterSensitiveLog = (obj: InputVpcRequest): any => ({
    ...obj,
  });
}

/**
 * Whitelist rule
 */
export interface InputWhitelistRule {
  /**
   * The IPv4 CIDR that's whitelisted.
   */
  Cidr?: string;
}

export namespace InputWhitelistRule {
  export const filterSensitiveLog = (obj: InputWhitelistRule): any => ({
    ...obj,
  });
}

/**
 * An IPv4 CIDR to whitelist.
 */
export interface InputWhitelistRuleCidr {
  /**
   * The IPv4 CIDR to whitelist.
   */
  Cidr?: string;
}

export namespace InputWhitelistRuleCidr {
  export const filterSensitiveLog = (obj: InputWhitelistRuleCidr): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for InternalServerErrorException
 */
export interface InternalServerErrorException extends __SmithyException, $MetadataBearer {
  name: "InternalServerErrorException";
  $fault: "server";
  /**
   * Placeholder documentation for __string
   */
  Message?: string;
}

export namespace InternalServerErrorException {
  export const filterSensitiveLog = (obj: InternalServerErrorException): any => ({
    ...obj,
  });
}

/**
 * Key Provider Settings
 */
export interface KeyProviderSettings {
  /**
   * Static Key Settings
   */
  StaticKeySettings?: StaticKeySettings;
}

export namespace KeyProviderSettings {
  export const filterSensitiveLog = (obj: KeyProviderSettings): any => ({
    ...obj,
  });
}

export enum LastFrameClippingBehavior {
  EXCLUDE_LAST_FRAME = "EXCLUDE_LAST_FRAME",
  INCLUDE_LAST_FRAME = "INCLUDE_LAST_FRAME",
}

/**
 * Placeholder documentation for ListChannelsRequest
 */
export interface ListChannelsRequest {
  /**
   * Placeholder documentation for MaxResults
   */
  MaxResults?: number;

  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;
}

export namespace ListChannelsRequest {
  export const filterSensitiveLog = (obj: ListChannelsRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListChannelsResponse
 */
export interface ListChannelsResponse {
  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;

  /**
   * Placeholder documentation for __listOfChannelSummary
   */
  Channels?: ChannelSummary[];
}

export namespace ListChannelsResponse {
  export const filterSensitiveLog = (obj: ListChannelsResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListInputDevicesRequest
 */
export interface ListInputDevicesRequest {
  /**
   * Placeholder documentation for MaxResults
   */
  MaxResults?: number;

  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;
}

export namespace ListInputDevicesRequest {
  export const filterSensitiveLog = (obj: ListInputDevicesRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListInputDevicesResponse
 */
export interface ListInputDevicesResponse {
  /**
   * The list of input devices.
   */
  InputDevices?: InputDeviceSummary[];

  /**
   * A token to get additional list results.
   */
  NextToken?: string;
}

export namespace ListInputDevicesResponse {
  export const filterSensitiveLog = (obj: ListInputDevicesResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListInputSecurityGroupsRequest
 */
export interface ListInputSecurityGroupsRequest {
  /**
   * Placeholder documentation for MaxResults
   */
  MaxResults?: number;

  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;
}

export namespace ListInputSecurityGroupsRequest {
  export const filterSensitiveLog = (obj: ListInputSecurityGroupsRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListInputSecurityGroupsResponse
 */
export interface ListInputSecurityGroupsResponse {
  /**
   * List of input security groups
   */
  InputSecurityGroups?: InputSecurityGroup[];

  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;
}

export namespace ListInputSecurityGroupsResponse {
  export const filterSensitiveLog = (obj: ListInputSecurityGroupsResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListInputsRequest
 */
export interface ListInputsRequest {
  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;

  /**
   * Placeholder documentation for MaxResults
   */
  MaxResults?: number;
}

export namespace ListInputsRequest {
  export const filterSensitiveLog = (obj: ListInputsRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListInputsResponse
 */
export interface ListInputsResponse {
  /**
   * Placeholder documentation for __listOfInput
   */
  Inputs?: Input[];

  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;
}

export namespace ListInputsResponse {
  export const filterSensitiveLog = (obj: ListInputsResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListMultiplexesRequest
 */
export interface ListMultiplexesRequest {
  /**
   * The maximum number of items to return.
   */
  MaxResults?: number;

  /**
   * The token to retrieve the next page of results.
   */
  NextToken?: string;
}

export namespace ListMultiplexesRequest {
  export const filterSensitiveLog = (obj: ListMultiplexesRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListMultiplexesResponse
 */
export interface ListMultiplexesResponse {
  /**
   * List of multiplexes.
   */
  Multiplexes?: MultiplexSummary[];

  /**
   * Token for the next ListMultiplexes request.
   */
  NextToken?: string;
}

export namespace ListMultiplexesResponse {
  export const filterSensitiveLog = (obj: ListMultiplexesResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListMultiplexProgramsRequest
 */
export interface ListMultiplexProgramsRequest {
  /**
   * The ID of the multiplex that the programs belong to.
   */
  MultiplexId: string | undefined;

  /**
   * The token to retrieve the next page of results.
   */
  NextToken?: string;

  /**
   * The maximum number of items to return.
   */
  MaxResults?: number;
}

export namespace ListMultiplexProgramsRequest {
  export const filterSensitiveLog = (obj: ListMultiplexProgramsRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListMultiplexProgramsResponse
 */
export interface ListMultiplexProgramsResponse {
  /**
   * List of multiplex programs.
   */
  MultiplexPrograms?: MultiplexProgramSummary[];

  /**
   * Token for the next ListMultiplexProgram request.
   */
  NextToken?: string;
}

export namespace ListMultiplexProgramsResponse {
  export const filterSensitiveLog = (obj: ListMultiplexProgramsResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListOfferingsRequest
 */
export interface ListOfferingsRequest {
  /**
   * Filter by codec, 'AVC', 'HEVC', 'MPEG2', or 'AUDIO'
   */
  Codec?: string;

  /**
   * Filter by channel class, 'STANDARD' or 'SINGLE_PIPELINE'
   */
  ChannelClass?: string;

  /**
   * Filter by offering duration, e.g. '12'
   */
  Duration?: string;

  /**
   * Filter by resolution, 'SD', 'HD', 'FHD', or 'UHD'
   */
  Resolution?: string;

  /**
   * Filter by framerate, 'MAX_30_FPS' or 'MAX_60_FPS'
   */
  MaximumFramerate?: string;

  /**
   * Filter to offerings that match the configuration of an existing channel, e.g. '2345678' (a channel ID)
   */
  ChannelConfiguration?: string;

  /**
   * Filter by resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL'
   */
  ResourceType?: string;

  /**
   * Filter by video quality, 'STANDARD', 'ENHANCED', or 'PREMIUM'
   */
  VideoQuality?: string;

  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;

  /**
   * Placeholder documentation for MaxResults
   */
  MaxResults?: number;

  /**
   * Filter by bitrate, 'MAX_10_MBPS', 'MAX_20_MBPS', or 'MAX_50_MBPS'
   */
  MaximumBitrate?: string;

  /**
   * Filter by special feature, 'ADVANCED_AUDIO' or 'AUDIO_NORMALIZATION'
   */
  SpecialFeature?: string;
}

export namespace ListOfferingsRequest {
  export const filterSensitiveLog = (obj: ListOfferingsRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListOfferingsResponse
 */
export interface ListOfferingsResponse {
  /**
   * List of offerings
   */
  Offerings?: Offering[];

  /**
   * Token to retrieve the next page of results
   */
  NextToken?: string;
}

export namespace ListOfferingsResponse {
  export const filterSensitiveLog = (obj: ListOfferingsResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListReservationsRequest
 */
export interface ListReservationsRequest {
  /**
   * Filter by resolution, 'SD', 'HD', 'FHD', or 'UHD'
   */
  Resolution?: string;

  /**
   * Filter by resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL'
   */
  ResourceType?: string;

  /**
   * Filter by framerate, 'MAX_30_FPS' or 'MAX_60_FPS'
   */
  MaximumFramerate?: string;

  /**
   * Placeholder documentation for MaxResults
   */
  MaxResults?: number;

  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;

  /**
   * Filter by bitrate, 'MAX_10_MBPS', 'MAX_20_MBPS', or 'MAX_50_MBPS'
   */
  MaximumBitrate?: string;

  /**
   * Filter by special feature, 'ADVANCED_AUDIO' or 'AUDIO_NORMALIZATION'
   */
  SpecialFeature?: string;

  /**
   * Filter by codec, 'AVC', 'HEVC', 'MPEG2', or 'AUDIO'
   */
  Codec?: string;

  /**
   * Filter by video quality, 'STANDARD', 'ENHANCED', or 'PREMIUM'
   */
  VideoQuality?: string;

  /**
   * Filter by channel class, 'STANDARD' or 'SINGLE_PIPELINE'
   */
  ChannelClass?: string;
}

export namespace ListReservationsRequest {
  export const filterSensitiveLog = (obj: ListReservationsRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListReservationsResponse
 */
export interface ListReservationsResponse {
  /**
   * List of reservations
   */
  Reservations?: Reservation[];

  /**
   * Token to retrieve the next page of results
   */
  NextToken?: string;
}

export namespace ListReservationsResponse {
  export const filterSensitiveLog = (obj: ListReservationsResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * Placeholder documentation for __string
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * Placeholder documentation for Tags
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export enum LogLevel {
  DEBUG = "DEBUG",
  DISABLED = "DISABLED",
  ERROR = "ERROR",
  INFO = "INFO",
  WARNING = "WARNING",
}

export enum M2tsAbsentInputAudioBehavior {
  DROP = "DROP",
  ENCODE_SILENCE = "ENCODE_SILENCE",
}

export enum M2tsArib {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum M2tsAribCaptionsPidControl {
  AUTO = "AUTO",
  USE_CONFIGURED = "USE_CONFIGURED",
}

export enum M2tsAudioBufferModel {
  ATSC = "ATSC",
  DVB = "DVB",
}

export enum M2tsAudioInterval {
  VIDEO_AND_FIXED_INTERVALS = "VIDEO_AND_FIXED_INTERVALS",
  VIDEO_INTERVAL = "VIDEO_INTERVAL",
}

export enum M2tsAudioStreamType {
  ATSC = "ATSC",
  DVB = "DVB",
}

export enum M2tsBufferModel {
  MULTIPLEX = "MULTIPLEX",
  NONE = "NONE",
}

export enum M2tsCcDescriptor {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum M2tsEbifControl {
  NONE = "NONE",
  PASSTHROUGH = "PASSTHROUGH",
}

export enum M2tsEbpPlacement {
  VIDEO_AND_AUDIO_PIDS = "VIDEO_AND_AUDIO_PIDS",
  VIDEO_PID = "VIDEO_PID",
}

export enum M2tsEsRateInPes {
  EXCLUDE = "EXCLUDE",
  INCLUDE = "INCLUDE",
}

export enum M2tsKlv {
  NONE = "NONE",
  PASSTHROUGH = "PASSTHROUGH",
}

export enum M2tsNielsenId3Behavior {
  NO_PASSTHROUGH = "NO_PASSTHROUGH",
  PASSTHROUGH = "PASSTHROUGH",
}

export enum M2tsPcrControl {
  CONFIGURED_PCR_PERIOD = "CONFIGURED_PCR_PERIOD",
  PCR_EVERY_PES_PACKET = "PCR_EVERY_PES_PACKET",
}

export enum M2tsRateMode {
  CBR = "CBR",
  VBR = "VBR",
}

export enum M2tsScte35Control {
  NONE = "NONE",
  PASSTHROUGH = "PASSTHROUGH",
}

export enum M2tsSegmentationMarkers {
  EBP = "EBP",
  EBP_LEGACY = "EBP_LEGACY",
  NONE = "NONE",
  PSI_SEGSTART = "PSI_SEGSTART",
  RAI_ADAPT = "RAI_ADAPT",
  RAI_SEGSTART = "RAI_SEGSTART",
}

export enum M2tsSegmentationStyle {
  MAINTAIN_CADENCE = "MAINTAIN_CADENCE",
  RESET_CADENCE = "RESET_CADENCE",
}

/**
 * M2ts Settings
 */
export interface M2tsSettings {
  /**
   * Packet Identifier (PID) of the SCTE-35 stream in the transport stream. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   */
  Scte35Pid?: string;

  /**
   * Packet Identifier (PID) for input source SCTE-27 data to this output. Multiple values are accepted, and can be entered in ranges and/or by comma separation. Can be entered as decimal or hexadecimal values.  Each PID specified must be in the range of 32 (or 0x20)..8182 (or 0x1ff6).
   */
  Scte27Pids?: string;

  /**
   * Controls placement of EBP on Audio PIDs. If set to videoAndAudioPids, EBP markers will be placed on the video PID and all audio PIDs.  If set to videoPid, EBP markers will be placed on only the video PID.
   */
  EbpPlacement?: M2tsEbpPlacement | string;

  /**
   * When set to enabled, generates captionServiceDescriptor in PMT.
   */
  CcDescriptor?: M2tsCcDescriptor | string;

  /**
   * Packet Identifier (PID) for input source ETV Signal data to this output. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   */
  EtvSignalPid?: string;

  /**
   * The value of the transport stream ID field in the Program Map Table.
   */
  TransportStreamId?: number;

  /**
   * The number of audio frames to insert for each PES packet.
   */
  AudioFramesPerPes?: number;

  /**
   * Packet Identifier (PID) of the elementary audio stream(s) in the transport stream. Multiple values are accepted, and can be entered in ranges and/or by comma separation. Can be entered as decimal or hexadecimal values. Each PID specified must be in the range of 32 (or 0x20)..8182 (or 0x1ff6).
   */
  AudioPids?: string;

  /**
   * Packet Identifier (PID) for ARIB Captions in the transport stream. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   */
  AribCaptionsPid?: string;

  /**
   * The output bitrate of the transport stream in bits per second. Setting to 0 lets the muxer automatically determine the appropriate bitrate.
   */
  Bitrate?: number;

  /**
   * Packet Identifier (PID) of the elementary video stream in the transport stream. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   */
  VideoPid?: string;

  /**
   * Inserts segmentation markers at each segmentationTime period. raiSegstart sets the Random Access Indicator bit in the adaptation field. raiAdapt sets the RAI bit and adds the current timecode in the private data bytes. psiSegstart inserts PAT and PMT tables at the start of segments. ebp adds Encoder Boundary Point information to the adaptation field as per OpenCable specification OC-SP-EBP-I01-130118. ebpLegacy adds Encoder Boundary Point information to the adaptation field using a legacy proprietary format.
   */
  SegmentationMarkers?: M2tsSegmentationMarkers | string;

  /**
   * Packet Identifier (PID) for input source ETV Platform data to this output. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   */
  EtvPlatformPid?: string;

  /**
   * The length in seconds of each fragment. Only used with EBP markers.
   */
  FragmentTime?: number;

  /**
   * When set to drop, output audio streams will be removed from the program if the selected input audio stream is removed from the input. This allows the output audio configuration to dynamically change based on input configuration. If this is set to encodeSilence, all output audio streams will output encoded silence when not connected to an active input stream.
   */
  AbsentInputAudioBehavior?: M2tsAbsentInputAudioBehavior | string;

  /**
   * The number of milliseconds between instances of this table in the output transport stream.  Valid values are 0, 10..1000.
   */
  PatInterval?: number;

  /**
   * Maximum time in milliseconds between Program Clock Reference (PCRs) inserted into the transport stream.
   */
  PcrPeriod?: number;

  /**
   * Optionally pass SCTE-35 signals from the input source to this output.
   */
  Scte35Control?: M2tsScte35Control | string;

  /**
   * When set to passthrough, timed metadata will be passed through from input to output.
   */
  TimedMetadataBehavior?: M2tsTimedMetadataBehavior | string;

  /**
   * Inserts DVB Network Information Table (NIT) at the specified table repetition interval.
   */
  DvbNitSettings?: DvbNitSettings;

  /**
   * The segmentation style parameter controls how segmentation markers are inserted into the transport stream. With avails, it is possible that segments may be truncated, which can influence where future segmentation markers are inserted.
   *
   * When a segmentation style of "resetCadence" is selected and a segment is truncated due to an avail, we will reset the segmentation cadence. This means the subsequent segment will have a duration of $segmentationTime seconds.
   *
   * When a segmentation style of "maintainCadence" is selected and a segment is truncated due to an avail, we will not reset the segmentation cadence. This means the subsequent segment will likely be truncated as well. However, all segments after that will have a duration of $segmentationTime seconds. Note that EBP lookahead is a slight exception to this rule.
   */
  SegmentationStyle?: M2tsSegmentationStyle | string;

  /**
   * Inserts DVB Time and Date Table (TDT) at the specified table repetition interval.
   */
  DvbTdtSettings?: DvbTdtSettings;

  /**
   * If set to auto, pid number used for ARIB Captions will be auto-selected from unused pids.  If set to useConfigured, ARIB Captions will be on the configured pid number.
   */
  AribCaptionsPidControl?: M2tsAribCaptionsPidControl | string;

  /**
   * If set to passthrough, passes any KLV data from the input source to this output.
   */
  Klv?: M2tsKlv | string;

  /**
   * When set to atsc, uses stream type = 0x81 for AC3 and stream type = 0x87 for EAC3. When set to dvb, uses stream type = 0x06.
   */
  AudioStreamType?: M2tsAudioStreamType | string;

  /**
   * When set, enforces that Encoder Boundary Points do not come within the specified time interval of each other by looking ahead at input video. If another EBP is going to come in within the specified time interval, the current EBP is not emitted, and the segment is "stretched" to the next marker.  The lookahead value does not add latency to the system. The Live Event must be configured elsewhere to create sufficient latency to make the lookahead accurate.
   */
  EbpLookaheadMs?: number;

  /**
   * Include or exclude the ES Rate field in the PES header.
   */
  EsRateInPes?: M2tsEsRateInPes | string;

  /**
   * If set to passthrough, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.
   */
  NielsenId3Behavior?: M2tsNielsenId3Behavior | string;

  /**
   * When set to enabled, uses ARIB-compliant field muxing and removes video descriptor.
   */
  Arib?: M2tsArib | string;

  /**
   * Packet Identifier (PID) for input source KLV data to this output. Multiple values are accepted, and can be entered in ranges and/or by comma separation. Can be entered as decimal or hexadecimal values.  Each PID specified must be in the range of 32 (or 0x20)..8182 (or 0x1ff6).
   */
  KlvDataPids?: string;

  /**
   * Packet Identifier (PID) for the Program Map Table (PMT) in the transport stream. Can be entered as a decimal or hexadecimal value. Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   */
  PmtPid?: string;

  /**
   * Packet Identifier (PID) for input source DVB Teletext data to this output. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   */
  DvbTeletextPid?: string;

  /**
   * The value of the program number field in the Program Map Table.
   */
  ProgramNum?: number;

  /**
   * When set to pcrEveryPesPacket, a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This parameter is effective only when the PCR PID is the same as the video or audio elementary stream.
   */
  PcrControl?: M2tsPcrControl | string;

  /**
   * When vbr, does not insert null packets into transport stream to fill specified bitrate. The bitrate setting acts as the maximum bitrate when vbr is set.
   */
  RateMode?: M2tsRateMode | string;

  /**
   * Packet Identifier (PID) for input source DVB Subtitle data to this output. Multiple values are accepted, and can be entered in ranges and/or by comma separation. Can be entered as decimal or hexadecimal values.  Each PID specified must be in the range of 32 (or 0x20)..8182 (or 0x1ff6).
   */
  DvbSubPids?: string;

  /**
   * When videoAndFixedIntervals is selected, audio EBP markers will be added to partitions 3 and 4. The interval between these additional markers will be fixed, and will be slightly shorter than the video EBP marker interval. Only available when EBP Cablelabs segmentation markers are selected.  Partitions 1 and 2 will always follow the video interval.
   */
  EbpAudioInterval?: M2tsAudioInterval | string;

  /**
   * Packet Identifier (PID) of the Program Clock Reference (PCR) in the transport stream. When no value is given, the encoder will assign the same value as the Video PID. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   */
  PcrPid?: string;

  /**
   * The number of milliseconds between instances of this table in the output transport stream. Valid values are 0, 10..1000.
   */
  PmtInterval?: number;

  /**
   * The length in seconds of each segment. Required unless markers is set to _none_.
   */
  SegmentationTime?: number;

  /**
   * If set to multiplex, use multiplex buffer model for accurate interleaving.  Setting to bufferModel to none can lead to lower latency, but low-memory devices may not be able to play back the stream without interruptions.
   */
  BufferModel?: M2tsBufferModel | string;

  /**
   * Packet Identifier (PID) of the timed metadata stream in the transport stream. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   */
  TimedMetadataPid?: string;

  /**
   * This field is unused and deprecated.
   */
  EcmPid?: string;

  /**
   * Value in bits per second of extra null packets to insert into the transport stream. This can be used if a downstream encryption system requires periodic null packets.
   */
  NullPacketBitrate?: number;

  /**
   * Inserts DVB Service Description Table (SDT) at the specified table repetition interval.
   */
  DvbSdtSettings?: DvbSdtSettings;

  /**
   * If set to passthrough, passes any EBIF data from the input source to this output.
   */
  Ebif?: M2tsEbifControl | string;

  /**
   * When set to dvb, uses DVB buffer model for Dolby Digital audio.  When set to atsc, the ATSC model is used.
   */
  AudioBufferModel?: M2tsAudioBufferModel | string;
}

export namespace M2tsSettings {
  export const filterSensitiveLog = (obj: M2tsSettings): any => ({
    ...obj,
  });
}

export enum M2tsTimedMetadataBehavior {
  NO_PASSTHROUGH = "NO_PASSTHROUGH",
  PASSTHROUGH = "PASSTHROUGH",
}

export enum M3u8NielsenId3Behavior {
  NO_PASSTHROUGH = "NO_PASSTHROUGH",
  PASSTHROUGH = "PASSTHROUGH",
}

export enum M3u8PcrControl {
  CONFIGURED_PCR_PERIOD = "CONFIGURED_PCR_PERIOD",
  PCR_EVERY_PES_PACKET = "PCR_EVERY_PES_PACKET",
}

export enum M3u8Scte35Behavior {
  NO_PASSTHROUGH = "NO_PASSTHROUGH",
  PASSTHROUGH = "PASSTHROUGH",
}

/**
 * Settings information for the .m3u8 container
 */
export interface M3u8Settings {
  /**
   * Packet Identifier (PID) of the SCTE-35 stream in the transport stream. Can be entered as a decimal or hexadecimal value.
   */
  Scte35Pid?: string;

  /**
   * When set to passthrough, timed metadata is passed through from input to output.
   */
  TimedMetadataBehavior?: M3u8TimedMetadataBehavior | string;

  /**
   * Packet Identifier (PID) of the elementary video stream in the transport stream. Can be entered as a decimal or hexadecimal value.
   */
  VideoPid?: string;

  /**
   * Packet Identifier (PID) of the timed metadata stream in the transport stream. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   */
  TimedMetadataPid?: string;

  /**
   * If set to passthrough, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.
   */
  NielsenId3Behavior?: M3u8NielsenId3Behavior | string;

  /**
   * Maximum time in milliseconds between Program Clock References (PCRs) inserted into the transport stream.
   */
  PcrPeriod?: number;

  /**
   * The value of the program number field in the Program Map Table.
   */
  ProgramNum?: number;

  /**
   * Packet Identifier (PID) of the elementary audio stream(s) in the transport stream. Multiple values are accepted, and can be entered in ranges and/or by comma separation. Can be entered as decimal or hexadecimal values.
   */
  AudioPids?: string;

  /**
   * The number of milliseconds between instances of this table in the output transport stream. A value of \"0\" writes out the PMT once per segment file.
   */
  PatInterval?: number;

  /**
   * This parameter is unused and deprecated.
   */
  EcmPid?: string;

  /**
   * When set to pcrEveryPesPacket, a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This parameter is effective only when the PCR PID is the same as the video or audio elementary stream.
   */
  PcrControl?: M3u8PcrControl | string;

  /**
   * Packet Identifier (PID) for the Program Map Table (PMT) in the transport stream. Can be entered as a decimal or hexadecimal value.
   */
  PmtPid?: string;

  /**
   * If set to passthrough, passes any SCTE-35 signals from the input source to this output.
   */
  Scte35Behavior?: M3u8Scte35Behavior | string;

  /**
   * The value of the transport stream ID field in the Program Map Table.
   */
  TransportStreamId?: number;

  /**
   * The number of audio frames to insert for each PES packet.
   */
  AudioFramesPerPes?: number;

  /**
   * Packet Identifier (PID) of the Program Clock Reference (PCR) in the transport stream. When no value is given, the encoder will assign the same value as the Video PID. Can be entered as a decimal or hexadecimal value.
   */
  PcrPid?: string;

  /**
   * The number of milliseconds between instances of this table in the output transport stream. A value of \"0\" writes out the PMT once per segment file.
   */
  PmtInterval?: number;
}

export namespace M3u8Settings {
  export const filterSensitiveLog = (obj: M3u8Settings): any => ({
    ...obj,
  });
}

export enum M3u8TimedMetadataBehavior {
  NO_PASSTHROUGH = "NO_PASSTHROUGH",
  PASSTHROUGH = "PASSTHROUGH",
}

/**
 * The settings for a MediaConnect Flow.
 */
export interface MediaConnectFlow {
  /**
   * The unique ARN of the MediaConnect Flow being used as a source.
   */
  FlowArn?: string;
}

export namespace MediaConnectFlow {
  export const filterSensitiveLog = (obj: MediaConnectFlow): any => ({
    ...obj,
  });
}

/**
 * The settings for a MediaConnect Flow.
 */
export interface MediaConnectFlowRequest {
  /**
   * The ARN of the MediaConnect Flow that you want to use as a source.
   */
  FlowArn?: string;
}

export namespace MediaConnectFlowRequest {
  export const filterSensitiveLog = (obj: MediaConnectFlowRequest): any => ({
    ...obj,
  });
}

/**
 * Media Package Group Settings
 */
export interface MediaPackageGroupSettings {
  /**
   * MediaPackage channel destination.
   */
  Destination: OutputLocationRef | undefined;
}

export namespace MediaPackageGroupSettings {
  export const filterSensitiveLog = (obj: MediaPackageGroupSettings): any => ({
    ...obj,
  });
}

/**
 * MediaPackage Output Destination Settings
 */
export interface MediaPackageOutputDestinationSettings {
  /**
   * ID of the channel in MediaPackage that is the destination for this output group. You do not need to specify the individual inputs in MediaPackage; MediaLive will handle the connection of the two MediaLive pipelines to the two MediaPackage inputs. The MediaPackage channel and MediaLive channel must be in the same region.
   */
  ChannelId?: string;
}

export namespace MediaPackageOutputDestinationSettings {
  export const filterSensitiveLog = (obj: MediaPackageOutputDestinationSettings): any => ({
    ...obj,
  });
}

/**
 * Media Package Output Settings
 */
export interface MediaPackageOutputSettings {}

export namespace MediaPackageOutputSettings {
  export const filterSensitiveLog = (obj: MediaPackageOutputSettings): any => ({
    ...obj,
  });
}

export enum Mp2CodingMode {
  CODING_MODE_1_0 = "CODING_MODE_1_0",
  CODING_MODE_2_0 = "CODING_MODE_2_0",
}

/**
 * Mp2 Settings
 */
export interface Mp2Settings {
  /**
   * Sample rate in Hz.
   */
  SampleRate?: number;

  /**
   * The MPEG2 Audio coding mode.  Valid values are codingMode10 (for mono) or codingMode20 (for stereo).
   */
  CodingMode?: Mp2CodingMode | string;

  /**
   * Average bitrate in bits/second.
   */
  Bitrate?: number;
}

export namespace Mp2Settings {
  export const filterSensitiveLog = (obj: Mp2Settings): any => ({
    ...obj,
  });
}

/**
 * Ms Smooth Group Settings
 */
export interface MsSmoothGroupSettings {
  /**
   * Number of milliseconds to delay the output from the second pipeline.
   */
  SendDelayMs?: number;

  /**
   * MS Smooth event ID to be sent to the IIS server.
   *
   * Should only be specified if eventIdMode is set to useConfigured.
   */
  EventId?: string;

  /**
   * Size in seconds of file cache for streaming outputs.
   */
  FilecacheDuration?: number;

  /**
   * Number of seconds to wait before retrying connection to the IIS server if the connection is lost. Content will be cached during this time and the cache will be be delivered to the IIS server once the connection is re-established.
   */
  ConnectionRetryInterval?: number;

  /**
   * Number of seconds before initiating a restart due to output failure, due to exhausting the numRetries on one segment, or exceeding filecacheDuration.
   */
  RestartDelay?: number;

  /**
   * useInputSegmentation has been deprecated. The configured segment size is always used.
   */
  SegmentationMode?: SmoothGroupSegmentationMode | string;

  /**
   * Parameter that control output group behavior on input loss.
   */
  InputLossAction?: InputLossActionForMsSmoothOut | string;

  /**
   * Timestamp offset for the event.  Only used if timestampOffsetMode is set to useConfiguredOffset.
   */
  TimestampOffset?: string;

  /**
   * When set to send, send stream manifest so publishing point doesn't start until all streams start.
   */
  StreamManifestBehavior?: SmoothGroupStreamManifestBehavior | string;

  /**
   * Type of timestamp date offset to use.
   * - useEventStartDate: Use the date the event was started as the offset
   * - useConfiguredOffset: Use an explicitly configured date as the offset
   */
  TimestampOffsetMode?: SmoothGroupTimestampOffsetMode | string;

  /**
   * Length of mp4 fragments to generate (in seconds). Fragment length must be compatible with GOP size and framerate.
   */
  FragmentLength?: number;

  /**
   * Specifies whether or not to send an event ID to the IIS server. If no event ID is sent and the same Live Event is used without changing the publishing point, clients might see cached video from the previous run.
   *
   * Options:
   * - "useConfigured" - use the value provided in eventId
   * - "useTimestamp" - generate and send an event ID based on the current timestamp
   * - "noEventId" - do not send an event ID to the IIS server.
   */
  EventIdMode?: SmoothGroupEventIdMode | string;

  /**
   * If set to verifyAuthenticity, verify the https certificate chain to a trusted Certificate Authority (CA).  This will cause https outputs to self-signed certificates to fail.
   */
  CertificateMode?: SmoothGroupCertificateMode | string;

  /**
   * Smooth Streaming publish point on an IIS server. Elemental Live acts as a "Push" encoder to IIS.
   */
  Destination: OutputLocationRef | undefined;

  /**
   * Number of retry attempts.
   */
  NumRetries?: number;

  /**
   * Identifies the type of data to place in the sparse track:
   * - SCTE35: Insert SCTE-35 messages from the source content. With each message, insert an IDR frame to start a new segment.
   * - SCTE35_WITHOUT_SEGMENTATION: Insert SCTE-35 messages from the source content. With each message, insert an IDR frame but don't start a new segment.
   * - NONE: Don't generate a sparse track for any outputs in this output group.
   */
  SparseTrackType?: SmoothGroupSparseTrackType | string;

  /**
   * When set to sendEos, send EOS signal to IIS server when stopping the event
   */
  EventStopBehavior?: SmoothGroupEventStopBehavior | string;

  /**
   * If set to passthrough for an audio-only MS Smooth output, the fragment absolute time will be set to the current timecode. This option does not write timecodes to the audio elementary stream.
   */
  AudioOnlyTimecodeControl?: SmoothGroupAudioOnlyTimecodeControl | string;

  /**
   * The ID to include in each message in the sparse track. Ignored if sparseTrackType is NONE.
   */
  AcquisitionPointId?: string;
}

export namespace MsSmoothGroupSettings {
  export const filterSensitiveLog = (obj: MsSmoothGroupSettings): any => ({
    ...obj,
  });
}

export enum MsSmoothH265PackagingType {
  HEV1 = "HEV1",
  HVC1 = "HVC1",
}

/**
 * Ms Smooth Output Settings
 */
export interface MsSmoothOutputSettings {
  /**
   * String concatenated to the end of the destination filename.  Required for multiple outputs of the same type.
   */
  NameModifier?: string;

  /**
   * Only applicable when this output is referencing an H.265 video description.
   * Specifies whether MP4 segments should be packaged as HEV1 or HVC1.
   */
  H265PackagingType?: MsSmoothH265PackagingType | string;
}

export namespace MsSmoothOutputSettings {
  export const filterSensitiveLog = (obj: MsSmoothOutputSettings): any => ({
    ...obj,
  });
}

/**
 * The multiplex object.
 */
export interface Multiplex {
  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * The number of programs in the multiplex.
   */
  ProgramCount?: number;

  /**
   * The name of the multiplex.
   */
  Name?: string;

  /**
   * The current state of the multiplex.
   */
  State?: MultiplexState | string;

  /**
   * The unique id of the multiplex.
   */
  Id?: string;

  /**
   * Configuration for a multiplex event.
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * The unique arn of the multiplex.
   */
  Arn?: string;

  /**
   * A list of availability zones for the multiplex.
   */
  AvailabilityZones?: string[];

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * A list of the multiplex output destinations.
   */
  Destinations?: MultiplexOutputDestination[];
}

export namespace Multiplex {
  export const filterSensitiveLog = (obj: Multiplex): any => ({
    ...obj,
  });
}

/**
 * Multiplex Group Settings
 */
export interface MultiplexGroupSettings {}

export namespace MultiplexGroupSettings {
  export const filterSensitiveLog = (obj: MultiplexGroupSettings): any => ({
    ...obj,
  });
}

/**
 * Multiplex MediaConnect output destination settings.
 */
export interface MultiplexMediaConnectOutputDestinationSettings {
  /**
   * The MediaConnect entitlement ARN available as a Flow source.
   */
  EntitlementArn?: string;
}

export namespace MultiplexMediaConnectOutputDestinationSettings {
  export const filterSensitiveLog = (obj: MultiplexMediaConnectOutputDestinationSettings): any => ({
    ...obj,
  });
}

/**
 * Multiplex output destination settings
 */
export interface MultiplexOutputDestination {
  /**
   * Multiplex MediaConnect output destination settings.
   */
  MediaConnectSettings?: MultiplexMediaConnectOutputDestinationSettings;
}

export namespace MultiplexOutputDestination {
  export const filterSensitiveLog = (obj: MultiplexOutputDestination): any => ({
    ...obj,
  });
}

/**
 * Multiplex Output Settings
 */
export interface MultiplexOutputSettings {
  /**
   * Destination is a Multiplex.
   */
  Destination: OutputLocationRef | undefined;
}

export namespace MultiplexOutputSettings {
  export const filterSensitiveLog = (obj: MultiplexOutputSettings): any => ({
    ...obj,
  });
}

/**
 * The multiplex program object.
 */
export interface MultiplexProgram {
  /**
   * The name of the multiplex program.
   */
  ProgramName?: string;

  /**
   * The MediaLive channel associated with the program.
   */
  ChannelId?: string;

  /**
   * The settings for this multiplex program.
   */
  MultiplexProgramSettings?: MultiplexProgramSettings;

  /**
   * The packet identifier map for this multiplex program.
   */
  PacketIdentifiersMap?: MultiplexProgramPacketIdentifiersMap;
}

export namespace MultiplexProgram {
  export const filterSensitiveLog = (obj: MultiplexProgram): any => ({
    ...obj,
  });
}

/**
 * Multiplex Program Input Destination Settings for outputting a Channel to a Multiplex
 */
export interface MultiplexProgramChannelDestinationSettings {
  /**
   * The program name of the Multiplex program that the encoder is providing output to.
   */
  ProgramName?: string;

  /**
   * The ID of the Multiplex that the encoder is providing output to. You do not need to specify the individual inputs to the Multiplex; MediaLive will handle the connection of the two MediaLive pipelines to the two Multiplex instances.
   * The Multiplex must be in the same region as the Channel.
   */
  MultiplexId?: string;
}

export namespace MultiplexProgramChannelDestinationSettings {
  export const filterSensitiveLog = (obj: MultiplexProgramChannelDestinationSettings): any => ({
    ...obj,
  });
}

/**
 * Packet identifiers map for a given Multiplex program.
 */
export interface MultiplexProgramPacketIdentifiersMap {
  /**
   * Placeholder documentation for __integer
   */
  EtvPlatformPid?: number;

  /**
   * Placeholder documentation for __integer
   */
  TimedMetadataPid?: number;

  /**
   * Placeholder documentation for __listOf__integer
   */
  DvbSubPids?: number[];

  /**
   * Placeholder documentation for __listOf__integer
   */
  Scte27Pids?: number[];

  /**
   * Placeholder documentation for __integer
   */
  PcrPid?: number;

  /**
   * Placeholder documentation for __integer
   */
  EtvSignalPid?: number;

  /**
   * Placeholder documentation for __listOf__integer
   */
  AudioPids?: number[];

  /**
   * Placeholder documentation for __integer
   */
  Scte35Pid?: number;

  /**
   * Placeholder documentation for __integer
   */
  PrivateMetadataPid?: number;

  /**
   * Placeholder documentation for __integer
   */
  PmtPid?: number;

  /**
   * Placeholder documentation for __integer
   */
  DvbTeletextPid?: number;

  /**
   * Placeholder documentation for __integer
   */
  VideoPid?: number;

  /**
   * Placeholder documentation for __listOf__integer
   */
  KlvDataPids?: number[];
}

export namespace MultiplexProgramPacketIdentifiersMap {
  export const filterSensitiveLog = (obj: MultiplexProgramPacketIdentifiersMap): any => ({
    ...obj,
  });
}

/**
 * Transport stream service descriptor configuration for the Multiplex program.
 */
export interface MultiplexProgramServiceDescriptor {
  /**
   * Name of the service.
   */
  ServiceName: string | undefined;

  /**
   * Name of the provider.
   */
  ProviderName: string | undefined;
}

export namespace MultiplexProgramServiceDescriptor {
  export const filterSensitiveLog = (obj: MultiplexProgramServiceDescriptor): any => ({
    ...obj,
  });
}

/**
 * Multiplex Program settings configuration.
 */
export interface MultiplexProgramSettings {
  /**
   * Indicates which pipeline is preferred by the multiplex for program ingest.
   */
  PreferredChannelPipeline?: PreferredChannelPipeline | string;

  /**
   * Transport stream service descriptor configuration for the Multiplex program.
   */
  ServiceDescriptor?: MultiplexProgramServiceDescriptor;

  /**
   * Program video settings configuration.
   */
  VideoSettings?: MultiplexVideoSettings;

  /**
   * Unique program number.
   */
  ProgramNumber: number | undefined;
}

export namespace MultiplexProgramSettings {
  export const filterSensitiveLog = (obj: MultiplexProgramSettings): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for MultiplexProgramSummary
 */
export interface MultiplexProgramSummary {
  /**
   * The name of the multiplex program.
   */
  ProgramName?: string;

  /**
   * The MediaLive Channel associated with the program.
   */
  ChannelId?: string;
}

export namespace MultiplexProgramSummary {
  export const filterSensitiveLog = (obj: MultiplexProgramSummary): any => ({
    ...obj,
  });
}

/**
 * Contains configuration for a Multiplex event
 */
export interface MultiplexSettings {
  /**
   * Transport stream reserved bit rate.
   */
  TransportStreamReservedBitrate?: number;

  /**
   * Transport stream ID.
   */
  TransportStreamId: number | undefined;

  /**
   * Transport stream bit rate.
   */
  TransportStreamBitrate: number | undefined;

  /**
   * Maximum video buffer delay in milliseconds.
   */
  MaximumVideoBufferDelayMilliseconds?: number;
}

export namespace MultiplexSettings {
  export const filterSensitiveLog = (obj: MultiplexSettings): any => ({
    ...obj,
  });
}

/**
 * Contains summary configuration for a Multiplex event.
 */
export interface MultiplexSettingsSummary {
  /**
   * Transport stream bit rate.
   */
  TransportStreamBitrate?: number;
}

export namespace MultiplexSettingsSummary {
  export const filterSensitiveLog = (obj: MultiplexSettingsSummary): any => ({
    ...obj,
  });
}

export enum MultiplexState {
  CREATE_FAILED = "CREATE_FAILED",
  CREATING = "CREATING",
  DELETED = "DELETED",
  DELETING = "DELETING",
  IDLE = "IDLE",
  RECOVERING = "RECOVERING",
  RUNNING = "RUNNING",
  STARTING = "STARTING",
  STOPPING = "STOPPING",
}

/**
 * Statmux rate control settings
 */
export interface MultiplexStatmuxVideoSettings {
  /**
   * Maximum statmux bitrate.
   */
  MaximumBitrate?: number;

  /**
   * Minimum statmux bitrate.
   */
  MinimumBitrate?: number;
}

export namespace MultiplexStatmuxVideoSettings {
  export const filterSensitiveLog = (obj: MultiplexStatmuxVideoSettings): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for MultiplexSummary
 */
export interface MultiplexSummary {
  /**
   * The current state of the multiplex.
   */
  State?: MultiplexState | string;

  /**
   * The number of programs in the multiplex.
   */
  ProgramCount?: number;

  /**
   * The unique arn of the multiplex.
   */
  Arn?: string;

  /**
   * Configuration for a multiplex event.
   */
  MultiplexSettings?: MultiplexSettingsSummary;

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * The unique id of the multiplex.
   */
  Id?: string;

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * A list of availability zones for the multiplex.
   */
  AvailabilityZones?: string[];

  /**
   * The name of the multiplex.
   */
  Name?: string;
}

export namespace MultiplexSummary {
  export const filterSensitiveLog = (obj: MultiplexSummary): any => ({
    ...obj,
  });
}

/**
 * The video configuration for each program in a multiplex.
 */
export interface MultiplexVideoSettings {
  /**
   * Statmux rate control settings.
   * When this field is defined, ConstantBitrate must be undefined.
   */
  StatmuxSettings?: MultiplexStatmuxVideoSettings;

  /**
   * The constant bitrate configuration for the video encode.
   * When this field is defined, StatmuxSettings must be undefined.
   */
  ConstantBitrate?: number;
}

export namespace MultiplexVideoSettings {
  export const filterSensitiveLog = (obj: MultiplexVideoSettings): any => ({
    ...obj,
  });
}

export enum NetworkInputServerValidation {
  CHECK_CRYPTOGRAPHY_AND_VALIDATE_NAME = "CHECK_CRYPTOGRAPHY_AND_VALIDATE_NAME",
  CHECK_CRYPTOGRAPHY_ONLY = "CHECK_CRYPTOGRAPHY_ONLY",
}

/**
 * Network source to transcode. Must be accessible to the Elemental Live node that is running the live event through a network connection.
 */
export interface NetworkInputSettings {
  /**
   * Specifies HLS input settings when the uri is for a HLS manifest.
   */
  HlsInputSettings?: HlsInputSettings;

  /**
   * Check HTTPS server certificates. When set to checkCryptographyOnly, cryptography in the certificate will be checked, but not the server's name. Certain subdomains (notably S3 buckets that use dots in the bucket name) do not strictly match the corresponding certificate's wildcard pattern and would otherwise cause the event to error. This setting is ignored for protocols that do not use https.
   */
  ServerValidation?: NetworkInputServerValidation | string;
}

export namespace NetworkInputSettings {
  export const filterSensitiveLog = (obj: NetworkInputSettings): any => ({
    ...obj,
  });
}

/**
 * Nielsen Configuration
 */
export interface NielsenConfiguration {
  /**
   * Enter the Distributor ID assigned to your organization by Nielsen.
   */
  DistributorId?: string;

  /**
   * Enables Nielsen PCM to ID3 tagging
   */
  NielsenPcmToId3Tagging?: NielsenPcmToId3TaggingState | string;
}

export namespace NielsenConfiguration {
  export const filterSensitiveLog = (obj: NielsenConfiguration): any => ({
    ...obj,
  });
}

export enum NielsenPcmToId3TaggingState {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * Placeholder documentation for NotFoundException
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  /**
   * Placeholder documentation for __string
   */
  Message?: string;
}

export namespace NotFoundException {
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
}

/**
 * Reserved resources available for purchase
 */
export interface Offering {
  /**
   * One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering
   */
  FixedPrice?: number;

  /**
   * AWS region, e.g. 'us-west-2'
   */
  Region?: string;

  /**
   * Unique offering ARN, e.g. 'arn:aws:medialive:us-west-2:123456789012:offering:87654321'
   */
  Arn?: string;

  /**
   * Units for duration, e.g. 'MONTHS'
   */
  DurationUnits?: OfferingDurationUnits | string;

  /**
   * Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'
   */
  CurrencyCode?: string;

  /**
   * Unique offering ID, e.g. '87654321'
   */
  OfferingId?: string;

  /**
   * Offering type, e.g. 'NO_UPFRONT'
   */
  OfferingType?: OfferingType | string;

  /**
   * Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'
   */
  OfferingDescription?: string;

  /**
   * Recurring usage charge for each reserved resource, e.g. '157.0'
   */
  UsagePrice?: number;

  /**
   * Lease duration, e.g. '12'
   */
  Duration?: number;

  /**
   * Resource configuration details
   */
  ResourceSpecification?: ReservationResourceSpecification;
}

export namespace Offering {
  export const filterSensitiveLog = (obj: Offering): any => ({
    ...obj,
  });
}

export enum OfferingDurationUnits {
  MONTHS = "MONTHS",
}

export enum OfferingType {
  NO_UPFRONT = "NO_UPFRONT",
}

/**
 * Output settings. There can be multiple outputs within a group.
 */
export interface Output {
  /**
   * The names of the AudioDescriptions used as audio sources for this output.
   */
  AudioDescriptionNames?: string[];

  /**
   * The names of the CaptionDescriptions used as caption sources for this output.
   */
  CaptionDescriptionNames?: string[];

  /**
   * The name used to identify an output.
   */
  OutputName?: string;

  /**
   * The name of the VideoDescription used as the source for this output.
   */
  VideoDescriptionName?: string;

  /**
   * Output type-specific settings.
   */
  OutputSettings: OutputSettings | undefined;
}

export namespace Output {
  export const filterSensitiveLog = (obj: Output): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for OutputDestination
 */
export interface OutputDestination {
  /**
   * User-specified id. This is used in an output group or an output.
   */
  Id?: string;

  /**
   * Destination settings for a Multiplex output; one destination for both encoders.
   */
  MultiplexSettings?: MultiplexProgramChannelDestinationSettings;

  /**
   * Destination settings for a MediaPackage output; one destination for both encoders.
   */
  MediaPackageSettings?: MediaPackageOutputDestinationSettings[];

  /**
   * Destination settings for a standard output; one destination for each redundant encoder.
   */
  Settings?: OutputDestinationSettings[];
}

export namespace OutputDestination {
  export const filterSensitiveLog = (obj: OutputDestination): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for OutputDestinationSettings
 */
export interface OutputDestinationSettings {
  /**
   * A URL specifying a destination
   */
  Url?: string;

  /**
   * Stream name for RTMP destinations (URLs of type rtmp://)
   */
  StreamName?: string;

  /**
   * key used to extract the password from EC2 Parameter store
   */
  PasswordParam?: string;

  /**
   * username for destination
   */
  Username?: string;
}

export namespace OutputDestinationSettings {
  export const filterSensitiveLog = (obj: OutputDestinationSettings): any => ({
    ...obj,
  });
}

/**
 * Output groups for this Live Event. Output groups contain information about where streams should be distributed.
 */
export interface OutputGroup {
  /**
   * Custom output group name optionally defined by the user.  Only letters, numbers, and the underscore character allowed; only 32 characters allowed.
   */
  Name?: string;

  /**
   * Settings associated with the output group.
   */
  OutputGroupSettings: OutputGroupSettings | undefined;

  /**
   * Placeholder documentation for __listOfOutput
   */
  Outputs: Output[] | undefined;
}

export namespace OutputGroup {
  export const filterSensitiveLog = (obj: OutputGroup): any => ({
    ...obj,
  });
}

/**
 * Output Group Settings
 */
export interface OutputGroupSettings {
  /**
   * Rtmp Group Settings
   */
  RtmpGroupSettings?: RtmpGroupSettings;

  /**
   * Frame Capture Group Settings
   */
  FrameCaptureGroupSettings?: FrameCaptureGroupSettings;

  /**
   * Multiplex Group Settings
   */
  MultiplexGroupSettings?: MultiplexGroupSettings;

  /**
   * Archive Group Settings
   */
  ArchiveGroupSettings?: ArchiveGroupSettings;

  /**
   * Hls Group Settings
   */
  HlsGroupSettings?: HlsGroupSettings;

  /**
   * Ms Smooth Group Settings
   */
  MsSmoothGroupSettings?: MsSmoothGroupSettings;

  /**
   * Media Package Group Settings
   */
  MediaPackageGroupSettings?: MediaPackageGroupSettings;

  /**
   * Udp Group Settings
   */
  UdpGroupSettings?: UdpGroupSettings;
}

export namespace OutputGroupSettings {
  export const filterSensitiveLog = (obj: OutputGroupSettings): any => ({
    ...obj,
  });
}

/**
 * Reference to an OutputDestination ID defined in the channel
 */
export interface OutputLocationRef {
  /**
   * Placeholder documentation for __string
   */
  DestinationRefId?: string;
}

export namespace OutputLocationRef {
  export const filterSensitiveLog = (obj: OutputLocationRef): any => ({
    ...obj,
  });
}

/**
 * Output Settings
 */
export interface OutputSettings {
  /**
   * Media Package Output Settings
   */
  MediaPackageOutputSettings?: MediaPackageOutputSettings;

  /**
   * Multiplex Output Settings
   */
  MultiplexOutputSettings?: MultiplexOutputSettings;

  /**
   * Ms Smooth Output Settings
   */
  MsSmoothOutputSettings?: MsSmoothOutputSettings;

  /**
   * Archive Output Settings
   */
  ArchiveOutputSettings?: ArchiveOutputSettings;

  /**
   * Frame Capture Output Settings
   */
  FrameCaptureOutputSettings?: FrameCaptureOutputSettings;

  /**
   * Hls Output Settings
   */
  HlsOutputSettings?: HlsOutputSettings;

  /**
   * Rtmp Output Settings
   */
  RtmpOutputSettings?: RtmpOutputSettings;

  /**
   * Udp Output Settings
   */
  UdpOutputSettings?: UdpOutputSettings;
}

export namespace OutputSettings {
  export const filterSensitiveLog = (obj: OutputSettings): any => ({
    ...obj,
  });
}

/**
 * Pass Through Settings
 */
export interface PassThroughSettings {}

export namespace PassThroughSettings {
  export const filterSensitiveLog = (obj: PassThroughSettings): any => ({
    ...obj,
  });
}

/**
 * Settings for the action to set pause state of a channel.
 */
export interface PauseStateScheduleActionSettings {
  /**
   * Placeholder documentation for __listOfPipelinePauseStateSettings
   */
  Pipelines?: PipelinePauseStateSettings[];
}

export namespace PauseStateScheduleActionSettings {
  export const filterSensitiveLog = (obj: PauseStateScheduleActionSettings): any => ({
    ...obj,
  });
}

/**
 * Runtime details of a pipeline when a channel is running.
 */
export interface PipelineDetail {
  /**
   * The name of the active input attachment currently being ingested by this pipeline.
   */
  ActiveInputAttachmentName?: string;

  /**
   * The name of the input switch schedule action that occurred most recently and that resulted in the switch to the current input attachment for this pipeline.
   */
  ActiveInputSwitchActionName?: string;

  /**
   * Pipeline ID
   */
  PipelineId?: string;
}

export namespace PipelineDetail {
  export const filterSensitiveLog = (obj: PipelineDetail): any => ({
    ...obj,
  });
}

export enum PipelineId {
  PIPELINE_0 = "PIPELINE_0",
  PIPELINE_1 = "PIPELINE_1",
}

/**
 * Settings for pausing a pipeline.
 */
export interface PipelinePauseStateSettings {
  /**
   * Pipeline ID to pause ("PIPELINE_0" or "PIPELINE_1").
   */
  PipelineId: PipelineId | string | undefined;
}

export namespace PipelinePauseStateSettings {
  export const filterSensitiveLog = (obj: PipelinePauseStateSettings): any => ({
    ...obj,
  });
}

export enum PreferredChannelPipeline {
  CURRENTLY_ACTIVE = "CURRENTLY_ACTIVE",
  PIPELINE_0 = "PIPELINE_0",
  PIPELINE_1 = "PIPELINE_1",
}

/**
 * Placeholder documentation for PurchaseOfferingRequest
 */
export interface PurchaseOfferingRequest {
  /**
   * Offering to purchase, e.g. '87654321'
   */
  OfferingId: string | undefined;

  /**
   * A collection of key-value pairs
   */
  Tags?: { [key: string]: string };

  /**
   * Name for the new reservation
   */
  Name?: string;

  /**
   * Requested reservation start time (UTC) in ISO-8601 format. The specified time must be between the first day of the current month and one year from now. If no value is given, the default is now.
   */
  Start?: string;

  /**
   * Unique request ID to be specified. This is needed to prevent retries from creating multiple resources.
   */
  RequestId?: string;

  /**
   * Number of resources
   */
  Count: number | undefined;
}

export namespace PurchaseOfferingRequest {
  export const filterSensitiveLog = (obj: PurchaseOfferingRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for PurchaseOfferingResponse
 */
export interface PurchaseOfferingResponse {
  /**
   * Reserved resources available to use
   */
  Reservation?: Reservation;
}

export namespace PurchaseOfferingResponse {
  export const filterSensitiveLog = (obj: PurchaseOfferingResponse): any => ({
    ...obj,
  });
}

/**
 * Rec601 Settings
 */
export interface Rec601Settings {}

export namespace Rec601Settings {
  export const filterSensitiveLog = (obj: Rec601Settings): any => ({
    ...obj,
  });
}

/**
 * Rec709 Settings
 */
export interface Rec709Settings {}

export namespace Rec709Settings {
  export const filterSensitiveLog = (obj: Rec709Settings): any => ({
    ...obj,
  });
}

/**
 * Remix Settings
 */
export interface RemixSettings {
  /**
   * Number of output channels to be produced.
   * Valid values: 1, 2, 4, 6, 8
   */
  ChannelsOut?: number;

  /**
   * Mapping of input channels to output channels, with appropriate gain adjustments.
   */
  ChannelMappings: AudioChannelMapping[] | undefined;

  /**
   * Number of input channels to be used.
   */
  ChannelsIn?: number;
}

export namespace RemixSettings {
  export const filterSensitiveLog = (obj: RemixSettings): any => ({
    ...obj,
  });
}

/**
 * Reserved resources available to use
 */
export interface Reservation {
  /**
   * One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering
   */
  FixedPrice?: number;

  /**
   * Offering type, e.g. 'NO_UPFRONT'
   */
  OfferingType?: OfferingType | string;

  /**
   * Current state of reservation, e.g. 'ACTIVE'
   */
  State?: ReservationState | string;

  /**
   * Units for duration, e.g. 'MONTHS'
   */
  DurationUnits?: OfferingDurationUnits | string;

  /**
   * Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'
   */
  CurrencyCode?: string;

  /**
   * AWS region, e.g. 'us-west-2'
   */
  Region?: string;

  /**
   * Unique offering ID, e.g. '87654321'
   */
  OfferingId?: string;

  /**
   * A collection of key-value pairs
   */
  Tags?: { [key: string]: string };

  /**
   * Recurring usage charge for each reserved resource, e.g. '157.0'
   */
  UsagePrice?: number;

  /**
   * Unique reservation ARN, e.g. 'arn:aws:medialive:us-west-2:123456789012:reservation:1234567'
   */
  Arn?: string;

  /**
   * Reservation UTC start date and time in ISO-8601 format, e.g. '2018-03-01T00:00:00'
   */
  Start?: string;

  /**
   * Reservation UTC end date and time in ISO-8601 format, e.g. '2019-03-01T00:00:00'
   */
  End?: string;

  /**
   * Lease duration, e.g. '12'
   */
  Duration?: number;

  /**
   * Unique reservation ID, e.g. '1234567'
   */
  ReservationId?: string;

  /**
   * Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'
   */
  OfferingDescription?: string;

  /**
   * User specified reservation name
   */
  Name?: string;

  /**
   * Resource configuration details
   */
  ResourceSpecification?: ReservationResourceSpecification;

  /**
   * Number of reserved resources
   */
  Count?: number;
}

export namespace Reservation {
  export const filterSensitiveLog = (obj: Reservation): any => ({
    ...obj,
  });
}

export enum ReservationCodec {
  AUDIO = "AUDIO",
  AVC = "AVC",
  HEVC = "HEVC",
  MPEG2 = "MPEG2",
}

export enum ReservationMaximumBitrate {
  MAX_10_MBPS = "MAX_10_MBPS",
  MAX_20_MBPS = "MAX_20_MBPS",
  MAX_50_MBPS = "MAX_50_MBPS",
}

export enum ReservationMaximumFramerate {
  MAX_30_FPS = "MAX_30_FPS",
  MAX_60_FPS = "MAX_60_FPS",
}

export enum ReservationResolution {
  FHD = "FHD",
  HD = "HD",
  SD = "SD",
  UHD = "UHD",
}

/**
 * Resource configuration (codec, resolution, bitrate, ...)
 */
export interface ReservationResourceSpecification {
  /**
   * Maximum framerate, e.g. 'MAX_30_FPS' (Outputs only)
   */
  MaximumFramerate?: ReservationMaximumFramerate | string;

  /**
   * Resolution, e.g. 'HD'
   */
  Resolution?: ReservationResolution | string;

  /**
   * Codec, e.g. 'AVC'
   */
  Codec?: ReservationCodec | string;

  /**
   * Special feature, e.g. 'AUDIO_NORMALIZATION' (Channels only)
   */
  SpecialFeature?: ReservationSpecialFeature | string;

  /**
   * Maximum bitrate, e.g. 'MAX_20_MBPS'
   */
  MaximumBitrate?: ReservationMaximumBitrate | string;

  /**
   * Channel class, e.g. 'STANDARD'
   */
  ChannelClass?: ChannelClass | string;

  /**
   * Resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL'
   */
  ResourceType?: ReservationResourceType | string;

  /**
   * Video quality, e.g. 'STANDARD' (Outputs only)
   */
  VideoQuality?: ReservationVideoQuality | string;
}

export namespace ReservationResourceSpecification {
  export const filterSensitiveLog = (obj: ReservationResourceSpecification): any => ({
    ...obj,
  });
}

export enum ReservationResourceType {
  CHANNEL = "CHANNEL",
  INPUT = "INPUT",
  MULTIPLEX = "MULTIPLEX",
  OUTPUT = "OUTPUT",
}

export enum ReservationSpecialFeature {
  ADVANCED_AUDIO = "ADVANCED_AUDIO",
  AUDIO_NORMALIZATION = "AUDIO_NORMALIZATION",
}

export enum ReservationState {
  ACTIVE = "ACTIVE",
  CANCELED = "CANCELED",
  DELETED = "DELETED",
  EXPIRED = "EXPIRED",
}

export enum ReservationVideoQuality {
  ENHANCED = "ENHANCED",
  PREMIUM = "PREMIUM",
  STANDARD = "STANDARD",
}

export enum RtmpCacheFullBehavior {
  DISCONNECT_IMMEDIATELY = "DISCONNECT_IMMEDIATELY",
  WAIT_FOR_SERVER = "WAIT_FOR_SERVER",
}

export enum RtmpCaptionData {
  ALL = "ALL",
  FIELD1_608 = "FIELD1_608",
  FIELD1_AND_FIELD2_608 = "FIELD1_AND_FIELD2_608",
}

/**
 * Rtmp Caption Info Destination Settings
 */
export interface RtmpCaptionInfoDestinationSettings {}

export namespace RtmpCaptionInfoDestinationSettings {
  export const filterSensitiveLog = (obj: RtmpCaptionInfoDestinationSettings): any => ({
    ...obj,
  });
}

/**
 * Rtmp Group Settings
 */
export interface RtmpGroupSettings {
  /**
   * Controls behavior when content cache fills up. If remote origin server stalls the RTMP connection and does not accept content fast enough the 'Media Cache' will fill up. When the cache reaches the duration specified by cacheLength the cache will stop accepting new content. If set to disconnectImmediately, the RTMP output will force a disconnect. Clear the media cache, and reconnect after restartDelay seconds. If set to waitForServer, the RTMP output will wait up to 5 minutes to allow the origin server to begin accepting data again.
   */
  CacheFullBehavior?: RtmpCacheFullBehavior | string;

  /**
   * Controls the types of data that passes to onCaptionInfo outputs.  If set to 'all' then 608 and 708 carried DTVCC data will be passed.  If set to 'field1AndField2608' then DTVCC data will be stripped out, but 608 data from both fields will be passed. If set to 'field1608' then only the data carried in 608 from field 1 video will be passed.
   */
  CaptionData?: RtmpCaptionData | string;

  /**
   * If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart.
   */
  RestartDelay?: number;

  /**
   * Cache length, in seconds, is used to calculate buffer size.
   */
  CacheLength?: number;

  /**
   * Controls the behavior of this RTMP group if input becomes unavailable.
   *
   * - emitOutput: Emit a slate until input returns.
   * - pauseOutput: Stop transmitting data until input returns. This does not close the underlying RTMP connection.
   */
  InputLossAction?: InputLossActionForRtmpOut | string;

  /**
   * Authentication scheme to use when connecting with CDN
   */
  AuthenticationScheme?: AuthenticationScheme | string;
}

export namespace RtmpGroupSettings {
  export const filterSensitiveLog = (obj: RtmpGroupSettings): any => ({
    ...obj,
  });
}

export enum RtmpOutputCertificateMode {
  SELF_SIGNED = "SELF_SIGNED",
  VERIFY_AUTHENTICITY = "VERIFY_AUTHENTICITY",
}

/**
 * Rtmp Output Settings
 */
export interface RtmpOutputSettings {
  /**
   * Number of retry attempts.
   */
  NumRetries?: number;

  /**
   * If set to verifyAuthenticity, verify the tls certificate chain to a trusted Certificate Authority (CA).  This will cause rtmps outputs with self-signed certificates to fail.
   */
  CertificateMode?: RtmpOutputCertificateMode | string;

  /**
   * Number of seconds to wait before retrying a connection to the Flash Media server if the connection is lost.
   */
  ConnectionRetryInterval?: number;

  /**
   * The RTMP endpoint excluding the stream name (eg. rtmp://host/appname). For connection to Akamai, a username and password must be supplied. URI fields accept format identifiers.
   */
  Destination: OutputLocationRef | undefined;
}

export namespace RtmpOutputSettings {
  export const filterSensitiveLog = (obj: RtmpOutputSettings): any => ({
    ...obj,
  });
}

/**
 * Contains information on a single schedule action.
 */
export interface ScheduleAction {
  /**
   * The time for the action to start in the channel.
   */
  ScheduleActionStartSettings: ScheduleActionStartSettings | undefined;

  /**
   * Settings for this schedule action.
   */
  ScheduleActionSettings: ScheduleActionSettings | undefined;

  /**
   * The name of the action, must be unique within the schedule. This name provides the main reference to an action once it is added to the schedule. A name is unique if it is no longer in the schedule. The schedule is automatically cleaned up to remove actions with a start time of more than 1 hour ago (approximately) so at that point a name can be reused.
   */
  ActionName: string | undefined;
}

export namespace ScheduleAction {
  export const filterSensitiveLog = (obj: ScheduleAction): any => ({
    ...obj,
  });
}

/**
 * Holds the settings for a single schedule action.
 */
export interface ScheduleActionSettings {
  /**
   * Action to pause or unpause one or both channel pipelines
   */
  PauseStateSettings?: PauseStateScheduleActionSettings;

  /**
   * Action to insert SCTE-35 splice_insert message
   */
  Scte35SpliceInsertSettings?: Scte35SpliceInsertScheduleActionSettings;

  /**
   * Action to switch the input
   */
  InputSwitchSettings?: InputSwitchScheduleActionSettings;

  /**
   * Action to deactivate a static image overlay
   */
  StaticImageDeactivateSettings?: StaticImageDeactivateScheduleActionSettings;

  /**
   * Action to insert SCTE-35 time_signal message
   */
  Scte35TimeSignalSettings?: Scte35TimeSignalScheduleActionSettings;

  /**
   * Action to insert HLS metadata
   */
  HlsTimedMetadataSettings?: HlsTimedMetadataScheduleActionSettings;

  /**
   * Action to insert HLS ID3 segment tagging
   */
  HlsId3SegmentTaggingSettings?: HlsId3SegmentTaggingScheduleActionSettings;

  /**
   * Action to insert SCTE-35 return_to_network message
   */
  Scte35ReturnToNetworkSettings?: Scte35ReturnToNetworkScheduleActionSettings;

  /**
   * Action to activate a static image overlay
   */
  StaticImageActivateSettings?: StaticImageActivateScheduleActionSettings;

  /**
   * Action to prepare an input for a future immediate input switch
   */
  InputPrepareSettings?: InputPrepareScheduleActionSettings;
}

export namespace ScheduleActionSettings {
  export const filterSensitiveLog = (obj: ScheduleActionSettings): any => ({
    ...obj,
  });
}

/**
 * Settings to specify when an action should occur. Only one of the options must be selected.
 */
export interface ScheduleActionStartSettings {
  /**
   * Option for specifying an action that should be applied immediately.
   */
  ImmediateModeScheduleActionStartSettings?: ImmediateModeScheduleActionStartSettings;

  /**
   * Option for specifying an action as relative to another action.
   */
  FollowModeScheduleActionStartSettings?: FollowModeScheduleActionStartSettings;

  /**
   * Option for specifying the start time for an action.
   */
  FixedModeScheduleActionStartSettings?: FixedModeScheduleActionStartSettings;
}

export namespace ScheduleActionStartSettings {
  export const filterSensitiveLog = (obj: ScheduleActionStartSettings): any => ({
    ...obj,
  });
}

export enum Scte20Convert608To708 {
  DISABLED = "DISABLED",
  UPCONVERT = "UPCONVERT",
}

/**
 * Scte20 Plus Embedded Destination Settings
 */
export interface Scte20PlusEmbeddedDestinationSettings {}

export namespace Scte20PlusEmbeddedDestinationSettings {
  export const filterSensitiveLog = (obj: Scte20PlusEmbeddedDestinationSettings): any => ({
    ...obj,
  });
}

/**
 * Scte20 Source Settings
 */
export interface Scte20SourceSettings {
  /**
   * If upconvert, 608 data is both passed through via the "608 compatibility bytes" fields of the 708 wrapper as well as translated into 708. 708 data present in the source content will be discarded.
   */
  Convert608To708?: Scte20Convert608To708 | string;

  /**
   * Specifies the 608/708 channel number within the video track from which to extract captions. Unused for passthrough.
   */
  Source608ChannelNumber?: number;
}

export namespace Scte20SourceSettings {
  export const filterSensitiveLog = (obj: Scte20SourceSettings): any => ({
    ...obj,
  });
}

/**
 * Scte27 Destination Settings
 */
export interface Scte27DestinationSettings {}

export namespace Scte27DestinationSettings {
  export const filterSensitiveLog = (obj: Scte27DestinationSettings): any => ({
    ...obj,
  });
}

/**
 * Scte27 Source Settings
 */
export interface Scte27SourceSettings {
  /**
   * The pid field is used in conjunction with the caption selector languageCode field as follows:
   *   - Specify PID and Language: Extracts captions from that PID; the language is "informational".
   *   - Specify PID and omit Language: Extracts the specified PID.
   *   - Omit PID and specify Language: Extracts the specified language, whichever PID that happens to be.
   *   - Omit PID and omit Language: Valid only if source is DVB-Sub that is being passed through; all languages will be passed through.
   */
  Pid?: number;
}

export namespace Scte27SourceSettings {
  export const filterSensitiveLog = (obj: Scte27SourceSettings): any => ({
    ...obj,
  });
}

export enum Scte35AposNoRegionalBlackoutBehavior {
  FOLLOW = "FOLLOW",
  IGNORE = "IGNORE",
}

export enum Scte35AposWebDeliveryAllowedBehavior {
  FOLLOW = "FOLLOW",
  IGNORE = "IGNORE",
}

export enum Scte35ArchiveAllowedFlag {
  ARCHIVE_ALLOWED = "ARCHIVE_ALLOWED",
  ARCHIVE_NOT_ALLOWED = "ARCHIVE_NOT_ALLOWED",
}

/**
 * Corresponds to SCTE-35 delivery_not_restricted_flag parameter. To declare delivery restrictions, include this element and its four "restriction" flags. To declare that there are no restrictions, omit this element.
 */
export interface Scte35DeliveryRestrictions {
  /**
   * Corresponds to SCTE-35 no_regional_blackout_flag parameter.
   */
  NoRegionalBlackoutFlag: Scte35NoRegionalBlackoutFlag | string | undefined;

  /**
   * Corresponds to SCTE-35 web_delivery_allowed_flag parameter.
   */
  WebDeliveryAllowedFlag: Scte35WebDeliveryAllowedFlag | string | undefined;

  /**
   * Corresponds to SCTE-35 archive_allowed_flag.
   */
  ArchiveAllowedFlag: Scte35ArchiveAllowedFlag | string | undefined;

  /**
   * Corresponds to SCTE-35 device_restrictions parameter.
   */
  DeviceRestrictions: Scte35DeviceRestrictions | string | undefined;
}

export namespace Scte35DeliveryRestrictions {
  export const filterSensitiveLog = (obj: Scte35DeliveryRestrictions): any => ({
    ...obj,
  });
}

/**
 * Holds one set of SCTE-35 Descriptor Settings.
 */
export interface Scte35Descriptor {
  /**
   * SCTE-35 Descriptor Settings.
   */
  Scte35DescriptorSettings: Scte35DescriptorSettings | undefined;
}

export namespace Scte35Descriptor {
  export const filterSensitiveLog = (obj: Scte35Descriptor): any => ({
    ...obj,
  });
}

/**
 * SCTE-35 Descriptor settings.
 */
export interface Scte35DescriptorSettings {
  /**
   * SCTE-35 Segmentation Descriptor.
   */
  SegmentationDescriptorScte35DescriptorSettings: Scte35SegmentationDescriptor | undefined;
}

export namespace Scte35DescriptorSettings {
  export const filterSensitiveLog = (obj: Scte35DescriptorSettings): any => ({
    ...obj,
  });
}

export enum Scte35DeviceRestrictions {
  NONE = "NONE",
  RESTRICT_GROUP0 = "RESTRICT_GROUP0",
  RESTRICT_GROUP1 = "RESTRICT_GROUP1",
  RESTRICT_GROUP2 = "RESTRICT_GROUP2",
}

export enum Scte35NoRegionalBlackoutFlag {
  NO_REGIONAL_BLACKOUT = "NO_REGIONAL_BLACKOUT",
  REGIONAL_BLACKOUT = "REGIONAL_BLACKOUT",
}

/**
 * Settings for a SCTE-35 return_to_network message.
 */
export interface Scte35ReturnToNetworkScheduleActionSettings {
  /**
   * The splice_event_id for the SCTE-35 splice_insert, as defined in SCTE-35.
   */
  SpliceEventId: number | undefined;
}

export namespace Scte35ReturnToNetworkScheduleActionSettings {
  export const filterSensitiveLog = (obj: Scte35ReturnToNetworkScheduleActionSettings): any => ({
    ...obj,
  });
}

export enum Scte35SegmentationCancelIndicator {
  SEGMENTATION_EVENT_CANCELED = "SEGMENTATION_EVENT_CANCELED",
  SEGMENTATION_EVENT_NOT_CANCELED = "SEGMENTATION_EVENT_NOT_CANCELED",
}

/**
 * Corresponds to SCTE-35 segmentation_descriptor.
 */
export interface Scte35SegmentationDescriptor {
  /**
   * Corresponds to SCTE-35 segment_num. A value that is valid for the specified segmentation_type_id.
   */
  SegmentNum?: number;

  /**
   * Holds the four SCTE-35 delivery restriction parameters.
   */
  DeliveryRestrictions?: Scte35DeliveryRestrictions;

  /**
   * Corresponds to SCTE-35 segmentation_type_id. One of the segmentation_type_id values listed in the SCTE-35 specification. On the console, enter the ID in decimal (for example, "52"). In the CLI, API, or an SDK, enter the ID in hex (for example, "0x34") or decimal (for example, "52").
   */
  SegmentationTypeId?: number;

  /**
   * Corresponds to SCTE-35 sub_segments_expected. A value that is valid for the specified segmentation_type_id.
   */
  SubSegmentsExpected?: number;

  /**
   * Corresponds to SCTE-35 segmentation_upid_type. On the console, enter one of the types listed in the SCTE-35 specification, converted to a decimal. For example, "0x0C" hex from the specification is "12" in decimal. In the CLI, API, or an SDK, enter one of the types listed in the SCTE-35 specification, in either hex (for example, "0x0C" ) or in decimal (for example, "12").
   */
  SegmentationUpidType?: number;

  /**
   * Corresponds to SCTE-35 segments_expected. A value that is valid for the specified segmentation_type_id.
   */
  SegmentsExpected?: number;

  /**
   * Corresponds to SCTE-35 sub_segment_num. A value that is valid for the specified segmentation_type_id.
   */
  SubSegmentNum?: number;

  /**
   * Corresponds to SCTE-35 segmentation_event_cancel_indicator.
   */
  SegmentationCancelIndicator: Scte35SegmentationCancelIndicator | string | undefined;

  /**
   * Corresponds to SCTE-35 segmentation_upid. Enter a string containing the hexadecimal representation of the characters that make up the SCTE-35 segmentation_upid value. Must contain an even number of hex characters. Do not include spaces between each hex pair. For example, the ASCII "ADS Information" becomes hex "41445320496e666f726d6174696f6e.
   */
  SegmentationUpid?: string;

  /**
   * Corresponds to SCTE-35 segmentation_event_id.
   */
  SegmentationEventId: number | undefined;

  /**
   * Corresponds to SCTE-35 segmentation_duration. Optional. The duration for the time_signal, in 90 KHz ticks. To convert seconds to ticks, multiple the seconds by 90,000. Enter time in 90 KHz clock ticks. If you do not enter a duration, the time_signal will continue until you insert a cancellation message.
   */
  SegmentationDuration?: number;
}

export namespace Scte35SegmentationDescriptor {
  export const filterSensitiveLog = (obj: Scte35SegmentationDescriptor): any => ({
    ...obj,
  });
}

/**
 * Scte35 Splice Insert
 */
export interface Scte35SpliceInsert {
  /**
   * When set to ignore, Segment Descriptors with noRegionalBlackoutFlag set to 0 will no longer trigger blackouts or Ad Avail slates
   */
  NoRegionalBlackoutFlag?: Scte35SpliceInsertNoRegionalBlackoutBehavior | string;

  /**
   * When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time. This only applies to embedded SCTE 104/35 messages and does not apply to OOB messages.
   */
  AdAvailOffset?: number;

  /**
   * When set to ignore, Segment Descriptors with webDeliveryAllowedFlag set to 0 will no longer trigger blackouts or Ad Avail slates
   */
  WebDeliveryAllowedFlag?: Scte35SpliceInsertWebDeliveryAllowedBehavior | string;
}

export namespace Scte35SpliceInsert {
  export const filterSensitiveLog = (obj: Scte35SpliceInsert): any => ({
    ...obj,
  });
}

export enum Scte35SpliceInsertNoRegionalBlackoutBehavior {
  FOLLOW = "FOLLOW",
  IGNORE = "IGNORE",
}

/**
 * Settings for a SCTE-35 splice_insert message.
 */
export interface Scte35SpliceInsertScheduleActionSettings {
  /**
   * Optional, the duration for the splice_insert, in 90 KHz ticks. To convert seconds to ticks, multiple the seconds by 90,000. If you enter a duration, there is an expectation that the downstream system can read the duration and cue in at that time. If you do not enter a duration, the splice_insert will continue indefinitely and there is an expectation that you will enter a return_to_network to end the splice_insert at the appropriate time.
   */
  Duration?: number;

  /**
   * The splice_event_id for the SCTE-35 splice_insert, as defined in SCTE-35.
   */
  SpliceEventId: number | undefined;
}

export namespace Scte35SpliceInsertScheduleActionSettings {
  export const filterSensitiveLog = (obj: Scte35SpliceInsertScheduleActionSettings): any => ({
    ...obj,
  });
}

export enum Scte35SpliceInsertWebDeliveryAllowedBehavior {
  FOLLOW = "FOLLOW",
  IGNORE = "IGNORE",
}

/**
 * Scte35 Time Signal Apos
 */
export interface Scte35TimeSignalApos {
  /**
   * When set to ignore, Segment Descriptors with webDeliveryAllowedFlag set to 0 will no longer trigger blackouts or Ad Avail slates
   */
  WebDeliveryAllowedFlag?: Scte35AposWebDeliveryAllowedBehavior | string;

  /**
   * When set to ignore, Segment Descriptors with noRegionalBlackoutFlag set to 0 will no longer trigger blackouts or Ad Avail slates
   */
  NoRegionalBlackoutFlag?: Scte35AposNoRegionalBlackoutBehavior | string;

  /**
   * When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time. This only applies to embedded SCTE 104/35 messages and does not apply to OOB messages.
   */
  AdAvailOffset?: number;
}

export namespace Scte35TimeSignalApos {
  export const filterSensitiveLog = (obj: Scte35TimeSignalApos): any => ({
    ...obj,
  });
}

/**
 * Settings for a SCTE-35 time_signal.
 */
export interface Scte35TimeSignalScheduleActionSettings {
  /**
   * The list of SCTE-35 descriptors accompanying the SCTE-35 time_signal.
   */
  Scte35Descriptors: Scte35Descriptor[] | undefined;
}

export namespace Scte35TimeSignalScheduleActionSettings {
  export const filterSensitiveLog = (obj: Scte35TimeSignalScheduleActionSettings): any => ({
    ...obj,
  });
}

export enum Scte35WebDeliveryAllowedFlag {
  WEB_DELIVERY_ALLOWED = "WEB_DELIVERY_ALLOWED",
  WEB_DELIVERY_NOT_ALLOWED = "WEB_DELIVERY_NOT_ALLOWED",
}

export enum SmoothGroupAudioOnlyTimecodeControl {
  PASSTHROUGH = "PASSTHROUGH",
  USE_CONFIGURED_CLOCK = "USE_CONFIGURED_CLOCK",
}

export enum SmoothGroupCertificateMode {
  SELF_SIGNED = "SELF_SIGNED",
  VERIFY_AUTHENTICITY = "VERIFY_AUTHENTICITY",
}

export enum SmoothGroupEventIdMode {
  NO_EVENT_ID = "NO_EVENT_ID",
  USE_CONFIGURED = "USE_CONFIGURED",
  USE_TIMESTAMP = "USE_TIMESTAMP",
}

export enum SmoothGroupEventStopBehavior {
  NONE = "NONE",
  SEND_EOS = "SEND_EOS",
}

export enum SmoothGroupSegmentationMode {
  USE_INPUT_SEGMENTATION = "USE_INPUT_SEGMENTATION",
  USE_SEGMENT_DURATION = "USE_SEGMENT_DURATION",
}

export enum SmoothGroupSparseTrackType {
  NONE = "NONE",
  SCTE_35 = "SCTE_35",
  SCTE_35_WITHOUT_SEGMENTATION = "SCTE_35_WITHOUT_SEGMENTATION",
}

export enum SmoothGroupStreamManifestBehavior {
  DO_NOT_SEND = "DO_NOT_SEND",
  SEND = "SEND",
}

export enum SmoothGroupTimestampOffsetMode {
  USE_CONFIGURED_OFFSET = "USE_CONFIGURED_OFFSET",
  USE_EVENT_START_DATE = "USE_EVENT_START_DATE",
}

export enum Smpte2038DataPreference {
  IGNORE = "IGNORE",
  PREFER = "PREFER",
}

/**
 * Smpte Tt Destination Settings
 */
export interface SmpteTtDestinationSettings {}

export namespace SmpteTtDestinationSettings {
  export const filterSensitiveLog = (obj: SmpteTtDestinationSettings): any => ({
    ...obj,
  });
}

/**
 * Standard Hls Settings
 */
export interface StandardHlsSettings {
  /**
   * List all the audio groups that are used with the video output stream. Input all the audio GROUP-IDs that are associated to the video, separate by ','.
   */
  AudioRenditionSets?: string;

  /**
   * Settings information for the .m3u8 container
   */
  M3u8Settings: M3u8Settings | undefined;
}

export namespace StandardHlsSettings {
  export const filterSensitiveLog = (obj: StandardHlsSettings): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for StartChannelRequest
 */
export interface StartChannelRequest {
  /**
   * A request to start a channel
   */
  ChannelId: string | undefined;
}

export namespace StartChannelRequest {
  export const filterSensitiveLog = (obj: StartChannelRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for StartChannelResponse
 */
export interface StartChannelResponse {
  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   */
  Destinations?: OutputDestination[];

  /**
   * Encoder Settings
   */
  EncoderSettings?: EncoderSettings;

  /**
   * The log level being written to CloudWatch Logs.
   */
  LogLevel?: LogLevel | string;

  /**
   * Placeholder documentation for InputSpecification
   */
  InputSpecification?: InputSpecification;

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   */
  RoleArn?: string;

  /**
   * List of input attachments for channel.
   */
  InputAttachments?: InputAttachment[];

  /**
   * The name of the channel. (user-mutable)
   */
  Name?: string;

  /**
   * Placeholder documentation for ChannelState
   */
  State?: ChannelState | string;

  /**
   * The endpoints where outgoing connections initiate from
   */
  EgressEndpoints?: ChannelEgressEndpoint[];

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * The unique arn of the channel.
   */
  Arn?: string;

  /**
   * The unique id of the channel.
   */
  Id?: string;

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   */
  ChannelClass?: ChannelClass | string;

  /**
   * Runtime details for the pipelines of a running channel.
   */
  PipelineDetails?: PipelineDetail[];

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;
}

export namespace StartChannelResponse {
  export const filterSensitiveLog = (obj: StartChannelResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for StartMultiplexRequest
 */
export interface StartMultiplexRequest {
  /**
   * The ID of the multiplex.
   */
  MultiplexId: string | undefined;
}

export namespace StartMultiplexRequest {
  export const filterSensitiveLog = (obj: StartMultiplexRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for StartMultiplexResponse
 */
export interface StartMultiplexResponse {
  /**
   * Configuration for a multiplex event.
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * The unique id of the multiplex.
   */
  Id?: string;

  /**
   * The current state of the multiplex.
   */
  State?: MultiplexState | string;

  /**
   * A list of availability zones for the multiplex.
   */
  AvailabilityZones?: string[];

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * The name of the multiplex.
   */
  Name?: string;

  /**
   * A list of the multiplex output destinations.
   */
  Destinations?: MultiplexOutputDestination[];

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * The unique arn of the multiplex.
   */
  Arn?: string;

  /**
   * The number of programs in the multiplex.
   */
  ProgramCount?: number;
}

export namespace StartMultiplexResponse {
  export const filterSensitiveLog = (obj: StartMultiplexResponse): any => ({
    ...obj,
  });
}

/**
 * Settings to identify the start of the clip.
 */
export interface StartTimecode {
  /**
   * The timecode for the frame where you want to start the clip. Optional; if not specified, the clip starts at first frame in the file. Enter the timecode as HH:MM:SS:FF or HH:MM:SS;FF.
   */
  Timecode?: string;
}

export namespace StartTimecode {
  export const filterSensitiveLog = (obj: StartTimecode): any => ({
    ...obj,
  });
}

/**
 * Settings for the action to activate a static image.
 */
export interface StaticImageActivateScheduleActionSettings {
  /**
   * The time in milliseconds for the image to fade in. The fade-in starts at the start time of the overlay. Default is 0 (no fade-in).
   */
  FadeIn?: number;

  /**
   * Opacity of image where 0 is transparent and 100 is fully opaque. Default is 100.
   */
  Opacity?: number;

  /**
   * Applies only if a duration is specified. The time in milliseconds for the image to fade out. The fade-out starts when the duration time is hit, so it effectively extends the duration. Default is 0 (no fade-out).
   */
  FadeOut?: number;

  /**
   * The height of the image when inserted into the video, in pixels. The overlay will be scaled up or down to the specified height. Leave blank to use the native height of the overlay.
   */
  Height?: number;

  /**
   * Placement of the top edge of the overlay relative to the top edge of the video frame, in pixels. 0 (the default) is the top edge of the frame. If the placement causes the overlay to extend beyond the bottom edge of the underlying video, then the overlay is cropped on the bottom.
   */
  ImageY?: number;

  /**
   * Placement of the left edge of the overlay relative to the left edge of the video frame, in pixels. 0 (the default) is the left edge of the frame. If the placement causes the overlay to extend beyond the right edge of the underlying video, then the overlay is cropped on the right.
   */
  ImageX?: number;

  /**
   * The number of the layer, 0 to 7. There are 8 layers that can be overlaid on the video, each layer with a different image. The layers are in Z order, which means that overlays with higher values of layer are inserted on top of overlays with lower values of layer. Default is 0.
   */
  Layer?: number;

  /**
   * The duration in milliseconds for the image to remain on the video. If omitted or set to 0 the duration is unlimited and the image will remain until it is explicitly deactivated.
   */
  Duration?: number;

  /**
   * The location and filename of the image file to overlay on the video. The file must be a 32-bit BMP, PNG, or TGA file, and must not be larger (in pixels) than the input video.
   */
  Image: InputLocation | undefined;

  /**
   * The width of the image when inserted into the video, in pixels. The overlay will be scaled up or down to the specified width. Leave blank to use the native width of the overlay.
   */
  Width?: number;
}

export namespace StaticImageActivateScheduleActionSettings {
  export const filterSensitiveLog = (obj: StaticImageActivateScheduleActionSettings): any => ({
    ...obj,
  });
}

/**
 * Settings for the action to deactivate the image in a specific layer.
 */
export interface StaticImageDeactivateScheduleActionSettings {
  /**
   * The image overlay layer to deactivate, 0 to 7. Default is 0.
   */
  Layer?: number;

  /**
   * The time in milliseconds for the image to fade out. Default is 0 (no fade-out).
   */
  FadeOut?: number;
}

export namespace StaticImageDeactivateScheduleActionSettings {
  export const filterSensitiveLog = (obj: StaticImageDeactivateScheduleActionSettings): any => ({
    ...obj,
  });
}

/**
 * Static Key Settings
 */
export interface StaticKeySettings {
  /**
   * Static key value as a 32 character hexadecimal string.
   */
  StaticKeyValue: string | undefined;

  /**
   * The URL of the license server used for protecting content.
   */
  KeyProviderServer?: InputLocation;
}

export namespace StaticKeySettings {
  export const filterSensitiveLog = (obj: StaticKeySettings): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for StopChannelRequest
 */
export interface StopChannelRequest {
  /**
   * A request to stop a running channel
   */
  ChannelId: string | undefined;
}

export namespace StopChannelRequest {
  export const filterSensitiveLog = (obj: StopChannelRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for StopChannelResponse
 */
export interface StopChannelResponse {
  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * The log level being written to CloudWatch Logs.
   */
  LogLevel?: LogLevel | string;

  /**
   * The endpoints where outgoing connections initiate from
   */
  EgressEndpoints?: ChannelEgressEndpoint[];

  /**
   * The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.
   */
  ChannelClass?: ChannelClass | string;

  /**
   * Placeholder documentation for ChannelState
   */
  State?: ChannelState | string;

  /**
   * The name of the channel. (user-mutable)
   */
  Name?: string;

  /**
   * The Amazon Resource Name (ARN) of the role assumed when running the Channel.
   */
  RoleArn?: string;

  /**
   * A list of destinations of the channel. For UDP outputs, there is one
   * destination per output. For other types (HLS, for example), there is
   * one destination per packager.
   */
  Destinations?: OutputDestination[];

  /**
   * Placeholder documentation for InputSpecification
   */
  InputSpecification?: InputSpecification;

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * The unique arn of the channel.
   */
  Arn?: string;

  /**
   * Runtime details for the pipelines of a running channel.
   */
  PipelineDetails?: PipelineDetail[];

  /**
   * List of input attachments for channel.
   */
  InputAttachments?: InputAttachment[];

  /**
   * The unique id of the channel.
   */
  Id?: string;

  /**
   * Encoder Settings
   */
  EncoderSettings?: EncoderSettings;
}

export namespace StopChannelResponse {
  export const filterSensitiveLog = (obj: StopChannelResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for StopMultiplexRequest
 */
export interface StopMultiplexRequest {
  /**
   * The ID of the multiplex.
   */
  MultiplexId: string | undefined;
}

export namespace StopMultiplexRequest {
  export const filterSensitiveLog = (obj: StopMultiplexRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for StopMultiplexResponse
 */
export interface StopMultiplexResponse {
  /**
   * A list of the multiplex output destinations.
   */
  Destinations?: MultiplexOutputDestination[];

  /**
   * The number of programs in the multiplex.
   */
  ProgramCount?: number;

  /**
   * The current state of the multiplex.
   */
  State?: MultiplexState | string;

  /**
   * The name of the multiplex.
   */
  Name?: string;

  /**
   * The unique id of the multiplex.
   */
  Id?: string;

  /**
   * Configuration for a multiplex event.
   */
  MultiplexSettings?: MultiplexSettings;

  /**
   * The unique arn of the multiplex.
   */
  Arn?: string;

  /**
   * The number of currently healthy pipelines.
   */
  PipelinesRunningCount?: number;

  /**
   * A list of availability zones for the multiplex.
   */
  AvailabilityZones?: string[];

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };
}

export namespace StopMultiplexResponse {
  export const filterSensitiveLog = (obj: StopMultiplexResponse): any => ({
    ...obj,
  });
}

/**
 * Settings to identify the end of the clip.
 */
export interface StopTimecode {
  /**
   * If you specify a StopTimecode in an input (in order to clip the file), you can specify if you want the clip to exclude (the default) or include the frame specified by the timecode.
   */
  LastFrameClippingBehavior?: LastFrameClippingBehavior | string;

  /**
   * The timecode for the frame where you want to stop the clip. Optional; if not specified, the clip continues to the end of the file. Enter the timecode as HH:MM:SS:FF or HH:MM:SS;FF.
   */
  Timecode?: string;
}

export namespace StopTimecode {
  export const filterSensitiveLog = (obj: StopTimecode): any => ({
    ...obj,
  });
}

/**
 * Teletext Destination Settings
 */
export interface TeletextDestinationSettings {}

export namespace TeletextDestinationSettings {
  export const filterSensitiveLog = (obj: TeletextDestinationSettings): any => ({
    ...obj,
  });
}

/**
 * Teletext Source Settings
 */
export interface TeletextSourceSettings {
  /**
   * Specifies the teletext page number within the data stream from which to extract captions. Range of 0x100 (256) to 0x8FF (2303). Unused for passthrough. Should be specified as a hexadecimal string with no "0x" prefix.
   */
  PageNumber?: string;
}

export namespace TeletextSourceSettings {
  export const filterSensitiveLog = (obj: TeletextSourceSettings): any => ({
    ...obj,
  });
}

export enum TemporalFilterPostFilterSharpening {
  AUTO = "AUTO",
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * Temporal Filter Settings
 */
export interface TemporalFilterSettings {
  /**
   * If you enable this filter, the results are the following:
   * - If the source content is noisy (it contains excessive digital artifacts), the filter cleans up the source.
   * - If the source content is already clean, the filter tends to decrease the bitrate, especially when the rate control mode is QVBR.
   */
  PostFilterSharpening?: TemporalFilterPostFilterSharpening | string;

  /**
   * Choose a filter strength. We recommend a strength of 1 or 2. A higher strength might take out good information, resulting in an image that is overly soft.
   */
  Strength?: TemporalFilterStrength | string;
}

export namespace TemporalFilterSettings {
  export const filterSensitiveLog = (obj: TemporalFilterSettings): any => ({
    ...obj,
  });
}

export enum TemporalFilterStrength {
  AUTO = "AUTO",
  STRENGTH_1 = "STRENGTH_1",
  STRENGTH_10 = "STRENGTH_10",
  STRENGTH_11 = "STRENGTH_11",
  STRENGTH_12 = "STRENGTH_12",
  STRENGTH_13 = "STRENGTH_13",
  STRENGTH_14 = "STRENGTH_14",
  STRENGTH_15 = "STRENGTH_15",
  STRENGTH_16 = "STRENGTH_16",
  STRENGTH_2 = "STRENGTH_2",
  STRENGTH_3 = "STRENGTH_3",
  STRENGTH_4 = "STRENGTH_4",
  STRENGTH_5 = "STRENGTH_5",
  STRENGTH_6 = "STRENGTH_6",
  STRENGTH_7 = "STRENGTH_7",
  STRENGTH_8 = "STRENGTH_8",
  STRENGTH_9 = "STRENGTH_9",
}

/**
 * Timecode Config
 */
export interface TimecodeConfig {
  /**
   * Threshold in frames beyond which output timecode is resynchronized to the input timecode. Discrepancies below this threshold are permitted to avoid unnecessary discontinuities in the output timecode. No timecode sync when this is not specified.
   */
  SyncThreshold?: number;

  /**
   * Identifies the source for the timecode that will be associated with the events outputs.
   * -Embedded (embedded): Initialize the output timecode with timecode from the the source.  If no embedded timecode is detected in the source, the system falls back to using "Start at 0" (zerobased).
   * -System Clock (systemclock): Use the UTC time.
   * -Start at 0 (zerobased): The time of the first frame of the event will be 00:00:00:00.
   */
  Source: TimecodeConfigSource | string | undefined;
}

export namespace TimecodeConfig {
  export const filterSensitiveLog = (obj: TimecodeConfig): any => ({
    ...obj,
  });
}

export enum TimecodeConfigSource {
  EMBEDDED = "EMBEDDED",
  SYSTEMCLOCK = "SYSTEMCLOCK",
  ZEROBASED = "ZEROBASED",
}

/**
 * Placeholder documentation for TooManyRequestsException
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  /**
   * Placeholder documentation for __string
   */
  Message?: string;
}

export namespace TooManyRequestsException {
  export const filterSensitiveLog = (obj: TooManyRequestsException): any => ({
    ...obj,
  });
}

/**
 * Ttml Destination Settings
 */
export interface TtmlDestinationSettings {
  /**
   * When set to passthrough, passes through style and position information from a TTML-like input source (TTML, SMPTE-TT, CFF-TT) to the CFF-TT output or TTML output.
   */
  StyleControl?: TtmlDestinationStyleControl | string;
}

export namespace TtmlDestinationSettings {
  export const filterSensitiveLog = (obj: TtmlDestinationSettings): any => ({
    ...obj,
  });
}

export enum TtmlDestinationStyleControl {
  PASSTHROUGH = "PASSTHROUGH",
  USE_CONFIGURED = "USE_CONFIGURED",
}

/**
 * Udp Container Settings
 */
export interface UdpContainerSettings {
  /**
   * M2ts Settings
   */
  M2tsSettings?: M2tsSettings;
}

export namespace UdpContainerSettings {
  export const filterSensitiveLog = (obj: UdpContainerSettings): any => ({
    ...obj,
  });
}

/**
 * Udp Group Settings
 */
export interface UdpGroupSettings {
  /**
   * Specifies behavior of last resort when input video is lost, and no more backup inputs are available. When dropTs is selected the entire transport stream will stop being emitted.  When dropProgram is selected the program can be dropped from the transport stream (and replaced with null packets to meet the TS bitrate requirement).  Or, when emitProgram is chosen the transport stream will continue to be produced normally with repeat frames, black frames, or slate frames substituted for the absent input video.
   */
  InputLossAction?: InputLossActionForUdpOut | string;

  /**
   * Indicates ID3 frame that has the timecode.
   */
  TimedMetadataId3Frame?: UdpTimedMetadataId3Frame | string;

  /**
   * Timed Metadata interval in seconds.
   */
  TimedMetadataId3Period?: number;
}

export namespace UdpGroupSettings {
  export const filterSensitiveLog = (obj: UdpGroupSettings): any => ({
    ...obj,
  });
}

/**
 * Udp Output Settings
 */
export interface UdpOutputSettings {
  /**
   * Destination address and port number for RTP or UDP packets. Can be unicast or multicast RTP or UDP (eg. rtp://239.10.10.10:5001 or udp://10.100.100.100:5002).
   */
  Destination: OutputLocationRef | undefined;

  /**
   * Udp Container Settings
   */
  ContainerSettings: UdpContainerSettings | undefined;

  /**
   * UDP output buffering in milliseconds. Larger values increase latency through the transcoder but simultaneously assist the transcoder in maintaining a constant, low-jitter UDP/RTP output while accommodating clock recovery, input switching, input disruptions, picture reordering, etc.
   */
  BufferMsec?: number;

  /**
   * Settings for enabling and adjusting Forward Error Correction on UDP outputs.
   */
  FecOutputSettings?: FecOutputSettings;
}

export namespace UdpOutputSettings {
  export const filterSensitiveLog = (obj: UdpOutputSettings): any => ({
    ...obj,
  });
}

export enum UdpTimedMetadataId3Frame {
  NONE = "NONE",
  PRIV = "PRIV",
  TDRL = "TDRL",
}

/**
 * Placeholder documentation for UnprocessableEntityException
 */
export interface UnprocessableEntityException extends __SmithyException, $MetadataBearer {
  name: "UnprocessableEntityException";
  $fault: "client";
  /**
   * The error message.
   */
  Message?: string;

  /**
   * A collection of validation error responses.
   */
  ValidationErrors?: ValidationError[];
}

export namespace UnprocessableEntityException {
  export const filterSensitiveLog = (obj: UnprocessableEntityException): any => ({
    ...obj,
  });
}

/**
 * Channel class that the channel should be updated to.
 */
export interface UpdateChannelClassRequest {
  /**
   * The channel class that you wish to update this channel to use.
   */
  ChannelClass: ChannelClass | string | undefined;

  /**
   * Channel Id of the channel whose class should be updated.
   */
  ChannelId: string | undefined;

  /**
   * A list of output destinations for this channel.
   */
  Destinations?: OutputDestination[];
}

export namespace UpdateChannelClassRequest {
  export const filterSensitiveLog = (obj: UpdateChannelClassRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for UpdateChannelClassResponse
 */
export interface UpdateChannelClassResponse {
  /**
   * Placeholder documentation for Channel
   */
  Channel?: Channel;
}

export namespace UpdateChannelClassResponse {
  export const filterSensitiveLog = (obj: UpdateChannelClassResponse): any => ({
    ...obj,
  });
}

/**
 * A request to update a channel.
 */
export interface UpdateChannelRequest {
  /**
   * channel ID
   */
  ChannelId: string | undefined;

  /**
   * A list of output destinations for this channel.
   */
  Destinations?: OutputDestination[];

  /**
   * The name of the channel.
   */
  Name?: string;

  /**
   * An optional Amazon Resource Name (ARN) of the role to assume when running the Channel. If you do not specify this on an update call but the role was previously set that role will be removed.
   */
  RoleArn?: string;

  /**
   * Placeholder documentation for __listOfInputAttachment
   */
  InputAttachments?: InputAttachment[];

  /**
   * The log level to write to CloudWatch Logs.
   */
  LogLevel?: LogLevel | string;

  /**
   * Specification of input for this channel (max. bitrate, resolution, codec, etc.)
   */
  InputSpecification?: InputSpecification;

  /**
   * The encoder settings for this channel.
   */
  EncoderSettings?: EncoderSettings;
}

export namespace UpdateChannelRequest {
  export const filterSensitiveLog = (obj: UpdateChannelRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for UpdateChannelResponse
 */
export interface UpdateChannelResponse {
  /**
   * Placeholder documentation for Channel
   */
  Channel?: Channel;
}

export namespace UpdateChannelResponse {
  export const filterSensitiveLog = (obj: UpdateChannelResponse): any => ({
    ...obj,
  });
}

/**
 * A request to update an input device.
 */
export interface UpdateInputDeviceRequest {
  /**
   * The settings that you want to apply to the input device.
   */
  HdDeviceSettings?: InputDeviceConfigurableSettings;

  /**
   * The unique ID of the input device. For example, hd-123456789abcdef.
   */
  InputDeviceId: string | undefined;

  /**
   * The name that you assigned to this input device (not the unique ID).
   */
  Name?: string;
}

export namespace UpdateInputDeviceRequest {
  export const filterSensitiveLog = (obj: UpdateInputDeviceRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for UpdateInputDeviceResponse
 */
export interface UpdateInputDeviceResponse {
  /**
   * The unique ARN of the input device.
   */
  Arn?: string;

  /**
   * The network MAC address of the input device.
   */
  MacAddress?: string;

  /**
   * Settings that describe an input device that is type HD.
   */
  HdDeviceSettings?: InputDeviceHdSettings;

  /**
   * The type of the input device.
   */
  Type?: InputDeviceType | string;

  /**
   * The status of the action to synchronize the device configuration. If you change the configuration of the input device (for example, the maximum bitrate), MediaLive sends the new data to the device. The device might not update itself immediately. SYNCED means the device has updated its configuration. SYNCING means that it has not updated its configuration.
   */
  DeviceSettingsSyncState?: DeviceSettingsSyncState | string;

  /**
   * The network settings for the input device.
   */
  NetworkSettings?: InputDeviceNetworkSettings;

  /**
   * The unique serial number of the input device.
   */
  SerialNumber?: string;

  /**
   * A name that you specify for the input device.
   */
  Name?: string;

  /**
   * The unique ID of the input device.
   */
  Id?: string;

  /**
   * The state of the connection between the input device and AWS.
   */
  ConnectionState?: InputDeviceConnectionState | string;
}

export namespace UpdateInputDeviceResponse {
  export const filterSensitiveLog = (obj: UpdateInputDeviceResponse): any => ({
    ...obj,
  });
}

/**
 * A request to update an input.
 */
export interface UpdateInputRequest {
  /**
   * Settings for the devices.
   */
  InputDevices?: InputDeviceRequest[];

  /**
   * The source URLs for a PULL-type input. Every PULL type input needs
   * exactly two source URLs for redundancy.
   * Only specify sources for PULL type Inputs. Leave Destinations empty.
   */
  Sources?: InputSourceRequest[];

  /**
   * Destination settings for PUSH type inputs.
   */
  Destinations?: InputDestinationRequest[];

  /**
   * Unique ID of the input.
   */
  InputId: string | undefined;

  /**
   * A list of security groups referenced by IDs to attach to the input.
   */
  InputSecurityGroups?: string[];

  /**
   * Name of the input.
   */
  Name?: string;

  /**
   * The Amazon Resource Name (ARN) of the role this input assumes during and after creation.
   */
  RoleArn?: string;

  /**
   * A list of the MediaConnect Flow ARNs that you want to use as the source of the input. You can specify as few as one
   * Flow and presently, as many as two. The only requirement is when you have more than one is that each Flow is in a
   * separate Availability Zone as this ensures your EML input is redundant to AZ issues.
   */
  MediaConnectFlows?: MediaConnectFlowRequest[];
}

export namespace UpdateInputRequest {
  export const filterSensitiveLog = (obj: UpdateInputRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for UpdateInputResponse
 */
export interface UpdateInputResponse {
  /**
   * Placeholder documentation for Input
   */
  Input?: Input;
}

export namespace UpdateInputResponse {
  export const filterSensitiveLog = (obj: UpdateInputResponse): any => ({
    ...obj,
  });
}

/**
 * The request to update some combination of the Input Security Group name and the IPv4 CIDRs the Input Security Group should allow.
 */
export interface UpdateInputSecurityGroupRequest {
  /**
   * List of IPv4 CIDR addresses to whitelist
   */
  WhitelistRules?: InputWhitelistRuleCidr[];

  /**
   * A collection of key-value pairs.
   */
  Tags?: { [key: string]: string };

  /**
   * The id of the Input Security Group to update.
   */
  InputSecurityGroupId: string | undefined;
}

export namespace UpdateInputSecurityGroupRequest {
  export const filterSensitiveLog = (obj: UpdateInputSecurityGroupRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for UpdateInputSecurityGroupResponse
 */
export interface UpdateInputSecurityGroupResponse {
  /**
   * An Input Security Group
   */
  SecurityGroup?: InputSecurityGroup;
}

export namespace UpdateInputSecurityGroupResponse {
  export const filterSensitiveLog = (obj: UpdateInputSecurityGroupResponse): any => ({
    ...obj,
  });
}

/**
 * A request to update a program in a multiplex.
 */
export interface UpdateMultiplexProgramRequest {
  /**
   * The name of the program to update.
   */
  ProgramName: string | undefined;

  /**
   * The new settings for a multiplex program.
   */
  MultiplexProgramSettings?: MultiplexProgramSettings;

  /**
   * The ID of the multiplex of the program to update.
   */
  MultiplexId: string | undefined;
}

export namespace UpdateMultiplexProgramRequest {
  export const filterSensitiveLog = (obj: UpdateMultiplexProgramRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for UpdateMultiplexProgramResponse
 */
export interface UpdateMultiplexProgramResponse {
  /**
   * The updated multiplex program.
   */
  MultiplexProgram?: MultiplexProgram;
}

export namespace UpdateMultiplexProgramResponse {
  export const filterSensitiveLog = (obj: UpdateMultiplexProgramResponse): any => ({
    ...obj,
  });
}

/**
 * A request to update a multiplex.
 */
export interface UpdateMultiplexRequest {
  /**
   * ID of the multiplex to update.
   */
  MultiplexId: string | undefined;

  /**
   * Name of the multiplex.
   */
  Name?: string;

  /**
   * The new settings for a multiplex.
   */
  MultiplexSettings?: MultiplexSettings;
}

export namespace UpdateMultiplexRequest {
  export const filterSensitiveLog = (obj: UpdateMultiplexRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for UpdateMultiplexResponse
 */
export interface UpdateMultiplexResponse {
  /**
   * The updated multiplex.
   */
  Multiplex?: Multiplex;
}

export namespace UpdateMultiplexResponse {
  export const filterSensitiveLog = (obj: UpdateMultiplexResponse): any => ({
    ...obj,
  });
}

/**
 * Request to update a reservation
 */
export interface UpdateReservationRequest {
  /**
   * Unique reservation ID, e.g. '1234567'
   */
  ReservationId: string | undefined;

  /**
   * Name of the reservation
   */
  Name?: string;
}

export namespace UpdateReservationRequest {
  export const filterSensitiveLog = (obj: UpdateReservationRequest): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for UpdateReservationResponse
 */
export interface UpdateReservationResponse {
  /**
   * Reserved resources available to use
   */
  Reservation?: Reservation;
}

export namespace UpdateReservationResponse {
  export const filterSensitiveLog = (obj: UpdateReservationResponse): any => ({
    ...obj,
  });
}

/**
 * Placeholder documentation for ValidationError
 */
export interface ValidationError {
  /**
   * Path to the source of the error.
   */
  ElementPath?: string;

  /**
   * The error message.
   */
  ErrorMessage?: string;
}

export namespace ValidationError {
  export const filterSensitiveLog = (obj: ValidationError): any => ({
    ...obj,
  });
}

/**
 * Video Codec Settings
 */
export interface VideoCodecSettings {
  /**
   * Frame Capture Settings
   */
  FrameCaptureSettings?: FrameCaptureSettings;

  /**
   * H265 Settings
   */
  H265Settings?: H265Settings;

  /**
   * H264 Settings
   */
  H264Settings?: H264Settings;
}

export namespace VideoCodecSettings {
  export const filterSensitiveLog = (obj: VideoCodecSettings): any => ({
    ...obj,
  });
}

/**
 * Video settings for this stream.
 */
export interface VideoDescription {
  /**
   * Output video height, in pixels. Must be an even number. For most codecs, you can leave this field and width blank in order to use the height and width (resolution) from the source. Note, however, that leaving blank is not recommended. For the Frame Capture codec, height and width are required.
   */
  Height?: number;

  /**
   * Output video width, in pixels. Must be an even number. For most codecs, you can leave this field and height blank in order to use the height and width (resolution) from the source. Note, however, that leaving blank is not recommended. For the Frame Capture codec, height and width are required.
   */
  Width?: number;

  /**
   * Indicates how to respond to the AFD values in the input stream. RESPOND causes input video to be clipped, depending on the AFD value, input display aspect ratio, and output display aspect ratio, and (except for FRAME_CAPTURE codec) includes the values in the output. PASSTHROUGH (does not apply to FRAME_CAPTURE codec) ignores the AFD values and includes the values in the output, so input video is not clipped. NONE ignores the AFD values and does not include the values through to the output, so input video is not clipped.
   */
  RespondToAfd?: VideoDescriptionRespondToAfd | string;

  /**
   * STRETCH_TO_OUTPUT configures the output position to stretch the video to the specified output resolution (height and width). This option will override any position value. DEFAULT may insert black boxes (pillar boxes or letter boxes) around the video to provide the specified output resolution.
   */
  ScalingBehavior?: VideoDescriptionScalingBehavior | string;

  /**
   * The name of this VideoDescription. Outputs will use this name to uniquely identify this Description.  Description names should be unique within this Live Event.
   */
  Name: string | undefined;

  /**
   * Changes the strength of the anti-alias filter used for scaling. 0 is the softest setting, 100 is the sharpest. A setting of 50 is recommended for most content.
   */
  Sharpness?: number;

  /**
   * Video codec settings.
   */
  CodecSettings?: VideoCodecSettings;
}

export namespace VideoDescription {
  export const filterSensitiveLog = (obj: VideoDescription): any => ({
    ...obj,
  });
}

export enum VideoDescriptionRespondToAfd {
  NONE = "NONE",
  PASSTHROUGH = "PASSTHROUGH",
  RESPOND = "RESPOND",
}

export enum VideoDescriptionScalingBehavior {
  DEFAULT = "DEFAULT",
  STRETCH_TO_OUTPUT = "STRETCH_TO_OUTPUT",
}

/**
 * Specifies a particular video stream within an input source. An input may have only a single video selector.
 */
export interface VideoSelector {
  /**
   * Specifies the color space of an input. This setting works in tandem with colorSpaceUsage and a video description's colorSpaceSettingsChoice to determine if any conversion will be performed.
   */
  ColorSpace?: VideoSelectorColorSpace | string;

  /**
   * The video selector settings.
   */
  SelectorSettings?: VideoSelectorSettings;

  /**
   * Applies only if colorSpace is a value other than follow. This field controls how the value in the colorSpace field will be used. fallback means that when the input does include color space data, that data will be used, but when the input has no color space data, the value in colorSpace will be used. Choose fallback if your input is sometimes missing color space data, but when it does have color space data, that data is correct. force means to always use the value in colorSpace. Choose force if your input usually has no color space data or might have unreliable color space data.
   */
  ColorSpaceUsage?: VideoSelectorColorSpaceUsage | string;
}

export namespace VideoSelector {
  export const filterSensitiveLog = (obj: VideoSelector): any => ({
    ...obj,
  });
}

export enum VideoSelectorColorSpace {
  FOLLOW = "FOLLOW",
  REC_601 = "REC_601",
  REC_709 = "REC_709",
}

export enum VideoSelectorColorSpaceUsage {
  FALLBACK = "FALLBACK",
  FORCE = "FORCE",
}

/**
 * Video Selector Pid
 */
export interface VideoSelectorPid {
  /**
   * Selects a specific PID from within a video source.
   */
  Pid?: number;
}

export namespace VideoSelectorPid {
  export const filterSensitiveLog = (obj: VideoSelectorPid): any => ({
    ...obj,
  });
}

/**
 * Video Selector Program Id
 */
export interface VideoSelectorProgramId {
  /**
   * Selects a specific program from within a multi-program transport stream. If the program doesn't exist, the first program within the transport stream will be selected by default.
   */
  ProgramId?: number;
}

export namespace VideoSelectorProgramId {
  export const filterSensitiveLog = (obj: VideoSelectorProgramId): any => ({
    ...obj,
  });
}

/**
 * Video Selector Settings
 */
export interface VideoSelectorSettings {
  /**
   * Video Selector Pid
   */
  VideoSelectorPid?: VideoSelectorPid;

  /**
   * Video Selector Program Id
   */
  VideoSelectorProgramId?: VideoSelectorProgramId;
}

export namespace VideoSelectorSettings {
  export const filterSensitiveLog = (obj: VideoSelectorSettings): any => ({
    ...obj,
  });
}

/**
 * Webvtt Destination Settings
 */
export interface WebvttDestinationSettings {}

export namespace WebvttDestinationSettings {
  export const filterSensitiveLog = (obj: WebvttDestinationSettings): any => ({
    ...obj,
  });
}
