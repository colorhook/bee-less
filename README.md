bee-less
========
将less文件编译成css文件


```xml
<?xml version='1.0' encoding='utf-8'?>
<project name='using bee-min to build a project example'  basedir='.'>
  <description>min</description>
  <deskdef npm='bee-less'/>
  <target name="build">
    <less src='reset.less' dest='reset.css'/>
  </target>
</project>
```