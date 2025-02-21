// Place file inside /js/plugins
// Remember to save after adding plugins or changing parameters.
//=============================================================================
// Simple Active Time Battle
//=============================================================================
/*:
 * Version: 2024-7-28-v1.0:
 *
 *
 * 
 *
 * @plugindesc  V.2024-7-28-v.10. A simple Active Time Battle system.
 * <Simple ATB>
 *
 * @param ===GAMEPLAY===
 * @desc Parameters below this one are Gameplay-related options
 * @default .
 *
 * @param Agility Weight
 * @desc The higher this integer value, the more noticeable the difference of having high Agility vs. low Agility will be. Default 100.
 * @default 100
 *
 * @param Turn Timer
 * @desc Default: 150. The speed at the virtual "turn" value increases - this is relevant for battles with events that happen on the Nth turn, for example, or for monsters that use skills after the Nth turn, etc. The value entered here will be how much "Agility" the turn timer has. This is invisible to the player.
 * @default 150
 * 
 * @param Average Turn Timer
 * @desc 1 = Create a Turn Timer based on the average agility of all Battlers present. 0 = Use the provided turn timer above. Default: 0
 * @default 1
 *
 * @param Base Fill Speed
 * @desc Default: 100. The base speed that the bar fills by itself, also affect Turn Timer in the same way.
 * @default 100
 *
 * @param Display Fight / Escape at beginning of the battle
 * @desc 1 = yes; 0 = no. Default: 0
 * @default 0
 * 
 * @param Allow Escape During Battle
 * @desc 1 = yes; 0 = no. Default: 0
 * @default 0
 * 
 * @param Starting ATB
 * @desc Multiplied by Agility and Agility Weight/100. Default: 50
 * @default 50
 * 
 * @param Starting ATB Random Bonus
 * @desc Maximum random bonus for ATB at battle start. Default: 0
 * @default 0
 * 
 * @param Full ATB Gauge
 * @desc The value of a full ATB Gauge. Default: 50000
 * @default 50000
 * 
 * @param Instant ATB
 * @desc 1: ON, 0: OFF. Default: 0; Jumps instantly from a turn to the next. Best for CTB style.
 * @default 0
 * 
 * @param Battle Event Turn
 * @desc 0: Per timer, 1: per action. Advances the Battle Turn for Events and monster AI. Default: 0
 * @default 0
 * 
 * @param Battler EndTurn Effects
 * @desc 0: per timer, 1: per action. Def: 0. Whether "end of turn" for battlers is at turn timer or after they act.
 * @default 0
 * 
 * @param Interrupt Compensation Pct
 * @desc What % of the ATB spent in casting is salvaged when interrupted. Default: 25
 * @default 25
 * 
 * @param Interrupt Compensation Max
 * @default Maximum % of a full ATB gauge that can be given as compensation when interrupted. Default: 50
 * @default 50
 * 
 * @param Maximum Delay Percent
 * @default Maximum that a skill can be delayed, as a % of its cast time. Default: 100
 * @default 100
 * 
 * @param Default Delay
 * @default How much % a skill get delayed when hit by a delaying effect. Default: 10
 * @default 10
 * 
 * @param Delayable by Default
 * @default 0: No, 1: Yes. Whether every skill is delayable by default.
 * @default 0
 * 
 * @param Delays by Default
 * @default 0: No, 1: Yes. Whether every skill applies delay by default.
 * @default 1
 * 
 * @param Default Cast Paramater
 * @default Default: agi. Other options: atk, def, mat, mdf, luk, hp, mp...
 * @default agi
 * 
 * @param ===SOUND FX===
 * @desc You can override those settings per actor, view HELP.
 * @default .
 * 
 * @param Play SE
 * @desc Whether to play SE when Actor is ready. 0 = OFF; 1 = ON. Default: 0
 * @default 0
 * 
 * @param SE Name
 * @desc The name of the default Sound Effect file (inside /audio/se), sans extension.
 * @default Cursor3
 * 
 * @param SE Volume
 * @desc The default volume for SE (from 0 to 100). Default: 75
 * @default 75
 * 
 * @param SE Pitch
 * @desc The default pitch for SE (from 50 to 150). Default: 100
 * @default 100
 * 
 * @param SE Pan
 * @desc The default pan for the SE (from -100 to 100). Default: 0
 * @default 0
 * 
 * @param ===GAUGE HUD====
 * @desc Parameters below this one are related to the ATB Gauge interface
 * @default .
 * 
 * @param Display Gauges
 * @desc 1 = ON; 0 = OFF. Default: 1. If off, all gauge settings are ignored.
 * @default 1
 * 
 * @param Actor Name Width
 * @desc Default: 120.
 * @default 120
 * 
 * @param Actor Name X Offset
 * @desc Default: 0.
 * @default 0
 * 
 * @param Actor State Icons X Offset
 * @desc Default: 0.
 * @default 0
 *
 * @param Gauge Name
 * @desc What label to show on the ATB gauge.
 * @default AT
 * 
 * @param Cast Gauge Name
 * @desc What label to show on the cast gauge.
 * @default Cast
 *
 * @param Use Skill Name for Cast Gauge
 * @desc 0: OFF, 1: ON. Default: 1
 * @default 1
 * 
 * @param Reversed Cast Gauge
 * @desc 0: OFF, 1: ON. Default: 0.
 * @default 0
 *
 * @param Gauge Color 1
 * @desc First color of the gauge gradient. Default: #505060
 * @default #505060
 *
 * @param Gauge Color 2
 * @desc Second color of the gauge gradient. Default: #D5D5E0
 * @default #D5D5E0
 * 
 * @param Cast Gauge Color 1
 * @desc First color of the cast gauge gradient. Default: #8E0B8A
 * @default #8E0B8A
 *
 * @param Cast Gauge Color 2
 * @desc Second color of the cast gauge gradient. Default: #EA7BD9
 * @default #EA7BD9
 * 
 * @param Interruptible Gauge Color 1
 * @desc First color of the interruptible cast gauge gradient. Default: #D5D315
 * @default #D5D315
 * 
 * @param Interruptible Gauge Color 2
 * @desc Second color of the interruptible cast gauge gradient. Default: #EDEE87
 * @default #EDEE87
 * 
 * @param Positive Haste Gauge Color 1
 * @desc ATB Gauge when hasted. Default: #ECAA93
 * @default #ECAA93
 * 
 * @param Positive Haste Gauge Color 2
 * @desc ATB Gauge when hasted. Default: #E6BA98
 * @default #E6BA98
 * 
 * @param Negative Haste Gauge Color 1
 * @desc ATB Gauge when slowed. Default: #1D5E86
 * @default #1D5E86
 * 
 * @param Negative Haste Gauge Color 2
 * @desc ATB Gauge when slowed. Default: #2191A1
 * @default #2191A1
 * 
 * @param Zero Haste Gauge Color 1
 * @desc ATB Gauge when stopped. Default: #430F0F
 * @default #430F0F
 * 
 * @param Zero Haste Gauge Color 2
 * @desc ATB Gauge when stopped. Default: #4B1618
 * @default #4B1618
 * 
 * @param ATB Gauge Text Width
 * @desc Width area for the text. Default: 60
 * @default 60
 * 
 * @param Gauge Area Size
 * @desc Width of the area for gauges. Default: 400
 * @default 400
 * 
 * @param ==POS WITH TP==
 * @desc Those affect the positions of gauge when you have TP Display enabled.
 * @default .
 * 
 * @param HP Gauge X Position (with TP)
 * @desc Default: 0
 * @default 0
 * 
 * @param HP Gauge Width (with TP)
 * @desc Default: 97
 * @default 97
 * 
 * @param MP Gauge X Position (with TP)
 * @desc Default: 112
 * @default 112
 * 
 * @param MP Gauge Width (with TP)
 * @desc Default: 86
 * @default 86
 * 
 * @param TP Gauge X Position
 * @desc Default: 213
 * @default 213
 * 
 * @param TP Gauge Width
 * @desc Default: 86
 * @default 86
 * 
 * @param ATB Gauge X Position (with TP)
 * @desc Default: 314
 * @default 314
 * 
 * @param ATB Gauge Width (with TP)
 * @desc Default: 86
 * @default 86
 * 
 * @param ==POS WITHOUT TP==
 * @desc Those affect the positions of gauge when you have TP Display disabled.
 * @default .
 * 
 * @param HP Gauge X Position
 * @desc Default: 0
 * @default 0
 * 
 * @param HP Gauge Width
 * @desc Default: 130
 * @default 130
 * 
 * @param MP Gauge X Position
 * @desc Default: 145
 * @default 145
 * 
 * @param MP Gauge Width
 * @desc Default: 120
 * @default 120
 * 
 * @param ATB Gauge X Position
 * @desc Default: 280
 * @default 280
 * 
 * @param ATB Gauge Width
 * @desc Default: 120
 * @default 120
 *
 * @param ===TURN ORDER HUD===
 * @desc Parameters bellow this one are related to the turn order display
 * @default .
 *
 * @param Display Predicted Turn Order
 * @desc 1 = yes, 0 = no. Default: 0
 * @default 0
 *
 * @param Display as Faces or Names
 * @desc 1 = Faces, 0 = Names. See Help. Default: 0
 * @default 0
 * 
 * @param Invert TO Direction
 * @desc 0 = Left-to-Right; 1 = Right-to-Left. Default: 0
 * @default 0
 * 
 * @param Opacity First TO
 * @desc Opacity of the first actor window (from 0 to 255). Default: 220
 * @default 220
 * 
 * @param Opacity Last TO
 * @desc Opacity of the last actor window (from 0 to 255). Default: 160. To disable gradient, set the same value as above.
 * @default 160
 * 
 * @param Resize Skill and Item Window
 * @desc 1: ON, 0: OFF. Default: 1. To allow room for the turn prediction interface (only if it's enabled)
 * @default 1
 * 
 * @param Prediction Bonus
 * @desc String to show when predicting a buff to ATB. Default: ▲. Leave blank for none.
 * @default ▲
 * 
 * @param Prediction Malus
 * @desc String to show when predicting a buff to ATB. Default: ▼. Leave blank for none.
 * @default ▼
 * 
 * @param Prediction Cast
 * @desc String to show when predicting a buff to ATB. Default: ♦. Leave blank for none.
 * @default ♦
 * 
 * @param Prediction Bonus Color
 * @desc Color for the bonus string. Default: #62D962
 * @default #62D962
 * 
 * @param Prediction Malus Color
 * @desc Color for the malus string. Default: #D96262
 * @default #D96262
 * 
 * @param Prediction Cast Color
 * @desc Color for the cast string. Default: #8662D9
 * @default #8662D9
 * 
 * @param ===ENEMY GAUGES===
 * 
 * @param Display Enemy Cast Gauges
 * @desc 0 = off; 1 = on. Default: 1
 * @default 1
 * 
 * @param Display Enemy ATB Gauges
 * @desc 0 = off, 1 = on. Default: 0
 * @default 0
 * 
 * @param Enemy Gauge Opacity
 * @desc From 0 to 255 (Default: 200)
 * @default 200
 * 
 * @param Enemy Show Cast Name
 * @desc 0 = Show no text; 1 = Show skill name; 2 = Show gauge name. Default: 1
 * @default 1
 * 
 * @param Enemy Show Name
 * @desc 0 = Show no text; 1 = Show enemy name; 2 = Show gauge name. Default: 1
 * @default 1
 * 
 * @param Enemy Gauge Color1
 * @desc Default: #FA8691
 * @default #FA8691
 * 
 * @param Enemy Gauge Color2
 * @desc Default: #F0B8C8
 * @default #F0B8C8
 *
 * @param ===MISC UI===
 * @desc Other UI related options
 * @default .
 *
 * @param Step Forward When Ready
 * @desc Whether actors should step forward when its their time for input. 1: ON. 0: OFF. Default: 1
 * @default 1
 * 
 * @param Default Cast Motion
 * @desc 0: none, 1: chant, 2: skill, 3: item, 4: spell. Default: 1
 * @default 1
 * 
 * @param Default Cast Animation
 * @desc The ID of the default Animation. 0 for none. Suggested (from default DB): 52. Default: 0
 * @default 0
 * 
 * @param Interrupt Animation
 * @desc Battle animation to be played when a skill is interrupted. Suggestion: create one with flash and sound only. Default: 0
 * @default 0
 *  
 * @help Actors will act as frequently as their AGILITY attribute allows them to, instead of taking fixed turns.
 * They will have an "ATB" Gauge in the interface that goes from 0 to 1000, and they will get a turn to act when it reaches 1000.
 * Gauges are paused while the player is deciding on a command, or while an animation is being played.
 * A full gauge requires 50000 ATB by default (excess ATB is not lost, and the number can be negative).
 * 
 * USING THE [NOTE] FIELD TO SETUP SKILLS THAT INTERACT WITH ATB:
 * In each Skill or Combat Usable Item, you can set up [NOTE]s that interact with the ATB system.
 * There's the following notes:
 * <self_atb:FORMULA>
 * <target_atb:FORMULA>
 * 
 * It's important to note that those need to be ARITHMETICAL FORMULAS, not commands.
 * The following examples are valid:
 * <self_atb:25000> #This would make a quick skill, as your next turn will come faster.
 * <self_atb:-25000> #This one would delay your next turn
 * <self_atb:50*a.agi - 20*b.agi> #This would give the user some ATB based on the difference of AGI between him and the target
 * <target_atb:25000> #This would GIVE the target some atb, making his turn come quicker.
 * <target_atb:-10000> #This would DELAY the target next turn
 * <target_atb:-50*(3*a.mat - b.mdf)> #This would DELAY the target next turn based on the difference between the attacker Magic Attack and the target Magic Defense
 * 
 * So:
 * It needs to be a formula that results in a NUMBER, not a command. Do not use "a.atb+=5000;" or similar assignments.
 * You do can use methods like Math.random or Math.Max; you do can use if-else conditions; just make sure that the end result will be a number and that you aren't executing any action except calculating that number.
 * POSITIVE numbers will always GIVE ATB, no matter if for caster or target.
 * NEGATIVE numbers will always REMOVE ATB, no matter if for caster or target.
 * Important note about SKILL WITH MULTIPLE TARGET: The "self_atb" parameter applies ONCE PER TARGET HIT, so balance accordingly (this was also the case with the Formula field).
 * 
 * If you use Display Faces, your enemies require to have a face configured in the Database Editor.
 * In the [Notes] field, you should add, for example: <face_name:Monster><face_id:2> - this would use the RTP Orc face.
 * In that example <face_name> receives the name of the file, and face_id the index of the face, counting left-to-right, top first, then bottom. Starts at 0.
 * 
 * You can set up Actor-specific ready Sound Effects (if you enable Play SE). It's similar to the way monster faces are set up.
 * In the [Notes] field of an actor, you can enter: <se_name:Bow4><se_volume:100><se_pitch:150> to play the sound "Bow4" at those settings whenever that Actor is ready, for example.
 * 
 * CASTING TIMES:
 * You can now set up casting times by adding:
 * <cast_time:NUMBER>
 * On the [Note] tag of a skill. For example, <cast_time:25000> would require the same time as half of a full default ATB gauge.
 * 
 * Skills with casting time can also be marked with
 * <interruptible>
 * (or <interruptable>)
 * 
 * This means that they will be broken when hit by a skill that is marked as:
 * <interrupt>
 * (or <interrupts>)
 * 
 * By default, interruptable skills have a different cast gauge color.
 * You can also set up an Animation to play whenever a skill is successfully interrupted.
 * SUGGESTION: Create a new Animation with just a flash and some sound effect to use for this, most of the default VFXs are too fancy for that (keep in mind that this plays together with the hit vfx).
 * 
 * For the DELAY system, you can set default delay parameters in the Plugin Paramaters, and customize them per skill with the following notes:
 * 
 * <delayable> 
 * Will mark a skill as delayable, regardless of default settings. 
 * 
 * <not_delayable>
 * Will mark a skill as not delayable, regardless of default settings.
 * 
 * <delays>
 * Will make a skill apply delay regardless of default settings. If no <delay_amount> is specified, it will use the default delay amount. Will also delay even if it targets ally (by default this doesn't happen)
 * 
 * <delay_amount:NUMBER>
 * The amount (a % of the total cast time) of delay to be applied. For example, 25 means that it will bring the casting bar down by 25% of its maximum value. If you set to 0, no delay will be applied (in case you're using Delays by Default parameter).
 * 
 * 
 * Another notes you can have for casting skills:
 * <cast_animation:NUMBER>
 * This is the number of an Animation (from the Animations tab in the database) to be cast at the start of the cast.
 * 
 * <cast_motion:MOTION>
 * The movement your character does while casting. Some valid options are:
 * <cast_motion:spell>, <cast_motion:skill>, <cast_motion:item>, <cast_motion:chant>, <cast_motion:swing>, <cast_motion:thrust>, <cast_motion:missile>, <cast_motion:wait>
 * 
 * <cast_param:PARAM>
 * Will use that Param instead of the default (agi, normally) for casting that skill. For example: 
 * <cast_param:mat> will use MAT instead of AGI.
 * 
 * STATES:
 * If you want a State to count down per action taken, you set it up as Action End.
 * If you want a State to count down per virtual turn, you set it up as Turn End.
 * 
 * Optionally, you can also opt to use neither of those and instead have your state timed by ATB gauge  (can also be used together with the above, whichever comes first will remove the state)
 * This might be the optimal design overall for the ATB system, at least for states that directly affect the ATB gauge:
 * To do so, use the following tag:
 * <atb_duration:NUMBER>
 * For example, 150000 would last the normal duration of three turns for that actor (not taking modifiers like haste in consideration). 
 * Optionally, you can also specify which parameter is used for the speed at which the state comes out. To do so, use:
 * <atb_duration_param:atk>, <atb_duration_param:def>, <atb_duration_param:mat>, <atb_duration_param:mdf>, <atb_duration_param:agi> or <atb_duration_param:luk>
 * You can also use <atb_duration_param:turn> to make it follow Turn Timer and be independent of the target's parameters.
 *
 * 
 * STARTING ATB:
 * You can use the note-tag
 * <start_atb:NUMBER>
 * On actors, classes, equips and enemies to set up bonus starting ATB (absolute vlaues).
 * 
 * HASTE:
 * You can use the note-tags:
 * <haste:NUMBER>
 * <haste_atb:NUMBER>
 * <haste_cast:NUMBER>
 * This is a multiplicative percent change to all speeds, atb-only speed or cast-only speed.
 * A value of "<haste:100>" means no change. A value of "<haste:200>" would mean double speed, for example, while a value of "<haste:50>" would mean half speed.
 * Those tags can be used on Actors, Classes, Equips and Enemies.
 * 
 */

