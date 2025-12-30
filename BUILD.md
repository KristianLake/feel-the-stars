# BUILD PLAN — Feel the Stars (MVP)

This document describes a practical path to build the first working prototype for iPhone + Android.

## MVP goal

Enable a blind user to:
1) scan the night sky
2) detect Orion’s Belt (or report “not found / low confidence”)
3) enter “Feel Mode” to trace the pattern using touch + haptics
4) optionally hear or read the name via VoiceOver/TalkBack

## Product decisions (MVP)

### Start simple
- One pattern: **Orion’s Belt** (3 bright stars in a line)
- Limit the “tactile map” to only what matters:
  - star points (dots)
  - optional connecting line (belt line)
- Focus on the “feel” experience first.

### Accessibility requirements
- Must be fully usable with **VoiceOver (iOS)** and **TalkBack (Android)**
- Large tap targets, minimal UI, simple gestures
- Clear feedback states:
  - scanning
  - found (confidence level)
  - not found
  - feel mode

## Architecture overview

### Modules
1. Camera capture (low-light friendly)
2. Star detection (bright point extraction)
3. Pattern detection (Orion’s Belt heuristic)
4. Mapping to tactile screen space
5. Haptics engine (touch distance -> vibration intensity)
6. Screenreader output (TTS + accessibility labels)

## Step-by-step build order (recommended)

### Step 1 — Feel Mode prototype (no camera)
Hardcode 3 star points on the screen.
- Finger near star -> stronger vibration
- Finger far -> no vibration
- Add optional “belt line” gentle vibration when finger is near the line segment

Success criteria:
- A blindfolded sighted tester can reliably describe “three points in a line”
- A blind/VI tester can confirm whether the interaction feels understandable

### Step 2 — Accessibility pass
- Ensure all controls are reachable and labeled
- Ensure gestures work with screen reader enabled
- Provide a simple tutorial mode:
  - “Move your finger. You’ll feel the stars as vibration.”

### Step 3 — Add camera feed + basic star detection
Implement:
- grayscale conversion
- threshold bright pixels
- blob detection
- rank blobs by brightness and size
Output: top N star candidates as (x,y) points in camera frame.

Success criteria:
- In a reasonably dark environment, the app detects multiple stable points

### Step 4 — Orion’s Belt heuristic (first constellation)
From the brightest N points:
- search for any triple that is:
  - roughly collinear (low distance from best-fit line)
  - roughly even spacing (two gaps similar-ish)
- choose the best scoring triple
- compute confidence score

If confidence passes threshold:
- declare “Orion’s Belt found”
Else:
- “Not found / Low confidence”

### Step 5 — Map detected stars to Feel Mode
Convert camera-frame coordinates -> screen coordinates.
Then feed those 3 points into Feel Mode.

### Step 6 — Expand feedback quality
- Provide “aim guidance” while scanning:
  - audio/haptic “warmer/colder” as detection stabilizes
- Provide “confidence” feedback:
  - high / medium / low
- Provide “try again” suggestions:
  - “Too bright / not enough stars / hold steady”

## Cross-platform tech options

### Option A: React Native + native frame processors
- React Native UI
- Camera: VisionCamera or similar
- Star detection: native (Swift/Kotlin) or C++ module
- Haptics: platform APIs or RN haptics library
Pros: one UI codebase
Cons: real-time CV needs care

### Option B: Native iOS + Native Android
- Swift + AVFoundation (iOS)
- Kotlin + CameraX (Android)
Pros: best performance and low-latency haptics
Cons: two codebases

MVP can start with Option A or B depending on contributors.

## Haptics design (core)

### Basic rule
- Vibration intensity increases as finger approaches a star point.
- Optional: gentle vibration near the belt line.

### Recommended tuning targets (approx)
- “Star core” radius: 15–25 px (strong)
- “Warm halo” radius: 50–80 px (light)
- Update haptics 20–30 times per second (throttle)
- Avoid constant max vibration (fatiguing)

## Testing plan

### Early testing
- Blindfolded sighted testers (to quickly iterate)
- Then blind/VI testers (real feedback)

### Key questions for testers
- Can you tell it’s 3 points in a line?
- Do the gaps feel consistent?
- Is it tiring or pleasant?
- Are the gestures easy with VoiceOver/TalkBack?
- Would you use this for “wonder” / experience?

## Future upgrades (after MVP)
- Add more constellations with distinct shapes
- Add proper plate solving (star catalogue matching) for reliability
- Braille display support (Bluetooth HID) for object names
- “Guided mode”: “Find Orion” with warmer/colder haptics while aiming
