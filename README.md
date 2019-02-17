Echo, TreeHacks 2019
===

### Team Members:
Teresa Liu, Suvir Copparam, Daniel Ho

### Project Description:
Sexual assault victims are in tremendously difficult situations after being assaulted, having to sacrifice privacy and anonymity to receive basic medical, legal, and emotional support. And understanding how to proceed with one's life after being assaulted is challenging due to how scattered information on resources for these victims is for different communities, whether the victim is on an American college campus, in a foreign country, or any number of other situations. Instead of building a single solution or organizing one set of resources to help sexual assault victims everywhere, we believe a simple, community-driven solution to this problem lies in Echo.

Using Blockstack, Echo facilitates anonymized communication among sexual assault victims, legal and medical help, and local authorities to foster a supportive online community for victims. Members of this community can share their stories, advice, and support for each other knowing that they truly own their data and it is anonymous to other users, using Blockstack. Victims may also anonymously report incidents of assault on the platform as they happen, and these reports are shared with local authorities if a particular individual has been reported as an offender on the platform several times by multiple users. This incident data is also used to geographically map where in small communities sexual assault happens, to provide users of the app information on safe walking routes.

### File structure

Echo is a React App with a minimal back-end. The wrapper component that encapsulates the full application is in ['app.js'](https://github.com/suvir-c/treehacks2019/blob/master/app/app.js), under which are various other components for the community forum, submitting incidents, and more. The code for these components can be found in the ['/app'] directory (https://github.com/suvir-c/treehacks2019/blob/master/app).
The data for the application is stored on MongoDB using Blockstack and Radiks.

### Setup & Local Development

```bash
git clone https://github.com/suvir-c/treehacks2019.git
cd treehacks2019/
npm install
npm run start
```

The application can then be accessed at http://localhost:3000
