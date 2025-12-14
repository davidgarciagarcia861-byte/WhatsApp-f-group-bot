git clone https://github.com/tu-usuario/WhatsApp-f-group-bot.git
Many modules were written by David (dot) Maciejak @ gmail (dot) com
                 BFG code by Jan Dlabal <dlabaljan@gmail.com>

  		    Licensed under AGPLv3 (see LICENSE file)

           Please do not use in military or secret service organizations,
                          or for illegal purposes.
      (This is the wish of the author and non-binding. Many people working
       in these organizations do not care for laws and ethics anyway.
            You are not one of the "good" ones if you ignore this.)

           NOTE: No, this is not meant to be a markdown doc! old school!


Hydra in the most current GitHub state can be directly downloaded via Docker:
```
docker pull vanhauser/hydra
```


INTRODUCTION
------------
Number one of the biggest security holes are passwords, as every password
security study shows.
This tool is a proof-of-concept code to give researchers and security
consultants the possibility of showing how easy it would be to gain unauthorized
access from a remote to a system.

THIS TOOL IS FOR LEGAL PURPOSES ONLY!

There are already several login hacker tools available; however, none of them
support more than one protocol to attack or support parallelized
connects.

It was tested to compile cleanly on Linux, Windows/Cygwin, Solaris,
FreeBSD/OpenBSD, QNX (Blackberry 10), and MacOS.

Currently, this tool supports the following protocols:
 Asterisk, AFP, Cisco AAA, Cisco auth, Cisco enable, CVS, Firebird, FTP,
 HTTP-FORM-GET, HTTP-FORM-POST, HTTP-GET, HTTP-HEAD, HTTP-POST, HTTP-PROXY,
 HTTPS-FORM-GET, HTTPS-FORM-POST, HTTPS-GET, HTTPS-HEAD, HTTPS-POST,
 HTTP-Proxy, ICQ, IMAP, IRC, LDAP, MEMCACHED, MONGODB, MS-SQL, MYSQL, NCP, NNTP, Oracle Listener,
 Oracle SID, Oracle, PC-Anywhere, PCNFS, POP3, POSTGRES, Radmin, RDP, Rexec, Rlogin,
 Rsh, RTSP, SAP/R3, SIP, SMB, SMTP, SMTP Enum, SNMP v1+v2+v3, SOCKS5,
 SSH (v1 and v2), SSHKEY, Subversion, Teamspeak (TS2), Telnet, VMware-Auth,
 VNC and XMPP.

However, the module engine for new services is very easy, so it won't take a
long time until even more services are supported.
Your help in writing, enhancing, or fixing modules is highly appreciated!! :-)
