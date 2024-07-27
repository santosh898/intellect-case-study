# Project Planning for Web App Development

## 1. Feature Listing

- **Current Mobile App Features:**
  - List all features currently available in the mobile app.

## 2. Feature Prioritization and Planning

- **Feature Prioritization:**

  - Determine the subset and superset of features for the web app.
  - Identify the order in which stakeholders want features implemented.

- **Feature Feasibility:**

  - **Inappropriate for Web:**
    - Identify mobile features that do not make sense for the web platform.
  - **Enhanced on Web:**
    - Identify features that can be enhanced on the web due to the larger screen size and different interaction methods.

- **User Experience (UX) Considerations. Some Examples:**

  - Reimagine card-based journeys and other features for a web UX.
  - User should be able to minimize or let the audio play in the background on the web.
  - Figure out if habit tracking even make any sense for the web.

- **Feature Complexity Analysis:**
  - Identify features that are easy on mobile but difficult on the web.
  - **Example Challenges:**
    - **Encryption and Security Keys:**
      - Implementation of this encryption.
      - Address challenges with shared security keys and encryption on the web.

## 3. Componentization and Microservices

- **Extract Business Logic:**

  - Separate business logic into reusable components and libraries.

- **Microservices:**
  - Centralize authentication.
  - Develop separate API microservices for resources such as Learning Paths and Journals.

## 4. Design and Responsiveness

- **Design for Large Screens:**

  - Redesign workflows and layouts for larger screens.
  - Implement responsive design to support various screen sizes.

- **Mobile Web Use:**
  - What happens when the web app is used on a mobile?
    - Should we ask them to go to the mobile app?
    - Or should let them use the web app?
      - This means that we will have two apps with two source codes and same behaviour for the mobile devices.

## 5. Timeline and Deployment Strategy

- **Feature Timeline:**

  - Develop a timeline for feature development and deployment.

- **Interim Solutions:**
  - Build Call-to-Actions (CTAs) and partial flows for features not yet available on the web.
  - Include messages like "this feature is app only for now" with an Install CTA for the mobile app.