//Our plugin needs to be inside a function:

var Imported = Imported || {};
Imported.Simple_ATB = true;

(function() {

    var parameters = $plugins.filter(function(p) {
        return p.description.contains('<Simple ATB>');
    })[0].parameters; //Thanks to Iavra
    var turn_atb = 0;
    var ctb_window_width = 90;
    var ctb_window_height = 60;
    var turns_to_predict = Math.floor((SceneManager._boxWidth / ctb_window_width));
    var ctb_window_x_offset = (SceneManager._boxWidth - turns_to_predict * ctb_window_width) / 2;
    var full_atb = Number(parameters['Full ATB Gauge'] || 50000);
    var agi_weight = Number(parameters['Agility Weight'] || 100);
    var turn_timer = Number(parameters['Turn Timer'] || 150);
    var av_turn_timer = Number(parameters['Average Turn Timer'] || 1);
    var base_atb_increase = Number(parameters['Base Fill Speed'] || 100);
    var display_gauges = Number(parameters['Display Gauges'] || 1);
    var actor_name_x_offset = Number(parameters['Actor Name X Offset'] || 0);
    var actor_icons_x_offset = Number(parameters['Actor Icons X Offset'] || 0);
    var actor_name_width = Number(parameters['Actor Name Width'] || 120);
    var gauge_name = String(parameters['Gauge Name'] || "");
    var cast_gauge_name = String(parameters['Cast Gauge Name'] || "");
    var use_skill_name_gauge = Number(parameters['Use Skill Name for Cast Gauge'] || 0);
    var display_party_command = Number(parameters['Display Fight / Escape at beginning of the battle'] || 0);
    var allow_midbattle_escape = Number(parameters['Allow Escape During Battle'] || 0);
    if (allow_midbattle_escape === 1)
    {
        display_party_command = 1;
    }
    var starting_atb = Number(parameters['Starting ATB'] || 50);
    var starting_atb_random = Number(parameters['Starting ATB Random Bonus'] || 0);
    var display_turn_order = Number(parameters['Display Predicted Turn Order'] || 0);
    var display_as_faces_or_names = Number(parameters['Display as Faces or Names'] || 0);
    var invert_turn_order_display = Number(parameters['Invert TO Direction'] || 0);
    var ctb_opacity_first = Number(parameters['Opacity First TO'] || 220);
    var ctb_opacity_last = Number(parameters['Opacity Last TO'] || 160);
    var resize_skill_window = Number(parameters['Resize Skill and Item Window'] || 1);
    var atb_gauge_width = Number(parameters['ATB Gauge Width'] || 120);
    var atb_gauge_color1 = String(parameters['Gauge Color 1'] || "#505060");
    var atb_gauge_color2 = String(parameters['Gauge Color 2'] || "#D5D5E0");
    var cast_gauge_color1 = String(parameters['Cast Gauge Color 1'] || "#8E0B8A");
    var cast_gauge_color2 = String(parameters['Cast Gauge Color 2'] || "#EA7BD9");
    var gauge_area_size = Number(parameters['Gauge Area Size'] || 400);
    var gauge_text_width = Number(parameters['ATB Gauge Text Width'] || 120);
    var hp_gauge_x_tp = Number(parameters['HP Gauge X Position (with TP)'] || 0);
    var mp_gauge_x_tp = Number(parameters['MP Gauge X Position (with TP)'] || 112);
    var tp_gauge_x = Number(parameters['TP Gauge X Position'] || 213);
    var atb_gauge_x_tp = Number(parameters['ATB Gauge X Position (with TP)'] || 314);
    var hp_gauge_width_tp = Number(parameters['HP Gauge Width (with TP)'] || 97);
    var mp_gauge_width_tp = Number(parameters['MP Gauge Width (with TP)'] || 86);
    var tp_gauge_width = Number(parameters['TP Gauge Width'] || 86);
    var atb_gauge_width_tp = Number(parameters['ATB Gauge Width (with TP)'] || 86);
    var hp_gauge_x = Number(parameters['HP Gauge X Position'] || 0);
    var mp_gauge_x = Number(parameters['MP Gauge X Position'] || 145);
    var atb_gauge_x = Number(parameters['ATB Gauge X Position'] || 280);
    var hp_gauge_width = Number(parameters['HP Gauge Width'] || 130);
    var mp_gauge_width = Number(parameters['MP Gauge Width'] || 120);
    var atb_gauge_width = Number(parameters['ATB Gauge Width'] || 120);
    var se_enabled = Number(parameters['Play SE'] || 0);
    var se_name = String(parameters['SE Name'] || "Cursor3");
    var se_volume = Number(parameters['SE Volume'] || 75);
    var se_pitch = Number(parameters['SE Pitch'] || 100);
    var se_pan = Number(parameters['SE Pan'] || 0);
    var step_forward = Number(parameters['Step Forward When Ready'] || 1);
    var instant_atb = Number(parameters['Instant ATB'] || 0);
    var battle_event_turn_mode = Number(parameters['Battle Event Turn'] || 0);
    var enemy_gauge_position = Number(parameters['Enemy Gauge Position'] || 0);
    var enemy_gauge_opacity = Number(parameters['Enemy Gauge Opacity'] || 200);
    var enemy_show_cast_name = Number(parameters['Enemy Show Cast Name'] || 1);
    var enemy_show_name = Number(parameters['Enemy Show Name'] || 1);
    var display_enemy_cast_gauges = Number(parameters['Display Enemy Cast Gauges'] || 1);
    var display_enemy_atb_gauges = Number(parameters['Display Enemy ATB Gauges'] || 0);
    var enemy_gauge_color1 = String(parameters['Enemy Gauge Color1'] || "#F5818B");
    var enemy_gauge_color2 = String(parameters['Enemy Gauge Color2'] || "#EBB3C3");
    var reversed_cast_gauge = Number(parameters['Reversed Cast Gauge'] || 0);
    var default_cast_motion = Number(parameters['Default Cast Motion'] || 1);
    var default_cast_vfx = Number(parameters['Default Cast Animation'] || 0);
    var interrupt_compensation_pct = Number(parameters['Interrupt Compensation Pct'] || 25);
    var interrupt_compensation_max = Number(parameters['Interrupt Compensation Max'] || 50);
    var interrupt_vfx = Number(parameters['Interrupt Animation'] || 0);
    var interrupt_gauge_color1 = String(parameters['Interruptible Gauge Color 1'] || "#D5D315");
    var interrupt_gauge_color2 = String(parameters['Interruptible Gauge Color 2'] || "#EDEE87");
    var ctb_bonus = String(parameters['Prediction Bonus'] || "");
    var ctb_malus = String(parameters['Prediction Malus'] || "");
    var ctb_cast = String(parameters['Prediction Cast'] || "");
    var ctb_cast_skill_name = Number(parameters['Prediction Cast Name'] || 0);
    var ctb_bonus_color = String(parameters['Prediction Bonus Color'] || "#42B942");
    var ctb_malus_color = String(parameters['Prediction Malus Color'] || "#B94242");
    var ctb_cast_color = String(parameters['Prediction Cast Color'] || "#8642B9");
    var max_delay_pct = Number(parameters['Maximum Delay Percent'] || 100);
    var default_delay_amount = Number(parameters['Default Delay'] || 10);
    var default_delayable = Number(parameters['Delayable by Default'] || 0);
    var default_delays = Number(parameters['Delays by Default'] || 1);
    var battler_end_turn_effects = Number(parameters['Battler EndTurn Effects'] || 0);
    var default_cast_parameter = String(parameters['Default Cast Paramater'] || "agi");
    var positive_haste_gauge_color1 = String(parameters['Positive Haste Gauge Color 1'] || "#ECAA93");
    var positive_haste_gauge_color2 = String(parameters['Positive Haste Gauge Color 2'] || "#E6BA98");
    var negative_haste_gauge_color1 = String(parameters['Negative Haste Gauge Color 1'] || "#1D5E86");
    var negative_haste_gauge_color2 = String(parameters['Negative Haste Gauge Color 2'] || "#2191A1");
    var zero_haste_gauge_color1 = String(parameters['Zero Haste Gauge Color 1'] || "#430F0F");
    var zero_haste_gauge_color2 = String(parameters['Zero Haste Gauge Color 2'] || "#4B1618");
   

    //==================================================
    // INTERFACE
    //==================================================

    //All of those changes depend on the Display Gauge Parameter
    if (display_gauges === 1)
    {
        //Let's increase the area for gauges in the battlescreen from the default value of 330 to 400.
        Window_BattleStatus.prototype.gaugeAreaWidth = function() {
            return gauge_area_size;
        };

        Window_BattleStatus.prototype.drawBasicArea = function(rect, actor) {
            this.drawActorName(actor, rect.x + actor_name_x_offset, rect.y, actor_name_width);
            this.drawActorIcons(actor, rect.x + actor_name_width + 4 + actor_icons_x_offset, rect.y, rect.width - actor_name_width - actor_icons_x_offset);
        };

        //let's change the DrawGaugeArea methods, to include our ATB gauge.
        //The version with TP:
        Window_BattleStatus.prototype.drawGaugeAreaWithTp = function(rect, actor) {
            this.drawActorHp(actor, rect.x + hp_gauge_x_tp, rect.y, hp_gauge_width_tp);
            this.drawActorMp(actor, rect.x + mp_gauge_x_tp, rect.y, mp_gauge_width_tp);
            this.drawActorTp(actor, rect.x + tp_gauge_x, rect.y, tp_gauge_width);
            this.drawActorATB(actor, rect.x + atb_gauge_x_tp, rect.y, atb_gauge_width_tp);
        };

        //The version without TP:
        Window_BattleStatus.prototype.drawGaugeAreaWithoutTp = function(rect, actor) {
            this.drawActorHp(actor, rect.x + hp_gauge_x, rect.y, hp_gauge_width);
            this.drawActorMp(actor, rect.x + mp_gauge_x, rect.y, mp_gauge_width);
            this.drawActorATB(actor, rect.x + atb_gauge_x, rect.y, atb_gauge_width);
        };

        //Let's create the method that prepares and calls for the drawing of the ATB or Cast gauge:
        Window_Base.prototype.drawActorATB = function(actor, x, y, width) {
            //Cast:
            var color1;
            var color2;
            if (actor.target_cast_atb !== 0)
            {
                if (actor.CastHaste() <= 0)
                {
                    color1 = zero_haste_gauge_color1;
                    color2 = zero_haste_gauge_color2;
                }
                else if (actor.IsCastInterruptible())
                {
                    color1 = interrupt_gauge_color1;
                    color2 = interrupt_gauge_color2;
                }
                else
                {
                    color1 = cast_gauge_color1;
                    color2 = cast_gauge_color2;
                }
                this.drawActorATBGauge(x, y, width, actor.castRatio(), color1, color2, actor.castName(), x, y, gauge_text_width);
            }
            //ATB:
            else
            {
                if (actor.ATBHaste() <= 0)
                {
                    color1 = zero_haste_gauge_color1;
                    color2 = zero_haste_gauge_color2;
                }
                else if (actor.ATBHaste() < 100)
                {
                    color1 = negative_haste_gauge_color1;
                    color2 = negative_haste_gauge_color2;
                }
                else if (actor.ATBHaste() > 100)
                {
                    color1 = positive_haste_gauge_color1;
                    color2 = positive_haste_gauge_color2;
                }
                else
                {
                    color1 = atb_gauge_color1;
                    color2 = atb_gauge_color2;
                }
                this.drawActorATBGauge(x, y, width, actor.atbRatio(), color1, color2, gauge_name, x, y, gauge_text_width);
            }
        };

        //The method that handles the actual gauge drawing:
        Window_Base.prototype.drawActorATBGauge = function(x, y, width, ratio, color1, color2, text, text_x, text_y, text_width)
        {
            this.drawGauge(x, y, width, ratio, color1, color2);
            this.changeTextColor(this.systemColor());
            if (typeof text !== 'undefined' && text !== null && text !== "")
            {
                this.drawText(text, text_x, text_y, text_width);
            }
        };
    }

    //If we are going to display ATB Gauges or Cast gauges for enemies
    if (display_enemy_atb_gauges === 1 || display_enemy_cast_gauges === 1)
    {
        //We initialize a _gaugeWindow var.
        _alias_spriteenemy_init = Sprite_Enemy.prototype.initMembers;
        Sprite_Enemy.prototype.initMembers = function() {
            _alias_spriteenemy_init.call(this);
            this._gaugeWindow = null;
        };

        //The method that populates it:
        _alias_spre_updatebitmap = Sprite_Enemy.prototype.updateBitmap;
        Sprite_Enemy.prototype.updateBitmap = function() {
            _alias_spre_updatebitmap.call(this);
            //Creates it once the bitmap finishes loading, for width and height information
            if (this._gaugeWindow === null && typeof this.bitmap !== 'undefined' && this.bitmap !== null && this.bitmap.height !== 0)
            {
                this._gaugeWindow = new Window_Base();
                var y = (enemy_gauge_position === 0) ? 0 : -this.bitmap.height - 36;
                var bmpwidth = this.bitmap.width;
                if (bmpwidth <= 1)
                {
                    bmpwidth = atb_gauge_width;
                    this._gaugeWindow.initialize(bmpwidth / 2, y, bmpwidth + 36, this._gaugeWindow.lineHeight() + 2 * this._gaugeWindow.standardPadding() + 26);
                    this._gaugeWindow.scale.x *= -1;
                }
                else
                {
                    this._gaugeWindow.initialize(-bmpwidth / 2, y, bmpwidth + 36, this._gaugeWindow.lineHeight() + 2 * this._gaugeWindow.standardPadding() + 26);
                }
                this._gaugeWindow.padding = 0;
                this._gaugeWindow.margin = 0;
                this._gaugeWindow.backOpacity = 0;
                this._gaugeWindow.opacity = 0;
                this._gaugeWindow.hideBackgroundDimmer();
                this._gaugeWindow.contents.paintOpacity = enemy_gauge_opacity;
                this.addChild(this._gaugeWindow);
            }
            //Updates it when conditions are met:
            if (this._gaugeWindow !== null && this._battler !== null && BattleManager._phase === 'atb')
            {
                var gaugeWidth = this.bitmap.width;
                var mirroredGauge = false;
                if (gaugeWidth <= 1)
                {
                    gaugeWidth = atb_gauge_width;
                }
                this._gaugeWindow.contents.clear();
                if (this._battler.isDead() || this._battler.isHidden())
                {
                    //Do not draw.
                }
                else if (this._battler.target_cast_atb !== 0 && display_enemy_cast_gauges === 1)
                {
                    var color1 = (this._battler.IsCastInterruptible()) ? interrupt_gauge_color1 : cast_gauge_color1;
                    var color2 = (this._battler.IsCastInterruptible()) ? interrupt_gauge_color2 : cast_gauge_color2;
                    if (this._battler.CastHaste() <= 0)
                    {
                        color1 = zero_haste_gauge_color1;
                        color2 = zero_haste_gauge_color2;
                    }
                    this._gaugeWindow.drawGauge(0, 0, gaugeWidth, this._battler.castRatio(), color1, color2);
                    if (enemy_show_cast_name === 1)
                    {
                        this._gaugeWindow.drawText(this._battler.castName(), 0, 0, gaugeWidth);
                    }
                    else if (enemy_show_cast_name === 2)
                    {
                        this._gaugeWindow.drawText(cast_gauge_name, 0, 0, gaugeWidth);
                    }
                }
                else if (display_enemy_atb_gauges === 1)
                {
                    var color1;
                    var color2;
                    if (this._battler.ATBHaste() <= 0)
                    {
                        color1 = zero_haste_gauge_color1;
                        color2 = zero_haste_gauge_color2;
                    }
                    else if (this._battler.ATBHaste() < 100)
                    {
                        color1 = negative_haste_gauge_color1;
                        color2 = negative_haste_gauge_color2;
                    }
                    else if (this._battler.ATBHaste() > 100)
                    {
                        color1 = positive_haste_gauge_color1;
                        color2 = positive_haste_gauge_color2;
                    }
                    else
                    {
                        color1 = enemy_gauge_color1;
                        color2 = enemy_gauge_color2;
                    }
                    this._gaugeWindow.drawGauge(0, 0, gaugeWidth, this._battler.atbRatio(), color1, color2);
                    if (enemy_show_name === 1)
                    {
                        this._gaugeWindow.drawText(this._battler.originalName(), 0, 0, gaugeWidth);
                    }
                    else if (enemy_show_name === 2)
                    {
                        this._gaugeWindow.drawText(gauge_name, 0, 0, gaugeWidth);
                    }
                }
            }
        };
    } //End of enemy-gauge related block.

    //Let's create the method for calculating ATB percent for the gauge:
    Game_BattlerBase.prototype.atbRatio = function() {
        if (typeof this.atb !== 'undefined' && this.canMove()) {
            if (this.atb / full_atb >= 1)
            {
                return 1;
            }
            if (this.atb <= 0)
            {
                return 0;
            }
            return this.atb / full_atb;
        }
        return 0;
    };

    Game_BattlerBase.prototype.castName = function() {
        if (use_skill_name_gauge === 0)
        {
            return cast_gauge_name;
        }
        if (this.casting_action !== null && typeof this.casting_action.item() !== 'undefined' && typeof this.casting_action.item().name !== 'undefined')
        {
            return this.casting_action.item().name;
        }
        return cast_gauge_name;
    };

    //And one for calculating Cast Ratio for th gauge:
    Game_BattlerBase.prototype.castRatio = function() {
        if (this.target_cast_atb !== 0 && this.canMove())
        {
            if (this.current_cast_atb / this.target_cast_atb >= 1)
            {
                return (reversed_cast_gauge === 1) ? 0 : 1;
            }
            if (this.current_cast_atb <= 0)
            {
                return (reversed_cast_gauge === 1) ? 1 : 0;
            }
            var value = this.current_cast_atb / this.target_cast_atb;
            return (reversed_cast_gauge === 1) ? 1 - value : value;
        }
        return 0;
    };


    //Some of our interface options use faces for enemies. We use metadata for that. Let's create the method that access it:
    Game_Enemy.prototype.getFaceName = function() {
        if (typeof $dataEnemies[this._enemyId].meta.face_name !== 'undefined')
        {
            return $dataEnemies[this._enemyId].meta.face_name;
        }
        return false;
    };
    Game_Enemy.prototype.getFaceID = function() {
        if (typeof $dataEnemies[this._enemyId].meta.face_id !== 'undefined')
        {
            return $dataEnemies[this._enemyId].meta.face_id;
        }
        return false;
    };

    //Turn Order Window (if selected to be displayed):
    if (display_turn_order)
    {
        //Let's move the Battle Log window down:
        Window_BattleLog.prototype.initialize = function() {
            var width = this.windowWidth();
            var height = this.windowHeight();
            Window_Selectable.prototype.initialize.call(this, 0, ctb_window_height, width, height);
            this.opacity = 0;
            this._lines = [];
            this._methods = [];
            this._waitCount = 0;
            this._waitMode = '';
            this._baseLineStack = [];
            this._spriteset = null;
            this.createBackBitmap();
            this.createBackSprite();
            this.refresh();
        };

        //Correcting a minor mistake in the backdrop of the log window.
        //It works fine for the default position, but not for different positions like we use:
        Window_BattleLog.prototype.createBackSprite = function() {
            this._backSprite = new Sprite();
            this._backSprite.bitmap = this._backBitmap;
            this._backSprite.y = 0;
            this.addChildToBack(this._backSprite);
        };

        //Resize item and skill window if we want to:
        if (resize_skill_window === 1)
        {
            Window_Help.prototype.initialize = function(numLines) {
                var width = Graphics.boxWidth;
                var height = this.fittingHeight(numLines || 2);
                var y = ($gameParty.inBattle()) ? ctb_window_height : 0;
                Window_Base.prototype.initialize.call(this, 0, y, width, height);
                this._text = '';
            };

            _alias_scenebattle_createdisplayobjects = Scene_Battle.prototype.createDisplayObjects;
            Scene_Battle.prototype.createDisplayObjects = function() {
                $gameParty._inBattle = true; //Otherwise the party wouldn't still be consided in battle when we check for the help window
                _alias_scenebattle_createdisplayobjects.call(this);
            };
        }

        //We need to modify the Select method of the BattleSkill and BattleItem windows so that they may predict ATB changes:
        Window_BattleSkill.prototype.select = function(index) {
            Window_SkillList.prototype.select.call(this, index);
            this.predictChanges(this.item());
        };

        //Same for BattleItem
        Window_BattleItem.prototype.select = function(index) {
            Window_ItemList.prototype.select.call(this, index);
            this.predictChanges(this.item());
        };

        //For the enemy selecting window, we also need to get our action. Same for actor selecting one later.
        _alias_battle_enemy = Window_BattleEnemy.prototype.select;
        Window_BattleEnemy.prototype.select = function(index) {
            _alias_battle_enemy.call(this, index);
            var action = BattleManager.inputtingAction();
            var item = (action === null) ? null : action.item();
            this.predictChanges(item, this.enemy());
        };

        //And for actors
        _alias_battle_actor = Window_BattleActor.prototype.select;
        Window_BattleActor.prototype.select = function(index) {
            _alias_battle_actor.call(this, index);
            var action = BattleManager.inputtingAction();
            var item = (action === null) ? null : action.item();
            this.predictChanges(item, this.actor());
        };

        //Affects prediction based on selectable option
        Window_Selectable.prototype.predictChanges = function(item, target) {
            if (item === null || typeof item === 'undefined' || !$gameParty.inBattle())
            {
                return;
            }
            var a = BattleManager._subject;
            if (typeof target !== 'undefined' && target !== null)
            {
                var b = target;
            }
            else if (item.scope === 11)
            {
                var b = a;
            }
            else if ([7, 8, 9, 10].contains(item.scope))
            {
                var b = $gameParty.smoothTarget();
            }
            else
            {
                var b = $gameTroop.smoothTarget();
            }
            var v = $gameVariables._data;
            var selfATB = (typeof item.meta.self_atb !== 'undefined') ? Number(eval(item.meta.self_atb) || 0) : 0;
            var targetATB = (typeof item.meta.target_atb !== 'undefined') ? Number(eval(item.meta.target_atb) || 0) : 0;
            var castingTime = (typeof item.meta.cast_time !== 'undefined') ? Number(eval(item.meta.cast_time) || 0) : 0;
            var battlersAffected = [];
            var values = [];
            var battlerCasting = a;
            if (selfATB !== 0)
            {
                battlersAffected.push(a);
                values.push(selfATB);
            }
            if (targetATB !== 0)
            {
                if (typeof target !== 'undefined' && target !== null)
                {
                    battlersAffected.push(target);
                    values.push(targetATB);
                }
                else if ([1, 3, 7].contains(item.scope))
                {
                    //Still hasen't clicked the single target skill
                }
                else if ([2, 4, 5, 6].contains(item.scope))
                {
                    $gameTroop.aliveMembers().forEach(function(enemy) {
                        battlersAffected.push(enemy);
                        values.push;
                    }, this);
                }
                else if (item.scope === 8)
                {
                    $gameParty.aliveMembers().forEach(function(ally) {
                        battlersAffected.push(ally);
                        values.push;
                    }, this);
                }
                else if (item.scope === 10)
                {
                    $gameParty.deadMembers().forEach(function(ally) {
                        battlersAffected.push(ally);
                        values.push;
                    }, this);
                }
            }
            BattleManager.predictTurnOrder(battlersAffected, values, battlerCasting, castingTime);
        };

        //Reload Turn Order Predction when we cancel windows:
        _alias_skill_cancel = Scene_Battle.prototype.onSkillCancel;
        Scene_Battle.prototype.onSkillCancel = function() {
            BattleManager.predictTurnOrder();
            _alias_skill_cancel.call(this);
        };
        _alias_item_cancel = Scene_Battle.prototype.onItemCancel;
        Scene_Battle.prototype.onItemCancel = function() {
            BattleManager.predictTurnOrder();
            _alias_item_cancel.call(this);
        };
        _alias_enemy_cancel = Scene_Battle.prototype.onEnemyCancel;
        Scene_Battle.prototype.onEnemyCancel = function() {
            BattleManager.predictTurnOrder();
            _alias_enemy_cancel.call(this);
        };

        //We will add some new windows to Scene Battle:
        //We will have an array of Turn Order windows.
        _Scene_Battle_prototype_createAllWindows = Scene_Battle.prototype.createAllWindows;
        Scene_Battle.prototype.createAllWindows = function() {
            this._turnOrderWindows = [];
            var diff = Math.round((ctb_opacity_first - ctb_opacity_last) / (turns_to_predict - 1));
            var opacity = (invert_turn_order_display !== 1) ? ctb_opacity_first : ctb_opacity_last;
            for (index = 0; index < turns_to_predict; index++)
            {
                this._turnOrderWindows.push(new Window_CTB(ctb_window_x_offset + index * ctb_window_width, opacity));
                this.addWindow(this._turnOrderWindows[index]);
                opacity = (invert_turn_order_display !== 1) ? opacity - diff : opacity + diff;
            }
            BattleManager.setCTBWindowsArray(this._turnOrderWindows);
            _Scene_Battle_prototype_createAllWindows.call(this);
        };

        //Create a new Window for turn order (there will be an array of those)
        function Window_CTB() {
            this.initialize.apply(this, arguments);
        }

        Window_CTB.prototype = Object.create(Window_Base.prototype);
        Window_CTB.prototype.constructor = Window_CTB;

        Window_CTB.prototype.initialize = function(x, opacity) {
            Window_Base.prototype.initialize.call(this, x, 0, ctb_window_width, ctb_window_height);
            this.contents.paintOpacity = opacity;
            this.contentsWidth = function() {
                return this.width - this.padding * 2;
            };
            this.contentsHeight = function() {
                return this.height - this.padding * 2;
            };
            if (display_as_faces_or_names === 1)
            {
                this.layoutForFace();
            }
            else
            {
                this.layoutForText();
            }
        };

        //Window layout for face:
        Window_CTB.prototype.layoutForFace = function() {
            this.padding = 2;
            this.opacity = 0;
            this.hideBackgroundDimmer();
            this.layoutApply();
        };

        //Window layout for text:
        Window_CTB.prototype.layoutForText = function() {
            this.padding = 12;
            this.layoutApply();
        };

        //Window layout apply:
        Window_CTB.prototype.layoutApply = function() {
            var opacity = this.contents.paintOpacity;
            this.createContents();
            this.resetTextColor();
            this.contents.fontSize = 12;
            this.contents.paintOpacity = opacity;
        };


        //We need to be able to assign a reference to the array of CTB windows to the Battle Manager, so that it can populate it.
        BattleManager.setCTBWindowsArray = function(ctbWindowsArray) {
            this._ctbWindowsArray = ctbWindowsArray;
        };

        //The function that displays turn order:
        BattleManager.displayTurnOrder = function() {
            var predictedTurnOrder = this._predictedTurnOrder;
            var symbols = this._predictedTurnSymbols;
            if (invert_turn_order_display === 1)
            {
                predictedTurnOrder.reverse();
            }
            if (typeof this._ctbWindowsArray === 'undefined' || this._ctbWindowsArray.constructor !== Array)
            {
                return;
            }
            for (index = 0; index < predictedTurnOrder.length; index++)
            {
                if (index >= this._ctbWindowsArray.length)
                {
                    break;
                }
                var ctbWindow = this._ctbWindowsArray[index];
                ctbWindow.resetTextColor();
                ctbWindow.contents.fontSize = 12;
                var battler = predictedTurnOrder[index];

                //Case text:
                if (display_as_faces_or_names !== 1)
                {
                    var nameToDisplay = battler.isActor() ? battler._name : battler.originalName() + " " + battler._letter;
                    ctbWindow.contents.clear();
                    ctbWindow.drawText(nameToDisplay, 0, 0, ctb_window_width);
                }
                //Faces:
                else
                {
                    ctbWindow.contents.clear();
                    //For actors, we can just draw faces easily:
                    if (battler.isActor())
                    {
                        ImageManager.loadFace(battler.faceName());
                        ctbWindow.layoutForFace();
                        ctbWindow.drawActorFace(battler, 0, 0, ctb_window_width, ctb_window_height);
                    }
                    //For enemies, we need to check if they have a face set up
                    else if (battler.getFaceName() !== false && battler.getFaceID() !== false)
                    {
                        ImageManager.loadFace(battler.getFaceName());
                        ctbWindow.layoutForFace();
                        ctbWindow.drawFace(battler.getFaceName(), battler.getFaceID(), 0, 0, ctb_window_width, ctb_window_height);
                        ctbWindow.drawText(battler._letter, ctb_window_width / 2, 0, ctb_window_width);
                    }
                    //If they don't, display text:
                    else
                    {
                        ctbWindow.layoutForText();
                        var nameToDisplay = battler.originalName() + " " + battler._letter;
                        ctbWindow.drawText(nameToDisplay, 0, 0, ctb_window_width);
                    }
                }
                if (typeof symbols[index] !== 'undefined' && symbols[index] !== null && symbols[index] !== false && symbols[index] !== "")
                {

                    if (symbols[index] === ctb_bonus)
                    {
                        ctbWindow.contents.textColor = ctb_bonus_color;
                    }
                    else if (symbols[index] === ctb_malus)
                    {
                        ctbWindow.contents.textColor = ctb_malus_color;
                    }
                    else if (symbols[index] === ctb_cast)
                    {
                        ctbWindow.contents.textColor = ctb_cast_color;
                    }
                    if (display_as_faces_or_names !== 1)
                    {
                        ctbWindow.contents.fontSize = 16;
                        var y = ctb_window_height / 5;
                    }
                    else
                    {
                        ctbWindow.contents.fontSize = 24;
                        var y = ctb_window_height / 2;
                    }
                    ctbWindow.drawText(symbols[index], 0, y, ctb_window_width);
                }
            }
        };
    } //End of turn-order-display dependent stuff.

    //Play Sound Effect when ATB bar is full, if enabled:
    AudioManager.playFullATB = function(actor) {
        if (se_enabled !== 1)
        {
            return;
        }
        var se = {name: actor.getSEName(), volume: actor.getSEVolume(), pitch: actor.getSEPitch(), pan: actor.getSEPan()};
        AudioManager.playStaticSe(se);
    };

    //Get data related to Actor-specific sound, if it exists:
    Game_Actor.prototype.getSEName = function() {
        if (typeof $dataActors[this._actorId].meta.se_name !== 'undefined')
        {
            return $dataActors[this._actorId].meta.se_name;
        }
        return se_name;
    };
    Game_Actor.prototype.getSEVolume = function() {
        if (typeof $dataActors[this._actorId].meta.se_volume !== 'undefined')
        {
            return $dataActors[this._actorId].meta.se_volume;
        }
        return se_volume;
    };
    Game_Actor.prototype.getSEPitch = function() {
        if (typeof $dataActors[this._actorId].meta.se_pitch !== 'undefined')
        {
            return $dataActors[this._actorId].meta.se_pitch;
        }
        return se_pitch;
    };
    Game_Actor.prototype.getSEPan = function() {
        if (typeof $dataActors[this._actorId].meta.se_pan !== 'undefined')
        {
            return $dataActors[this._actorId].meta.se_pan;
        }
        return se_pan;
    };
    //End of Sound Effect related stuff

    //Cast motion
    Game_Battler.prototype.performCastMotion = function() {
        if (this.target_cast_atb > 0 && defaultCastMotion() !== false && BattleManager.actor() !== this && BattleManager._subject !== this)
        {
            if (this.casting_action !== null && typeof this.casting_action.item() !== 'undefined' && typeof this.casting_action.item().meta !== 'undefined' && typeof this.casting_action.item().meta.cast_motion !== 'undefined')
            {
                this.requestMotion(this.casting_action.item().meta.cast_motion);
            }
            else
            {
                this.requestMotion(defaultCastMotion());
            }
        }
    };

    //Ask cast motion for all:
    BattleManager.requestAllCastMotions = function() {
        this.aliveBattleMembers().forEach(function(battler) {
            battler.performCastMotion();
        });
    };

    _alias_sb_updateBattleProcess = Scene_Battle.prototype.updateBattleProcess;
    Scene_Battle.prototype.updateBattleProcess = function() {
        if (!BattleManager.isBattleEnd() && !BattleManager.isAborting())
        {
            BattleManager.requestAllCastMotions();
        }
        _alias_sb_updateBattleProcess.call(this);
    };

    defaultCastMotion = function() {
        switch (default_cast_motion)
        {
            case 1:
                return 'chant';
            case 2:
                return 'skill';
            case 3:
                return 'item';
            case 4:
                return 'spell';
            default:
                return false;
        }
    };

    //==================================================
    // SYSTEM
    //==================================================

    //Let's add a new property for battlers, called "atb", and two properties for the casting time system:
    Object.defineProperties(Game_BattlerBase.prototype, {
        atb: {
            writable: true,
            value: 0,
            configurable: true,
            enumerable: true
        },
        target_cast_atb: {
            writable: true,
            value: 0,
            configurable: true,
            enumerable: true
        },
        current_cast_atb: {
            writable: true,
            value: 0,
            configurable: true,
            enumerable: true
        },
        casting_action: {
            writable: true,
            value: null,
            configurable: true,
            enumerable: true
        },
        finished_casting: {
            writable: true,
            value: false,
            configurable: true,
            enumerable: true
        },
        cast_delay_current: {
            writable: true,
            value: 0,
            configurable: true,
            enumerable: true
        },
        cast_delay_max: {
            writable: true,
            value: 0,
            configurable: true,
            enumerable: true
        },
        _cast_rate: {
            writable: true,
            value: 0,
            configurable: true,
            enumerable: true
        },
        _states_atb_current: {
            writable: true,
            value: [],
            configurable: true,
            enumerable: true
        },
        _states_atb_duration: {
            writable: true,
            value: [],
            configurable: true,
            enumerable: true
        },
        _states_atb_rate: {
            writable: true,
            value: [],
            configurable: true,
            enumerable: true
        },
        _haste_all: {
            writable: true,
            value: 100,
            configurable: true,
            enumerable: true
        },
        _haste_atb: {
            writable: true,
            value: 100,
            configurable: true,
            enumerable: true
        },
        _haste_cast: {
            writable: true,
            value: 100,
            configurable: true,
            enumerable: true
        }
    });

    //A generic function for determining if there's bonus ATB rate to be had (used in class, item and enemy check)
    CheckForBonusStartingATB = function(item) {
        if (typeof item !== 'undefined' && item !== null && typeof item.meta !== 'undefined' && typeof item.meta.start_atb !== 'undefined' && !isNaN(item.meta.start_atb))
        {
            return Number(item.meta.start_atb);
        }
        return 0;
    };

    //A generic function to calculate ATB rate, used both by battlers and turn timer:
    CalculateATBRate = function(agi, haste) {
        if (typeof haste === 'undefined')
        {
            var haste = 100;
        }
        return (base_atb_increase + agi * (agi_weight / 100)) * haste / 100;
    };

    //Checks class, equips and self for bonus starting ATB:
    Game_Battler.prototype.bonusStartingATB = function()
    {
        var bonus = 0;
        if (this.isActor())
        {
            bonus += CheckForBonusStartingATB(this.actor());
            bonus += CheckForBonusStartingATB(this.currentClass());
            this.equips().forEach(function(equip)
            {
                bonus += CheckForBonusStartingATB(equip);
            }, this);
        }
        else
        {
            bonus += CheckForBonusStartingATB(this.enemy());
        }
        return bonus;
    };

    //A method to reset all cast related stuff:
    Game_Battler.prototype.resetCast = function() {
        this.setActionState('undecided');
        this.clearMotion();
        $gameParty.requestMotionRefresh();
        this.target_cast_atb = 0;
        this.current_cast_atb = 0;
        this.casting_action = null;
        this.finished_casting = false;
        this.cast_delay_current = 0;
        this.cast_delay_max = 0;
        this.calculateCastRate();
    };

    //And one to start cast:
    Game_Battler.prototype.startCast = function(castAction, castTime) {
        this.casting_action = castAction;
        this.target_cast_atb = castTime;
        this.current_cast_atb = 0;
        this.cast_delay_max = 0;
        this.calculateCastRate();
        if (this.IsCastDelayable())
        {
            this.cast_delay_max = this.target_cast_atb * max_delay_pct / 100;
        }
        if (this.casting_action !== null && typeof this.casting_action.item() !== 'undefined' && typeof this.casting_action.item().meta !== 'undefined' && typeof this.casting_action.item().meta.cast_animation !== 'undefined')
        {
            this.startAnimation(Number(this.casting_action.item().meta.cast_animation), 0, 0);
        }
        else if (default_cast_vfx > 0)
        {
            this.startAnimation(default_cast_vfx, 0, 0);
        }
    };

    //Our battlers need a property to calculate their ATB rate
    Game_Battler.prototype.calculateATBRate = function() {
        return CalculateATBRate(this.agi, this.ATBHaste());
    };

    //Haste for ATB:
    Game_Battler.prototype.ATBHaste = function() {
        return this._haste_atb * this._haste_all / 100;
    };

    //Haste for Cast:
    Game_Battler.prototype.CastHaste = function() {
        return this._haste_cast * this._haste_all / 100;
    };

    //At the start of battle, ATB values are reset to 0:
    _Game_Battler_prototype_onBattleStart = Game_Battler.prototype.onBattleStart;
    Game_Battler.prototype.onBattleStart = function() {
        this.resetCast();
        this._states_atb_current = [];
        this._states_atb_duration = [];
        this._states_atb_rate = [];
        this.CalculateHaste();
        this.atb = this.bonusStartingATB() + (Math.random() * starting_atb_random) + starting_atb * this.agi * (agi_weight / 100);
        if (BattleManager._surprise && this.isEnemy() && this.isAppeared())
        {
            this.atb += full_atb;
        }
        else if (BattleManager._preemptive && this.isActor())
        {
            this.atb += full_atb;
        }
        _Game_Battler_prototype_onBattleStart.call(this);
    };

    //Battle starts in the new phase "atb" (except if we're going to show PartyCommand).
    //And we calculate the Turn Timer if we're using Average Turn Timer
    _BattleManager_startBattle = BattleManager.startBattle;
    BattleManager.startBattle = function() {
        if (av_turn_timer === 1)
        {
            var totalAgi = 0;
            var numberOfBattlers = this.allBattleMembers().length;
            for (index = 0; index < numberOfBattlers; index++)
            {
                totalAgi += Number(this.allBattleMembers()[index].agi || 1);
            }
            turn_timer = totalAgi / numberOfBattlers;
        }
        _BattleManager_startBattle.call(this);
        $gameParty.makeActions();
        $gameTroop.makeActions();
        this.makeActionOrders();
        this.predictTurnOrder();
        this._phase = 'start';
        this._actorIndex = -1;
        this._pending_atb_removal = false;
    };

    //Skip party command if the player so wishes:
    if (display_party_command !== 1)
    {
        Scene_Battle.prototype.startPartyCommandSelection = function() {
            this.refreshStatus();
            this.commandFight();
        };
    }

    //Change the end of turn:
    BattleManager.updateTurnEnd = function() {
        $gameParty.makeActions();
        $gameTroop.makeActions();
        this._phase = 'atb';
    };

    //Changing the flow of battle
    _BattleManager_update = BattleManager.update;
    BattleManager.update = function() {
        if (!this.isBusy() && !this.updateEvent())
        {
            switch (this._phase)
            {
                case 'atb':
                    this.increaseAtbGauges();
                    break;
                default:
                    _BattleManager_update.call(this);
                    break;
            }
        }
    };

    //Increases the ATB gauges when idle:
    BattleManager.increaseAtbGauges = function() {
        var loopForInstantATB = instant_atb;
        var oneATBFilledAlready = false;
        //================================================
        //ATB LOOP
        //We need to be in a loop here if we're using instant ATB option, but run only once in other cases.
        //================================================
        do
        {
            //==========================================
            //Turn Timer
            //==========================================
            turn_atb += CalculateATBRate(turn_timer);
            //Turn timer finished:
            if (turn_atb >= full_atb)
            {
                turn_atb -= full_atb;
                //We advance the troops page (for events and AI) depending on parameter:
                if (battle_event_turn_mode === 0)
                {
                    $gameTroop.increaseTurn();
                }
                //We apply onTurnEnd if paramaters are set so
                if (battler_end_turn_effects !== 1)
                {
                    this.allBattleMembers().forEach(function(battler)
                    {
                        battler.onTurnEnd();
                        this.refreshStatus();
                        this._logWindow.displayAutoAffectedStatus(battler);
                        this._logWindow.displayRegeneration(battler);
                    }, this);
                }
            }
            //========================================
            //End of turn timer related stuff
            //========================================

            this.allBattleMembers().forEach(function(battler)
            {
                //States with ATB duration:
                battler._states_atb_duration.forEach(function(duration, stateID)
                {
                    battler._states_atb_current[stateID] += CalculateATBRate(battler._states_atb_rate[stateID], 100);
                    if (battler._states_atb_current[stateID] >= duration)
                    {
                        battler.removeState(stateID);
                    }
                }, this);

                //Dead battler has no ATB nor cast:
                if (battler.isDead())
                {
                    battler.atb = 0;
                    battler.resetCast();
                }
                //====================
                //Casting time logic:
                //====================
                //Cast finished:
                else if (battler.finished_casting === true)
                {
                    battler.resetCast();
                }
                //Currently casting:
                else if (battler.target_cast_atb > 0)
                {
                    //Got stunned or similar while casting, auto-interrupt for now:
                    if (!battler.canMove())
                    {
                        battler.BreakCurrentCast(true);
                    }
                    else
                    {
                        battler.current_cast_atb += battler._cast_rate * (battler.CastHaste() / 100);
                        if (battler.current_cast_atb >= battler.target_cast_atb && oneATBFilledAlready === false)
                        {
                            battler.finished_casting = true;
                            this.battlerHasFullAtb(battler, true);
                            oneATBFilledAlready = true;
                            loopForInstantATB = 0;
                        }
                    }
                }
                //===================
                //Not casting, ATB INCREASE:
                //===================
                else
                {
                    battler.atb += battler.calculateATBRate();
                }
                if (battler.atb >= full_atb && oneATBFilledAlready === false && battler.target_cast_atb <= 0)
                {
                    this.battlerHasFullAtb(battler);
                    oneATBFilledAlready = true;
                    loopForInstantATB = 0;
                }
            }, this);
        } while (loopForInstantATB === 1);
        //==============================
        //END OF THE ATB LOOP
        //=============================
        this.refreshStatus();
    };

    //When a Battler (might be party or enemy) has full ATB:
    BattleManager.battlerHasFullAtb = function(battler, wasCasting)
    {
        BattleManager.refreshStatus();
        if (typeof wasCasting === 'undefined')
        {
            wasCasting = false;
        }
        this.predictTurnOrder();
        this._subject = battler;
        this._turn_end_subject = battler;
        this._pending_atb_removal = true;
        //If the character already has an action that he was casting:
        if (wasCasting)
        {
            battler.setAction(0, battler.casting_action);
            this._phase = 'turn';
            return;
        }
        if (battler.isActor())
        {
            battler.makeActions();
            if (battler.canInput())
            {
                AudioManager.playFullATB(battler);
                this._actorIndex = battler.index();
                //If the Step_Forward_When_Ready parameter is turned on:
                if (step_forward === 1)
                {
                    battler.setActionState('inputting');
                    if (typeof battler.spriteStepForward === 'function')
                    {
                        //This is for compatibility with Yanfly's.
                        battler.spriteStepForward();
                    }
                }
                this._phase = 'input';
            }
            else
            {
                this._phase = 'turn';
            }
        }
        else if (battler.isEnemy())
        {
            battler.makeActions();
            if (battler.CheckIfSkillHasCastingTime())
            {
                this._phase = 'atb';
            }
            else
            {
                this._phase = 'turn';
            }
        }
    };

    //Never jumps to another battler, we will control them individually:
    BattleManager.getNextSubject = function() {
        return null;
    };

    //Process turn when we finish inputing command
    BattleManager.selectNextCommand = function() {
        do {
            if (!this.actor() || !this.actor().selectNextCommand())
            {
                $gameParty.requestMotionRefresh();
                if (this.actor() !== null && this.actor().CheckIfSkillHasCastingTime())
                {
                    this.actor().setActionState('waiting');
                    if (typeof this.actor().spriteStepBack === 'function')
                    {
                        //This is for compatibility with Yanfly's.
                        this.actor().spriteStepBack();
                    }
                    this._phase = 'atb';
                    break;
                }
                this._phase = 'turn';
                break;
            }
        } while (!this.actor().canInput());
    };

    //Don't let us jump to another character by cancelling.
    BattleManager.selectPreviousCommand = function() {
        do {
            if (!this.actor() || !this.actor().selectPreviousCommand()) {
                if (allow_midbattle_escape === 1)
                {
                    this.changeActor(-1, 'undecided');
                }
                return;
            }
        } while (!this.actor().canInput());
    };

    //We need to change the OnTurnEnd method, because otherwise it will apply to all battlers whenever anyone acts:
    BattleManager.endTurn = function() {
        this._phase = 'turnEnd';
        this._preemptive = false;
        this._surprise = false;
        this.predictTurnOrder();
        this.clearActor();
        if (battle_event_turn_mode !== 0)
        {
            $gameTroop.increaseTurn();
        }
    };


    //Remove the ATB value when a turn is processed:
    _BattleManager_processTurn = BattleManager.processTurn;
    BattleManager.processTurn = function() {
        if (this._pending_atb_removal === true)
        {
            this._subject.atb -= full_atb;
            this._pending_atb_removal = false;
        }
        _BattleManager_processTurn.call(this);

    };

    //We need a function that only gets alive battle members
    BattleManager.aliveBattleMembers = function()
    {
        var allAlive = [];
        this.allBattleMembers().forEach(function(battler)
        {
            if (!battler.isDead() && !battler.isHidden())
            {
                allAlive.push(battler);
            }
        }, this);
        return allAlive;
    };

    //We'll need a function to predict the turn order for the next few turns, in case the developer wants to display this:
    BattleManager.predictTurnOrder = function(battlersToApplyModifiersTo, modifiersValues, battlerCasting, castingTime)
    {
        if (display_turn_order !== 1)
        {
            return null;
        }
        if (typeof battlersToApplyModifiersTo === 'undefined')
        {
            battlersToApplyModifiersTo = [];
        }
        if (typeof modifiersValues === 'undefined')
        {
            modifiersValues = [];
        }
        if (typeof battlerCasting === 'undefined' || typeof castingTime === 'undefined')
        {
            var battlerCasting = null;
            var castingTime = 0;
        }
        var numberOfTurns = turns_to_predict;
        var mmodifierValue = Number(mmodifierValue) || 0;
        var arrayOfATBValues = [];
        var arrayOfCastValues = [];
        var arrayOfCastingTimes = [];
        var arrayOfSymbols = [];
        var predictedTurnOrder = [];
        var predictedTurnOrderSymbols = [];
        var validBattlers = this.aliveBattleMembers();
        var delayedModForActiveActor = 0;
        var delayedModHasBeenApplied = false;
        if (numberOfTurns === 0)
        {
            return false;
        }
        //We cannot work directly on our Battlers for this simulation, or else we would mess their values
        //So instead we copy the numbers that are necessary, and we use them.
        validBattlers.forEach(function(battler)
        {
            var modIndex = battlersToApplyModifiersTo.indexOf(battler);
            var modValue = 0;
            var cast = 0;
            var symbol = false;
            if (modIndex >= 0)
            {
                modValue = modifiersValues[modIndex];
            }
            //Add the plus, minus or neutral symbol:
            if (modValue > 0)
            {
                symbol = ctb_bonus;
            }
            else if (modValue < 0)
            {
                symbol = ctb_malus;
            }
            arrayOfSymbols.push(symbol);
            //See if it's hovering over a casting skill:
            if (battlerCasting === battler && castingTime > 0)
            {
                cast += castingTime;
            }
            //If the battler is already casting something:
            cast += battler.target_cast_atb;


            //Compensate for the full ATB that casting battlers have behind the curtains:
            if (cast > 0 && battler.atb >= full_atb)
            {
                modValue -= full_atb;
            }
            //If we're selecting the action of an actor:
            if (typeof this.actor() !== 'undefined' && this.actor() === battler)
            {
                arrayOfATBValues.push(battler.atb);
                delayedModForActiveActor = modValue;
            }
            else
            {
                arrayOfATBValues.push(battler.atb + modValue);
            }
            //Add the current cast time as normal:
            arrayOfCastValues.push(battler.current_cast_atb);
            //And the target cast time:
            arrayOfCastingTimes.push(cast);
        }, this);

        //Now we simulate until we have enough turns:
        while (predictedTurnOrder.length < numberOfTurns)
        {
            for (index = 0; index < arrayOfATBValues.length; index++)
            {
                var battler = validBattlers[index];
                var target_cast = arrayOfCastingTimes[index];
                if (typeof this.actor() !== 'undefined' && this.actor() === battler && predictedTurnOrder.length >= 1 && delayedModHasBeenApplied === false)
                {
                    arrayOfATBValues[index] += delayedModForActiveActor;
                    delayedModHasBeenApplied = true;
                }

                //If is casting, check by cast time and don't increase virtual atb
                if (arrayOfCastValues[index] < target_cast)
                {
                    arrayOfCastValues[index] += battler._cast_rate * (battler.CastHaste() / 100);
                    if (arrayOfCastValues[index] >= target_cast)
                    {
                        predictedTurnOrder.push(battler);
                        predictedTurnOrderSymbols.push(ctb_cast);
                    }
                }
                else
                {
                    arrayOfATBValues[index] += battler.calculateATBRate();
                    if (arrayOfATBValues[index] >= full_atb)
                    {
                        arrayOfATBValues[index] -= full_atb;
                        predictedTurnOrder.push(battler);
                        predictedTurnOrderSymbols.push(arrayOfSymbols[index]);
                    }
                }
            }
        }
        predictedTurnOrder = predictedTurnOrder.slice(0, numberOfTurns);
        //Let's show them in our CTB Windows, if they are being used:
        this._predictedTurnOrder = predictedTurnOrder;
        this._predictedTurnSymbols = predictedTurnOrderSymbols;
        this.displayTurnOrder();
    };

    //At the end of Turns Timers, we only reduce the duration of states set to Turn End:
    _Game_Battler_onTurnEnd = Game_Battler.prototype.onTurnEnd;
    Game_Battler.prototype.onTurnEnd = function() {
        this.updateStateTurns(2);
        _Game_Battler_onTurnEnd.call(this);
    };

    //Because we now reduce the duration of states set to Action End on the end of actions (after, not before, checking for removal of previous one):
    _Game_Battler_On_AllActionsEnd = Game_Battler.prototype.onAllActionsEnd;
    Game_Battler.prototype.onAllActionsEnd = function() {
        this.updateStateTurns(1);
        //We apply end of turn stuff if paramaters are set so
        if (battler_end_turn_effects === 1)
        {
            this.onTurnEnd();
            BattleManager.refreshStatus();
            BattleManager._logWindow.displayAutoAffectedStatus(this);
            BattleManager._logWindow.displayRegeneration(this);
        }
        _Game_Battler_On_AllActionsEnd.call(this);
    };

    //This now receives a parameter for timing.
    Game_BattlerBase.prototype.updateStateTurns = function(timing) {
        if (typeof timing === 'undefined')
        {
            return;
        }
        this._states.forEach(function(stateId) {
            if (this._stateTurns[stateId] > 0 && $dataStates[stateId].autoRemovalTiming === timing) {
                this._stateTurns[stateId]--;
            }
        }, this);
    };

    //Our items need new methods, to retrieve ATB-related data from the Note field
    //To retrive the <self_atb:> field
    Game_Item.prototype.selfATB = function() {
        if (typeof this.object() !== 'undefined' && typeof this.object().meta !== 'undefined' && typeof this.object().meta.self_atb !== 'undefined')
        {
            return this.object().meta.self_atb;
        }
        return 0;
    };

    //And one to retrieve the <target_atb:> field:
    Game_Item.prototype.targetATB = function() {
        if (typeof this.object() !== 'undefined' && typeof this.object().meta !== 'undefined' && typeof this.object().meta.target_atb !== 'undefined')
        {
            return this.object().meta.target_atb;
        }
        return 0;
    };

    //A formula to eval this ATB:
    Game_Action.prototype.evalATBFormula = function(formula, target) {
        try {
            var item = this.item();
            var a = this.subject();
            var b = target;
            var v = $gameVariables._data;
            return Number(eval(formula) || 0);
        } catch (e) {
            return 0;
        }
    };

    //When we Apply a Game_Action, we now need to check if it had an ATB bonus, so we can apply it too:
    //We also check for spellcasting interrupts and delays.
    _alias_ga_apply = Game_Action.prototype.apply;
    Game_Action.prototype.apply = function(target) {
        _alias_ga_apply.call(this, target);
        //Only on hit
        if (target.result().isHit())
        {
            var self_atb = this.evalATBFormula(this._item.selfATB(), target);
            var target_atb = this.evalATBFormula(this._item.targetATB(), target);
            this.subject().atb += self_atb;
            target.atb += target_atb;
            //Interrupts and delays:
            var delay_amount = default_delay_amount;
            if (typeof this.item() !== 'undefined' && typeof this.item().meta !== 'undefined')
            {
                if (this.item().meta.interrupt || this.item().meta.interrupts)
                {
                    target.BreakCurrentCast();
                }
                if (typeof this.item().meta.delay_amount !== 'undefined' && !isNaN(Number(this.item().meta.delay_amount)))
                {
                    delay_amount = Number(this.item().meta.delay_amount);
                }
                //Care to not delay twice.
                if ((this.item().meta.delay || this.item().meta.delays) && default_delays !== 1)
                {
                    target.delayCast(delay_amount);
                }
            }
            if (default_delays === 1 && ((target.isActor() && this.subject().isEnemy()) || (target.isEnemy() && this.subject().isActor())))
            {
                target.delayCast(delay_amount);
            }
        }
    };

    //Check if a skill item (the database element, not the Game_Object classes) has Casting Time metadata
    Game_Battler.prototype.CheckIfSkillHasCastingTime = function()
    {
        if (typeof this._actions[0] === 'undefined' || this._actions[0] === null)
        {
            return false;
        }
        var item = this._actions[0].item();
        if (item === null || typeof item.meta.cast_time === 'undefined')
        {
            return false;
        }
        var castTime = Number(item.meta.cast_time || 0);
        if (castTime <= 0)
        {
            return false;
        }
        this.startCast(this._actions[0], castTime);
        return true;
    };

    //See if current casting skill is delayable
    Game_Battler.prototype.IsCastDelayable = function()
    {
        //Meta overrides default:
        if (this.casting_action !== null && typeof this.casting_action.item() !== 'undefined' && typeof this.casting_action.item().meta !== 'undefined')
        {
            var delayable = this.casting_action.item().meta.delayable;
            var not_delayable = this.casting_action.item().meta.not_delayable;
            if (delayable)
            {
                return true;
            }
            if (not_delayable)
            {
                return false;
            }
        }
        //If we don't have meta, or have meta but nothing about delay on it, we go for defaults:
        if (default_delayable === 1)
        {
            return true;
        }
        return false;
    };

    //See if current casting skill is interruptible
    Game_Battler.prototype.IsCastInterruptible = function()
    {
        if (this.casting_action !== null && typeof this.casting_action.item() !== 'undefined' && typeof this.casting_action.item().meta !== 'undefined')
        {
            var meta = this.casting_action.item().meta;
            return (meta.interruptible || meta.interruptable || meta.easily_interruptible || meta.easily_interruptable);
        }
        return false;
    };

    //Delays current skill cast:
    Game_Battler.prototype.delayCast = function(delay_amount)
    {
        var delay_amount = this.cast_delay_max * delay_amount / 100;
        if (delay_amount > 0 && this.IsCastDelayable() && this.cast_delay_current < this.cast_delay_max)
        {
            this.cast_delay_current += delay_amount;
            this.current_cast_atb -= delay_amount;
            if (this.current_cast_atb < 0)
            {
                this.current_cast_atb = 0;
            }
        }
    };

    //Breaks current skill cast:
    Game_Battler.prototype.BreakCurrentCast = function(forceBreak)
    {
        if (typeof forceBreak !== 'undefined')
        {
            var force = true;
        }
        if (this.IsCastInterruptible() || force)
        {
            this.atb += Math.min(this.current_cast_atb * interrupt_compensation_pct / 100, full_atb * interrupt_compensation_max / 100);
            this.atb -= full_atb;
            this.resetCast();
            if (interrupt_vfx > 0)
            {
                this.startAnimation(interrupt_vfx, 0, 0);
            }
        }
    };

    //Computes the cast parameter
    //Haste is not applied here to keep it dynamic. Change this to only set up a state so we can use the calcATBRate on other functions.
    Game_Battler.prototype.calculateCastRate = function()
    {
        var param = "this.";
        if (this.casting_action !== null && typeof this.casting_action.item() !== 'undefined' && typeof this.casting_action.item().meta !== 'undefined'
                && typeof this.casting_action.item().meta.cast_param !== 'undefined' && this.casting_action.item().meta.cast_param !== "")
        {
            param += this.casting_action.item().meta.cast_param;
        }
        else
        {
            param += default_cast_parameter;
        }
        if (typeof eval(param) !== 'undefined' && !isNaN(eval(param)))
        {
            var cs = Number(eval(param));
            this._cast_rate = CalculateATBRate(cs, 100);
        }
        else
        {
            this._cast_rate = CalculateATBRate(0, 100);
        }
    };

    //Checks for Haste when adding a state
    _alias_gbb_p_addNewState = Game_BattlerBase.prototype.addNewState;
    Game_BattlerBase.prototype.addNewState = function(stateId)
    {
        _alias_gbb_p_addNewState.call(this, stateId);
        var state = $dataStates[stateId];
        if (typeof state.meta !== 'undefined')
        {
            this.AddHaste(state);
            if (typeof state.meta.atb_duration !== 'undefined' && !isNaN(state.meta.atb_duration))
            {
                this._states_atb_duration[stateId] = Number(state.meta.atb_duration);
                this._states_atb_current[stateId] = 0;
                this._states_atb_rate[stateId] = this.StateATBRate(state);
            }
        }
    };

    //Resets ATB Duration when reseting a state that has one:
    _alias_gbb_p_resetStateCounts = Game_BattlerBase.prototype.resetStateCounts;
    Game_BattlerBase.prototype.resetStateCounts = function(stateId)
    {
        _alias_gbb_p_resetStateCounts.call(this, stateId);
        var state = $dataStates[stateId];
        if (typeof state.meta !== 'undefined' && typeof state.meta.atb_duration !== 'undefined' && !isNaN(state.meta.atb_duration))
        {
            this._states_atb_current[stateId] = 0;
        }
    };

    //Removes state duration and such when removing a state, and re-calculates haste:
    _alias_gbb_p_EraseState = Game_BattlerBase.prototype.eraseState;
    Game_BattlerBase.prototype.eraseState = function(stateId) {
        _alias_gbb_p_EraseState.call(this, stateId);
        if (typeof this._states_atb_duration[stateId] !== 'undefined')
        {
            delete this._states_atb_duration[stateId];
        }
        if (typeof this._states_atb_current[stateId] !== 'undefined')
        {
            delete this._states_atb_current[stateId];
        }
        if (typeof this._states_atb_rate[stateId] !== 'undefined')
        {
            delete this._states_atb_rate[stateId];
        }
        var state = $dataStates[stateId];
        if (typeof state.meta !== 'undefined')
        {
            this.CalculateHaste();
        }
    };

    //Calculates all haste ratings based on equips, classes, states, etc:
    Game_BattlerBase.prototype.CalculateHaste = function() {
        this._haste_all = 100;
        this._haste_atb = 100;
        this._haste_cast = 100;
        this.states().forEach(function(state) {
            this.AddHaste(state);
        }, this);
        if (this.isActor())
        {
            this.AddHaste(this.actor());
            this.AddHaste(this.currentClass());
            this.equips().forEach(function(equip)
            {
                this.AddHaste(equip);
            }, this);
        }
        else
        {
            this.AddHaste(this.enemy());
        }
    };

    //Add individual state or item haste
    Game_BattlerBase.prototype.AddHaste = function(item) {
        if (item !== null && typeof item !== 'undefined' && typeof item.meta !== 'undefined')
        {
            if (typeof item.meta.haste !== 'undefined' && !isNaN(item.meta.haste))
            {
                this._haste_all = this._haste_all * Number(item.meta.haste) / 100;
            }
            if (typeof item.meta.haste_atb !== 'undefined' && !isNaN(item.meta.haste_atb))
            {
                this._haste_atb = this._haste_atb * Number(item.meta.haste_atb) / 100;
            }
            if (typeof item.meta.haste_cast !== 'undefined' && !isNaN(item.meta.haste_cast))
            {
                this._haste_cast = this._haste_cast * Number(item.meta.haste_cast) / 100;
            }
        }
    };


    Game_BattlerBase.prototype.StateATBRate = function(state)
    {
        if (typeof state.meta !== 'undefined' && typeof state.meta.atb_duration_param !== 'undefined' && state.meta.atb_duration_param !== null)
        {
            switch (state.meta.atb_duration_param)
            {
                case "turn":
                case "turn_timer":
                case "timer":
                    return turn_timer;
                case "atk":
                case "def":
                case "mat":
                case "mdf":
                case "agi":
                case "luk":
                    return Number(eval("this." + state.meta.atb_duration_param));
                case "base":
                case "fix":
                case "fixed":
                    return 0;
            }
        }
        return this.agi;
    };

    //Breaks casting time when restricted, since restriction clears current action:
    _alias_gbb_p_onRestrict = Game_BattlerBase.prototype.onRestrict;
    Game_BattlerBase.prototype.onRestrict = function() {
        this.BreakCurrentCast(true);
        _alias_gbb_p_onRestrict.call(this);
    };

    //Command Fight by default would send us spiraling to a "turn" end (for nobody), instead let's just send us to the ATB phase:
    Scene_Battle.prototype.commandFight = function() {
        BattleManager._phase = 'atb';
    };
})();