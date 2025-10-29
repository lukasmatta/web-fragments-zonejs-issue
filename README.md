# How to reproduce the issue

1. Install dependencies by running `npm install`
2. Run `run-fragment.sh` script to set up the web-fragment application. Note that it uses Docker. 
   Once completed, the web-fragment application should be running at http://localhost:4201/fragment
3. Run the development server with the host application by running `ng serve host`.
4. Access http://localhost:4200/fragment and try to click buttons. Button that just increments the value
   without calling the `detectChanges` method, doesn't work properly as the value in the view is not
   updated. When testing on http://localhost:4201/fragment both buttons work as expected.

Note that in the process you might get a missing `html_rewriter_bg.wasm` error, in that case just copy the file from the `node_modules`.