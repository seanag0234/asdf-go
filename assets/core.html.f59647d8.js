import{_ as i,r as o,o as r,c as t,a as s,b as e,w as d,e as a,d as l}from"./app.1489567e.js";const p={},h=s("h1",{id:"core",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#core","aria-hidden":"true"},"#"),a(" Core")],-1),F=s("p",null,[a("The core "),s("code",null,"asdf"),a(" command list is rather small, but can facilitate many workflows.")],-1),u=s("h2",{id:"installation-setup",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#installation-setup","aria-hidden":"true"},"#"),a(" Installation & Setup")],-1),m=a("Covered in the "),f=a("Getting Started"),y=a(" guide."),v=l(`<h2 id="exec" tabindex="-1"><a class="header-anchor" href="#exec" aria-hidden="true">#</a> Exec</h2><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf </span><span style="color:#66D9EF;">exec</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">command</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> [args...]</span></span>
<span class="line"></span></code></pre></div><p>Executes the command shim for the current version.</p><h2 id="env" tabindex="-1"><a class="header-anchor" href="#env" aria-hidden="true">#</a> Env</h2><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf env </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">command</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> [util]</span></span>
<span class="line"></span></code></pre></div><h2 id="info" tabindex="-1"><a class="header-anchor" href="#info" aria-hidden="true">#</a> Info</h2><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf info</span></span>
<span class="line"></span></code></pre></div><p>A helper command to print the OS, Shell and <code>asdf</code> debug information. Share this when making a bug report.</p><h2 id="reshim" tabindex="-1"><a class="header-anchor" href="#reshim" aria-hidden="true">#</a> Reshim</h2><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf reshim </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">version</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,10),g=a("This recreates the shims for the current version of a package. By default, shims are created by plugins during installation of a tool. Some tools like the "),b={href:"https://docs.npmjs.com/cli/",target:"_blank",rel:"noopener noreferrer"},_=a("npm CLI"),k=a(" allow global installation of executables, for example, installing "),x={href:"https://yarnpkg.com/",target:"_blank",rel:"noopener noreferrer"},E=a("Yarn"),$=a(" via "),D=s("code",null,"npm install -g yarn",-1),H=a(". Since this executable was not installed via the plugin lifecycle, no shim exists for it yet. "),w=s("code",null,"asdf reshim nodejs <version>",-1),O=a(" will force recalculation of shims for any new executables, like "),M=s("code",null,"yarn",-1),R=a(", for "),A=s("code",null,"<version>",-1),I=a(" of "),S=s("code",null,"nodejs",-1),T=a(" ."),B=l(`<h2 id="shim-versions" tabindex="-1"><a class="header-anchor" href="#shim-versions" aria-hidden="true">#</a> Shim-versions</h2><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf shim-versions </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">command</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>Lists the plugins and versions that provide shims for a command.</p>`,3),U=a("As an example, "),j={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},G=a("Node.js"),L=a(" ships with two executables, "),C=s("code",null,"node",-1),q=a(" and "),P=s("code",null,"npm",-1),Z=a(". When many versions of the tools are installed with "),z={href:"https://github.com/asdf-vm/asdf-nodejs/",target:"_blank",rel:"noopener noreferrer"},N=s("code",null,"asdf-nodejs",-1),V=a(),K=s("code",null,"shim-versions",-1),W=a(" can return:"),Y=l(`<div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">\u279C asdf shim-versions node</span></span>
<span class="line"><span style="color:#F8F8F2;">nodejs 14.8.0</span></span>
<span class="line"><span style="color:#F8F8F2;">nodejs 14.17.3</span></span>
<span class="line"><span style="color:#F8F8F2;">nodejs 16.5.0</span></span>
<span class="line"></span></code></pre></div><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">\u279C asdf shim-versions npm</span></span>
<span class="line"><span style="color:#F8F8F2;">nodejs 14.8.0</span></span>
<span class="line"><span style="color:#F8F8F2;">nodejs 14.17.3</span></span>
<span class="line"><span style="color:#F8F8F2;">nodejs 16.5.0</span></span>
<span class="line"></span></code></pre></div><h2 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> Update</h2><p><code>asdf</code> has a built in command to update which relies on Git (our recommended installation method). If you installed using a different method you should follow the steps for that method:</p>`,4),J=s("thead",null,[s("tr",null,[s("th",null,"Method"),s("th",null,"Latest Stable Release"),s("th",null,[a("Latest commit on "),s("code",null,"master")])])],-1),Q=s("tr",null,[s("td",null,"asdf (via Git)"),s("td",null,[s("code",null,"asdf update")]),s("td",null,[s("code",null,"asdf update --head")])],-1),X=s("tr",null,[s("td",null,"Homebrew"),s("td",null,[s("code",null,"brew upgrade asdf")]),s("td",null,[s("code",null,"brew upgrade asdf --fetch-HEAD")])],-1),ss=s("td",null,"Pacman",-1),as=a("Download a new "),es=s("code",null,"PKGBUILD",-1),ls=a(" & rebuild "),ns=s("br",null,null,-1),os=a(" or use your preferred "),cs={href:"https://wiki.archlinux.org/index.php/AUR_helpers",target:"_blank",rel:"noopener noreferrer"},is=a("AUR helper"),rs=s("td",null,null,-1),ts=l(`<h2 id="uninstall" tabindex="-1"><a class="header-anchor" href="#uninstall" aria-hidden="true">#</a> Uninstall</h2><p>To uninstall <code>asdf</code> follow these steps:</p><details class="custom-container details"><summary>Bash &amp; Git</summary><ol><li>In your <code>~/.bashrc</code> remove the lines that source <code>asdf.sh</code> and the completions:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/asdf.sh</span></span>
<span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/completions/asdf.bash</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Remove the <code>$HOME/.asdf</code> dir:</li></ol><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf \${ASDF_DATA_DIR</span><span style="color:#F92672;">:-</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;">.asdf}</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>Run this command to remove all <code>asdf</code> config files:</li></ol><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>
<span class="line"></span></code></pre></div></details><details class="custom-container details"><summary>Bash &amp; Git (macOS)</summary><ol><li>In your <code>~/.bash_profile</code> remove the lines that source <code>asdf.sh</code> and the completions:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/asdf.sh</span></span>
<span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/completions/asdf.bash</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Remove the <code>$HOME/.asdf</code> dir:</li></ol><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf \${ASDF_DATA_DIR</span><span style="color:#F92672;">:-</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;">.asdf}</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>Run this command to remove all <code>asdf</code> config files:</li></ol><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>
<span class="line"></span></code></pre></div></details>`,4),ds={class:"custom-container details"},ps=l(`<summary>Bash &amp; Homebrew (macOS)</summary><p>If using <strong>macOS Catalina or newer</strong>, the default shell has changed to <strong>ZSH</strong>. If you can&#39;t find any config in your <code>~/.bash_profile</code> it may be in a <code>~/.zshrc</code> in which case please follow the ZSH instructions.</p><ol><li>In your <code>~/.bash_profile</code> remove the lines that source <code>asdf.sh</code> and the completions:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">$(brew --prefix asdf)</span><span style="color:#F8F8F2;">/libexec/asdf.sh</span></span>
<span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">$(brew --prefix asdf)</span><span style="color:#F8F8F2;">/etc/bash_completion.d/asdf.bash</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,4),hs=a("Completions may have been "),Fs={href:"https://docs.brew.sh/Shell-Completion#configuring-completions-in-bash",target:"_blank",rel:"noopener noreferrer"},us=a("configured as per Homebrew's instructions"),ms=a(" so follow their guide to find out what to remove."),fs=l(`<ol start="2"><li>Uninstall with your package manager:</li></ol><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">brew uninstall asdf --force</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>Run this command to remove all <code>asdf</code> config files:</li></ol><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>
<span class="line"></span></code></pre></div>`,4),ys=l(`<details class="custom-container details"><summary>Bash &amp; Pacman</summary><ol><li>In your <code>~/.bashrc</code> remove the lines that source <code>asdf.sh</code> and the completions:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> /opt/asdf-vm/asdf.sh</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>Uninstall with your package manager:</li></ol><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">pacman -Rs asdf-vm</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>Remove the <code>$HOME/.asdf</code> dir:</li></ol><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf \${ASDF_DATA_DIR</span><span style="color:#F92672;">:-</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;">.asdf}</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>Run this command to remove all <code>asdf</code> config files:</li></ol><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>
<span class="line"></span></code></pre></div></details><details class="custom-container details"><summary>Fish &amp; Git</summary><ol><li>In your <code>~/.config/fish/config.fish</code> remove the lines that source <code>asdf.fish</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">source</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.asdf/asdf.fish</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>and remove completions with this command:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/fish/completions/asdf.fish</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>Remove the <code>$HOME/.asdf</code> dir:</li></ol><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf \${ASDF_DATA_DIR</span><span style="color:#F92672;">:-</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;">.asdf}</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>Run this command to remove all <code>asdf</code> config files:</li></ol><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>
<span class="line"></span></code></pre></div></details><details class="custom-container details"><summary>Fish &amp; Homebrew</summary><ol><li>In your <code>~/.config/fish/config.fish</code> remove the lines that source <code>asdf.fish</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">source</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;(brew --prefix asdf)&quot;</span><span style="color:#F8F8F2;">/libexec/asdf.fish</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>Uninstall with your package manager:</li></ol><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">brew uninstall asdf --force</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>Run this command to remove all <code>asdf</code> config files:</li></ol><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>
<span class="line"></span></code></pre></div></details><details class="custom-container details"><summary>Fish &amp; Pacman</summary><ol><li>In your <code>~/.config/fish/config.fish</code> remove the lines that source <code>asdf.fish</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">source</span><span style="color:#F8F8F2;"> /opt/asdf-vm/asdf.fish</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>Uninstall with your package manager:</li></ol><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">pacman -Rs asdf-vm</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>Remove the <code>$HOME/.asdf</code> dir:</li></ol><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf \${ASDF_DATA_DIR</span><span style="color:#F92672;">:-</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;">.asdf}</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>Run this command to remove all <code>asdf</code> config files:</li></ol><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>
<span class="line"></span></code></pre></div></details><details class="custom-container details"><summary>Elvish &amp; Git</summary><ol><li>In your <code>~/.config/elvish/rc.elv</code> remove the lines that use the <code>asdf</code> module:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">use asdf _asdf</span><span style="color:#F92672;">;</span><span style="color:#F8F8F2;"> var asdf~ = $_asdf:asdf~</span></span>
<span class="line"><span style="color:#66D9EF;">set</span><span style="color:#F8F8F2;"> edit:completion:arg-completer[asdf] = $_asdf:arg-completer~</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>and uninstall the <code>asdf</code> module with this command:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -f </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib/asdf.elv</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>Remove the <code>$HOME/.asdf</code> dir:</li></ol><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (</span><span style="color:#F92672;">!</span><span style="color:#F8F8F2;">=s $E:ASDF_DATA_DIR </span><span style="color:#E6DB74;">&quot;&quot;</span><span style="color:#F8F8F2;">) { rm -rf $E:ASDF_DATA_DIR } </span><span style="color:#F92672;">else</span><span style="color:#F8F8F2;"> { rm -rf </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.asdf }</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>Run this command to remove all <code>asdf</code> config files:</li></ol><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>
<span class="line"></span></code></pre></div></details><details class="custom-container details"><summary>Elvish &amp; Homebrew</summary><ol><li>In your <code>~/.config/elvish/rc.elv</code> remove the lines that use the <code>asdf</code> module:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">use asdf _asdf</span><span style="color:#F92672;">;</span><span style="color:#F8F8F2;"> var asdf~ = $_asdf:asdf~</span></span>
<span class="line"><span style="color:#66D9EF;">set</span><span style="color:#F8F8F2;"> edit:completion:arg-completer[asdf] = $_asdf:arg-completer~</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>and uninstall the <code>asdf</code> module with this command:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -f </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib/asdf.elv</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>Uninstall with your package manager:</li></ol><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">brew uninstall asdf --force</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>Run this command to remove all <code>asdf</code> config files:</li></ol><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>
<span class="line"></span></code></pre></div></details><details class="custom-container details"><summary>Elvish &amp; Pacman</summary><ol><li>In your <code>~/.config/elvish/rc.elv</code> remove the lines that use the <code>asdf</code> module:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">use asdf _asdf</span><span style="color:#F92672;">;</span><span style="color:#F8F8F2;"> var asdf~ = $_asdf:asdf~</span></span>
<span class="line"><span style="color:#66D9EF;">set</span><span style="color:#F8F8F2;"> edit:completion:arg-completer[asdf] = $_asdf:arg-completer~</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>and uninstall the <code>asdf</code> module with this command:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -f </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib/asdf.elv</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>Uninstall with your package manager:</li></ol><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">pacman -Rs asdf-vm</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>Remove the <code>$HOME/.asdf</code> dir:</li></ol><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (</span><span style="color:#F92672;">!</span><span style="color:#F8F8F2;">=s $E:ASDF_DATA_DIR </span><span style="color:#E6DB74;">&quot;&quot;</span><span style="color:#F8F8F2;">) { rm -rf $E:ASDF_DATA_DIR } </span><span style="color:#F92672;">else</span><span style="color:#F8F8F2;"> { rm -rf </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.asdf }</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>Run this command to remove all <code>asdf</code> config files:</li></ol><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>
<span class="line"></span></code></pre></div></details><details class="custom-container details"><summary>ZSH &amp; Git</summary><ol><li>In your <code>~/.zshrc</code> remove the lines that source <code>asdf.sh</code> and completions:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/asdf.sh</span></span>
<span class="line"><span style="color:#88846F;"># ...</span></span>
<span class="line"><span style="color:#F8F8F2;">fpath=(\${ASDF_DIR}/completions $fpath)</span></span>
<span class="line"><span style="color:#F8F8F2;">autoload -Uz compinit</span></span>
<span class="line"><span style="color:#F8F8F2;">compinit</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>OR</strong> the ZSH Framework plugin if used.</p><ol start="2"><li>Remove the <code>$HOME/.asdf</code> dir:</li></ol><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf \${ASDF_DATA_DIR</span><span style="color:#F92672;">:-</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;">.asdf}</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>Run this command to remove all <code>asdf</code> config files:</li></ol><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>
<span class="line"></span></code></pre></div></details><details class="custom-container details"><summary>ZSH &amp; Homebrew</summary><ol><li>In your <code>~/.zshrc</code> remove the lines that source <code>asdf.sh</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">$(brew --prefix asdf)</span><span style="color:#F8F8F2;">/libexec/asdf.sh</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>Uninstall with your package manager:</li></ol><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">brew uninstall asdf --force </span><span style="color:#F92672;">&amp;&amp;</span><span style="color:#F8F8F2;"> brew autoremove</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>Run this command to remove all <code>asdf</code> config files:</li></ol><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>
<span class="line"></span></code></pre></div></details><details class="custom-container details"><summary>ZSH &amp; Pacman</summary><ol><li>In your <code>~/.zshrc</code> remove the lines that source <code>asdf.sh</code>:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> /opt/asdf-vm/asdf.sh</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>Uninstall with your package manager:</li></ol><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">pacman -Rs asdf-vm</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>Remove the <code>$HOME/.asdf</code> dir:</li></ol><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf \${ASDF_DATA_DIR</span><span style="color:#F92672;">:-</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;">.asdf}</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>Run this command to remove all <code>asdf</code> config files:</li></ol><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>
<span class="line"></span></code></pre></div></details><p>That&#39;s it! \u{1F389}</p>`,11);function vs(gs,bs){const c=o("RouterLink"),n=o("ExternalLinkIcon");return r(),t("div",null,[h,F,u,s("p",null,[m,e(c,{to:"/guide/getting-started.html"},{default:d(()=>[f]),_:1}),y]),v,s("p",null,[g,s("a",b,[_,e(n)]),k,s("a",x,[E,e(n)]),$,D,H,w,O,M,R,A,I,S,T]),B,s("p",null,[U,s("a",j,[G,e(n)]),L,C,q,P,Z,s("a",z,[N,e(n)]),V,K,W]),Y,s("table",null,[J,s("tbody",null,[Q,X,s("tr",null,[ss,s("td",null,[as,es,ls,ns,os,s("a",cs,[is,e(n)])]),rs])])]),ts,s("details",ds,[ps,s("p",null,[hs,s("a",Fs,[us,e(n)]),ms]),fs]),ys])}var ks=i(p,[["render",vs],["__file","core.html.vue"]]);export{ks as default};