# How to reproduce the issue

1. Install dependencies by running `npm install`
2. Serve fragment by running `npm run serve:fragment`  
   Once completed, the web-fragment application should be running at http://localhost:4201/fragment
3. Run the development server with the host application by running `npm run serve:ssr:host`.
4. Access http://localhost:4000/fragment and try to click buttons. Button that just increments the value
   without calling the `detectChanges` method, doesn't work properly as the value in the view is not
   updated. When testing on http://localhost:4201/fragment both buttons work as expected.
