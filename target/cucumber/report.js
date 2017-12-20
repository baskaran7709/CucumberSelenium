$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/cucumber/features/ShoppingCart.feature");
formatter.feature({
  "name": "Shopping cart on an e-commerce website",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Sign in and sign out",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open automationpractice website",
  "keyword": "When "
});
formatter.match({
  "location": "ShoppingCart.i_open_automationpractice_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I sign in",
  "keyword": "And "
});
formatter.match({
  "location": "ShoppingCart.i_sign_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I sign out",
  "keyword": "Then "
});
formatter.match({
  "location": "ShoppingCart.i_sign_out()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: Sign out\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T18:33:54.468Z\u0027\nSystem info: host: \u0027baskaran-Aspire-4736\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027i386\u0027, os.version: \u00273.13.0-37-generic\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 57.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:headless: false, moz:processID: 12525, moz:profile: /tmp/rust_mozprofile.9eQTKH..., moz:webdriverClick: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, platformVersion: 3.13.0-37-generic, rotatable: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}}\nSession ID: dad4e11c-8318-4d95-819b-26c03e658ede\n*** Element info: {Using\u003dlink text, value\u003dSign out}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:425)\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:246)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\n\tat com.cucumber.modules.SignoutAction.Execute(SignoutAction.java:16)\n\tat com.cucumber.StepDefinitions.ShoppingCart.i_sign_out(ShoppingCart.java:57)\n\tat ✽.I sign out(src/test/java/com/cucumber/features/ShoppingCart.feature:6)\n",
  "status": "failed"
});
formatter.write("Current Page URL is http://automationpractice.com/index.php?controller\u003dauthentication");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/cucumber/features/github_login.feature");
formatter.feature({
  "name": "github login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "login without username and password",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on github homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "GithubLoginSD.user_is_on_github_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Sign in button",
  "keyword": "When "
});
formatter.match({
  "location": "GithubLoginSD.user_clicks_on_Sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is displayed login screen",
  "keyword": "Then "
});
formatter.match({
  "location": "GithubLoginSD.user_is_displayed_login_screen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "login username and password data through selenium webdriver",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on github homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "GithubLoginSD.user_is_on_github_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Sign in button",
  "keyword": "When "
});
formatter.match({
  "location": "GithubLoginSD.user_clicks_on_Sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is displayed login screen1",
  "keyword": "Then "
});
formatter.match({
  "location": "GithubLoginSD.user_is_displayed_login_screen1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user entered logon credentials",
  "keyword": "When "
});
formatter.match({
  "location": "GithubLoginSD.user_entered_logon_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is displayed home screen",
  "keyword": "Then "
});
formatter.match({
  "location": "GithubLoginSD.user_is_displayed_home_screen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "login username and password data through excel",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on github homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "GithubLoginSD.user_is_on_github_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Sign in button",
  "keyword": "When "
});
formatter.match({
  "location": "GithubLoginSD.user_clicks_on_Sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is displayed login screen1",
  "keyword": "Then "
});
formatter.match({
  "location": "GithubLoginSD.user_is_displayed_login_screen1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user entered logon credentials using excel",
  "keyword": "When "
});
formatter.match({
  "location": "GithubLoginSD.user_entered_logon_credentials_using_excel()"
});
formatter.result({
  "error_message": "java.lang.NoClassDefFoundError: org/w3c/dom/ElementTraversal\n\tat java.lang.ClassLoader.defineClass1(Native Method)\n\tat java.lang.ClassLoader.defineClass(ClassLoader.java:763)\n\tat java.security.SecureClassLoader.defineClass(SecureClassLoader.java:142)\n\tat java.net.URLClassLoader.defineClass(URLClassLoader.java:467)\n\tat java.net.URLClassLoader.access$100(URLClassLoader.java:73)\n\tat java.net.URLClassLoader$1.run(URLClassLoader.java:368)\n\tat java.net.URLClassLoader$1.run(URLClassLoader.java:362)\n\tat java.security.AccessController.doPrivileged(Native Method)\n\tat java.net.URLClassLoader.findClass(URLClassLoader.java:361)\n\tat java.lang.ClassLoader.loadClass(ClassLoader.java:424)\n\tat sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:335)\n\tat java.lang.ClassLoader.loadClass(ClassLoader.java:357)\n\tat org.apache.xerces.parsers.AbstractDOMParser.startDocument(Unknown Source)\n\tat org.apache.xerces.impl.dtd.XMLDTDValidator.startDocument(Unknown Source)\n\tat org.apache.xerces.impl.XMLDocumentScannerImpl.startEntity(Unknown Source)\n\tat org.apache.xerces.impl.XMLVersionDetector.startDocumentParsing(Unknown Source)\n\tat org.apache.xerces.parsers.XML11Configuration.parse(Unknown Source)\n\tat org.apache.xerces.parsers.XML11Configuration.parse(Unknown Source)\n\tat org.apache.xerces.parsers.XMLParser.parse(Unknown Source)\n\tat org.apache.xerces.parsers.DOMParser.parse(Unknown Source)\n\tat org.apache.xerces.jaxp.DocumentBuilderImpl.parse(Unknown Source)\n\tat javax.xml.parsers.DocumentBuilder.parse(DocumentBuilder.java:121)\n\tat org.apache.poi.util.DocumentHelper.readDocument(DocumentHelper.java:140)\n\tat org.apache.poi.openxml4j.opc.internal.ContentTypeManager.parseContentTypesFile(ContentTypeManager.java:374)\n\tat org.apache.poi.openxml4j.opc.internal.ContentTypeManager.\u003cinit\u003e(ContentTypeManager.java:100)\n\tat org.apache.poi.openxml4j.opc.internal.ZipContentTypeManager.\u003cinit\u003e(ZipContentTypeManager.java:54)\n\tat org.apache.poi.openxml4j.opc.ZipPackage.getPartsImpl(ZipPackage.java:253)\n\tat org.apache.poi.openxml4j.opc.OPCPackage.getParts(OPCPackage.java:756)\n\tat org.apache.poi.openxml4j.opc.OPCPackage.open(OPCPackage.java:327)\n\tat org.apache.poi.util.PackageHelper.open(PackageHelper.java:37)\n\tat org.apache.poi.xssf.usermodel.XSSFWorkbook.\u003cinit\u003e(XSSFWorkbook.java:295)\n\tat com.cucumber.selenium.DataFromExcel.read_data(DataFromExcel.java:21)\n\tat com.cucumber.selenium.SeleniumFunctions.enterlogindetailsusingexcel(SeleniumFunctions.java:89)\n\tat com.cucumber.StepDefinitions.GithubLoginSD.user_entered_logon_credentials_using_excel(GithubLoginSD.java:56)\n\tat ✽.user entered logon credentials using excel(src/test/java/com/cucumber/features/github_login.feature:19)\nCaused by: java.lang.ClassNotFoundException: org.w3c.dom.ElementTraversal\n\tat java.net.URLClassLoader.findClass(URLClassLoader.java:381)\n\tat java.lang.ClassLoader.loadClass(ClassLoader.java:424)\n\tat sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:335)\n\tat java.lang.ClassLoader.loadClass(ClassLoader.java:357)\n\tat java.lang.ClassLoader.defineClass1(Native Method)\n\tat java.lang.ClassLoader.defineClass(ClassLoader.java:763)\n\tat java.security.SecureClassLoader.defineClass(SecureClassLoader.java:142)\n\tat java.net.URLClassLoader.defineClass(URLClassLoader.java:467)\n\tat java.net.URLClassLoader.access$100(URLClassLoader.java:73)\n\tat java.net.URLClassLoader$1.run(URLClassLoader.java:368)\n\tat java.net.URLClassLoader$1.run(URLClassLoader.java:362)\n\tat java.security.AccessController.doPrivileged(Native Method)\n\tat java.net.URLClassLoader.findClass(URLClassLoader.java:361)\n\tat java.lang.ClassLoader.loadClass(ClassLoader.java:424)\n\tat sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:335)\n\tat java.lang.ClassLoader.loadClass(ClassLoader.java:357)\n\tat org.apache.xerces.parsers.AbstractDOMParser.startDocument(Unknown Source)\n\tat org.apache.xerces.impl.dtd.XMLDTDValidator.startDocument(Unknown Source)\n\tat org.apache.xerces.impl.XMLDocumentScannerImpl.startEntity(Unknown Source)\n\tat org.apache.xerces.impl.XMLVersionDetector.startDocumentParsing(Unknown Source)\n\tat org.apache.xerces.parsers.XML11Configuration.parse(Unknown Source)\n\tat org.apache.xerces.parsers.XML11Configuration.parse(Unknown Source)\n\tat org.apache.xerces.parsers.XMLParser.parse(Unknown Source)\n\tat org.apache.xerces.parsers.DOMParser.parse(Unknown Source)\n\tat org.apache.xerces.jaxp.DocumentBuilderImpl.parse(Unknown Source)\n\tat javax.xml.parsers.DocumentBuilder.parse(DocumentBuilder.java:121)\n\tat org.apache.poi.util.DocumentHelper.readDocument(DocumentHelper.java:140)\n\tat org.apache.poi.openxml4j.opc.internal.ContentTypeManager.parseContentTypesFile(ContentTypeManager.java:374)\n\tat org.apache.poi.openxml4j.opc.internal.ContentTypeManager.\u003cinit\u003e(ContentTypeManager.java:100)\n\tat org.apache.poi.openxml4j.opc.internal.ZipContentTypeManager.\u003cinit\u003e(ZipContentTypeManager.java:54)\n\tat org.apache.poi.openxml4j.opc.ZipPackage.getPartsImpl(ZipPackage.java:253)\n\tat org.apache.poi.openxml4j.opc.OPCPackage.getParts(OPCPackage.java:756)\n\tat org.apache.poi.openxml4j.opc.OPCPackage.open(OPCPackage.java:327)\n\tat org.apache.poi.util.PackageHelper.open(PackageHelper.java:37)\n\tat org.apache.poi.xssf.usermodel.XSSFWorkbook.\u003cinit\u003e(XSSFWorkbook.java:295)\n\tat com.cucumber.selenium.DataFromExcel.read_data(DataFromExcel.java:21)\n\tat com.cucumber.selenium.SeleniumFunctions.enterlogindetailsusingexcel(SeleniumFunctions.java:89)\n\tat com.cucumber.StepDefinitions.GithubLoginSD.user_entered_logon_credentials_using_excel(GithubLoginSD.java:56)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\n\tat cucumber.api.TestStep.run(TestStep.java:83)\n\tat cucumber.api.TestCase.run(TestCase.java:58)\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.apache.maven.surefire.junitcore.JUnitCore.run(JUnitCore.java:55)\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.createRequestAndRun(JUnitCoreWrapper.java:137)\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.executeEager(JUnitCoreWrapper.java:107)\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.execute(JUnitCoreWrapper.java:83)\n\tat org.apache.maven.surefire.junitcore.JUnitCoreWrapper.execute(JUnitCoreWrapper.java:75)\n\tat org.apache.maven.surefire.junitcore.JUnitCoreProvider.invoke(JUnitCoreProvider.java:159)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:373)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:334)\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:119)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:407)\n",
  "status": "failed"
});
formatter.step({
  "name": "user is displayed home screen",
  "keyword": "Then "
});
formatter.match({
  "location": "GithubLoginSD.user_is_displayed_home_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current Page URL is https://github.com/login");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/cucumber/features/seleniumframework.feature");
formatter.feature({
  "name": "Access seleniumframework.com website",
  "description": "  Use selenium java with cucumber-jvm and navigate to website",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Print title, url",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open seleniumframework website",
  "keyword": "When "
});
formatter.match({
  "location": "BlankStepDefs.i_open_seleniumframework_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate title and URL",
  "keyword": "Then "
});
formatter.match({
  "location": "BlankStepDefs.i_print_title_and_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});