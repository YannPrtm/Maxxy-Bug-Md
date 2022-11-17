
// disini atur aja kak menu bot nya
// jangan lupa hapus fitur yg ga penting

var monoSpace = '```'

exports.listmenu = (sender,prefix,ad,namenya,premnya,usernya,romnya,tanggal,jam) => {
return`━━━❲ ＸＡＶＩＥＲＢＯＴＺ  ❳━━━
┏━━━━━━━━━━━━━
┣━( 𝗨𝗦𝗘𝗥 𝗜𝗡𝗙𝗢 )
┃🖇️ ID : @${sender.split('@')[0]}
┃🎟️ Nama : ${namenya}
┃💳 Premium : ${premnya}
┣━━━━━━━━━━━━━━
┣━( 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢 )
┃💻 Library : Baileys-MD
┃🎰 Time : ${jam} WIB
┃📁 Date : ${tanggal}
┃🔖 Terdaftar : ${usernya}
┃🔒 Room Chat : ${romnya}
┃📝 Total Fitur : 600+
┣━━━━━━━━━━━━━
┣━❲ 𝙈𝘼𝙄𝙉 𝙈𝙀𝙉𝙐 ❳
┃么 ${prefix}menu
┃么 ${prefix}iklan
┃么 ${prefix}rules
┃么 ${prefix}owner
┃么 ${prefix}infobot
┃么 ${prefix}donasi
┃么 ${prefix}donate
┃么 ${prefix}sewabot
┃么 ${prefix}groupbot
┃么 ${prefix}ownerinfo
┃么 ${prefix}infoowner
┣━━━━━━━━━━━━━━
┣━❲ 𝙐𝙎𝙀𝙍 𝙈𝙀𝙉𝙐 ❳
┃么 ${prefix}verify
┃么 ${prefix}report
┃么 ${prefix}request
┃么 ${prefix}transfer
┃么 ${prefix}menfess
┃么 ${prefix}buatroom
┃么 ${prefix}secretchat
┃么 ${prefix}cekprem
┃么 ${prefix}daftarprem
┃么 ${prefix}changename
┣━━━━━━━━━━━━━━
┣━❲ 𝙊𝙒𝙉𝙀𝙍 𝙈𝙀𝙉𝙐 ❳
┃么 ${prefix}error
┃么 ${prefix}clearerr
┃么 ${prefix}siaran
┃么 ${prefix}session
┃么 ${prefix}resetdb
┃么 ${prefix}runtime
┃么 ${prefix}setexif
┃么 ${prefix}setwm
┃么 ${prefix}setfooter
┃么 ${prefix}setapikey
┃么 ${prefix}setppbot
┃么 ${prefix}addprem
┃么 ${prefix}delprem
┃么 ${prefix}bc
┃么 ${prefix}bctext
┃么 ${prefix}bcvideo
┃么 ${prefix}bcaudio
┃么 ${prefix}bcimage
┃么 ${prefix}broadcast
┣━━━━━━━━━━━━━━
┣━❲ 𝙎𝙏𝙊𝙍𝙀 𝙈𝙀𝙉𝙐 ❳
┃么 ${prefix}kali 1 2
┃么 ${prefix}bagi 1 2
┃么 ${prefix}kurang 1 2
┃么 ${prefix}tambah 1 2
┃么 ${prefix}dellist key
┃么 ${prefix}addlist key@response
┃么 ${prefix}update key@response
┃么 ${prefix}done <reply orderan>
┃么 ${prefix}proses <reply orderan>
┃么 ${prefix}list <only group>
┃么 ${prefix}shop <only group>
┣━━━━━━━━━━━━━━
┣━❲ 𝙂𝙍𝙊𝙐𝙋 𝙈𝙀𝙉𝙐 ❳
┃么 ${prefix}fitnah
┃么 ${prefix}delete
┃么 ${prefix}revoke
┃么 ${prefix}tagall
┃么 ${prefix}hidetag
┃么 ${prefix}setdesc
┃么 ${prefix}linkgrup
┃么 ${prefix}infogroup
┃么 ${prefix}setppgrup
┃么 ${prefix}setnamegrup
┃么 ${prefix}group open
┃么 ${prefix}group close
┃么 ${prefix}antilink on
┃么 ${prefix}antilink off
┃么 ${prefix}welcome on
┃么 ${prefix}welcome off
┃么 ${prefix}tiktokauto on
┃么 ${prefix}tiktokauto off
┃么 ${prefix}kick @tag
┃么 ${prefix}demote @tag
┃么 ${prefix}promote @tag
┣━━━━━━━━━━━━━━
┣━❲ 𝘼𝙐𝙏𝙊𝘿𝙀𝘾𝙏 𝙈𝙀𝙉𝙐 ❳
┃么 ${prefix}sadcat
┃么 ${prefix}translate
┃么 ${prefix}stalkff
┃么 ${prefix}stalknpm
┃么 ${prefix}stalkgithub
┃么 ${prefix}balikhuruf
┃么 ${prefix}balikangka
┃么 ${prefix}besarkecil
┃么 ${prefix}bilangangka
┣━━━━━━━━━━━━━━
┣━❲ 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙈𝙀𝙉𝙐 ❳
┃么 ${prefix}tiktok
┃么 ${prefix}ytmp3
┃么 ${prefix}ytmp4
┃么 ${prefix}pinterest
┃么 ${prefix}playmp3
┃么 ${prefix}playmp4
┃么 ${prefix}gitclone
┃么 ${prefix}mediafire
┃么 ${prefix}wikimedia
┃么 ${prefix}soundcloud
┃么 ${prefix}infogempa
┣━━━━━━━━━━━━━━
┣━❲ 𝘾𝙊𝙉𝙑𝙀𝙍𝙏 𝙈𝙀𝙉𝙐 ❳
┃么 ${prefix}tts
┃么 ${prefix}ttp
┃么 ${prefix}ttp2
┃么 ${prefix}attp
┃么 ${prefix}attp2
┃么 ${prefix}tourl
┃么 ${prefix}upload
┃么 ${prefix}toimg
┃么 ${prefix}toimage
┃么 ${prefix}tomp3
┃么 ${prefix}toaudio
┃么 ${prefix}tomp4
┃么 ${prefix}tovideo
┃么 ${prefix}emojimix
┃么 ${prefix}emojmix
┃么 ${prefix}emojinua
┃么 ${prefix}mixemoji
┃么 ${prefix}stiker
┃么 ${prefix}sticker
┃么 ${prefix}sgif
┃么 ${prefix}stikergif
┃么 ${prefix}stickergif
┃么 ${prefix}swm
┃么 ${prefix}stikerwm
┃么 ${prefix}stickerwm
┃么 ${prefix}smeme
┃么 ${prefix}memestiker
┃么 ${prefix}stikermeme
┃么 ${prefix}stickermeme
┃么 ${prefix}takesticker
┃么 ${prefix}emojinua2
┃么 ${prefix}mixemoji2
┃么 ${prefix}emojmix2
┃么 ${prefix}emojimix2
┣━━━━━━━━━━━━━━
┣━❲ 𝙏𝙊𝙊𝙇𝙎 𝙈𝙀𝙉𝙐 ❳
┃么 ${prefix}spamcall
┃么 ${prefix}translate
┃么 ${prefix}ssweb-pc
┃么 ${prefix}ssweb-hp
┃么 ${prefix}bitly_short
┃么 ${prefix}cuttly_short
┃么 ${prefix}tinyurl_short
┃么 ${prefix}base32
┃么 ${prefix}base64
┃么 ${prefix}debase32
┃么 ${prefix}debase64
┣━━━━━━━━━━━━━━
┣━❲ 𝘽𝙐𝙂𝙑𝙄𝙋 𝙈𝙀𝙉𝙐 ❳
┃么 ${prefix}sendbug 628xxx
┃么 ${prefix}philips 628xxx
┃么 ${prefix}philips2 628xxx
┃么 ${prefix}philips3 628xxx
┃么 ${prefix}santet @tag
┃么 ${prefix}santet2 @tag
┃么 ${prefix}santet3 @tag
┃么 ${prefix}virtex 628xxx
┃么 ${prefix}virtex2 628xxx
┃么 ${prefix}virtex3 628xxx
┃么 ${prefix}bug1 628xxx
┃么 ${prefix}bug2 628xxx
┃么 ${prefix}bug3 628xxx
┃么 ${prefix}bug4 628xxx
┃么 ${prefix}bug5 628xxx
┣━━━━━━━━━━━━━━
┣━❲ 𝙍𝘼𝙉𝘿𝙊𝙈 𝘾𝙀𝙆 ❳
┃么 ${prefix}cekjelek
┃么 ${prefix}cekcantik
┃么 ${prefix}cekganteng
┃么 ${prefix}ceksad
┃么 ${prefix}cekharam
┃么 ${prefix}cekhalal
┃么 ${prefix}cekbego
┃么 ${prefix}cekanjing
┃么 ${prefix}cekbiadab
┃么 ${prefix}cekramah
┃么 ${prefix}ceksatir
┃么 ${prefix}cekmanis
┃么 ${prefix}cekpahit
┃么 ${prefix}cekhitam
┃么 ${prefix}cekrasis
┃么 ${prefix}cekbaik
┃么 ${prefix}cekjahat
┃么 ${prefix}cekkaya
┃么 ${prefix}cekmiskin
┃么 ${prefix}cekpintar
┃么 ${prefix}cekbodoh
┃么 ${prefix}cekimut
┃么 ${prefix}cekkocak
┃么 ${prefix}cekkadang
┣━━━━━━━━━━━━━━
┣━❲ 𝙎𝙀𝙍𝙏𝙄𝙁𝙄𝙆𝘼𝙏 𝙈𝙀𝙉𝙐 ❳
┃么 ${prefix}toloserti <nama>
┃么 ${prefix}badgirlserti <nama>
┃么 ${prefix}goodgirlserti <nama>
┃么 ${prefix}fuckgirlserti <nama>
┃么 ${prefix}bucinserti <nama>
┣━━━━━━━━━━━━━━
┣━❲ 𝙇𝙊𝙂𝙊 𝙈𝘼𝙆𝙀𝙍 ❳
┃么 ${prefix}joker
┃么 ${prefix}digital
┃么 ${prefix}nulis
┃么 ${prefix}nulis2
┃么 ${prefix}quoteser
┃么 ${prefix}quobucin
┃么 ${prefix}rem
┃么 ${prefix}girlneko
┃么 ${prefix}sadboy
┃么 ${prefix}kaneki
┃么 ${prefix}lolimaker
┣━━━━━━━━━━━━━━
┣━❲ 𝘼𝙉𝙊𝙉𝙔𝙈𝙊𝙐𝙎 𝙈𝙀𝙉𝙐 ❳
┃么 ${prefix}buatroom 628xxx
┃么 ${prefix}room <only owner>
┃么 ${prefix}stopchat <only room>
┃么 ${prefix}menfess 628xx|bot|hai
┣━━━━━━━━━━━━━━
┣━❲ 𝙎𝙊𝙎𝙈𝙀𝘿 𝙎𝙃𝙊𝙋 ❳
┃么 ${prefix}pricelist <layanan>
┃么 ${prefix}order <cara order>
┃么 ${prefix}like jumlah|target
┃么 ${prefix}view jumlah|target
┃么 ${prefix}follower jumlah|username
┃么 ${prefix}cekstatus <idtrx>
┃么 ${prefix}komisi <owner only>
┃么 ${prefix}tarikkomisi <owner only>
┣━━━━━━━━━━━━━━
┣━❲ 𝙑𝙊𝙆𝘼𝙇 𝙈𝙀𝙉𝙐 ❳
┃么 ${prefix}hilih <text>
┃么 ${prefix}halah <text>
┃么 ${prefix}huluh <text>
┃么 ${prefix}heleh <text>
┃么 ${prefix}holoh <text>
┣━━━━━━━━━━━━━━
┣━❲ 𝙍𝘼𝙉𝘿𝙊𝙈 𝙈𝙀𝙉𝙐 ❳
┃么 ${prefix}cecan
┃么 ${prefix}cogan
┃么 ${prefix}mobil
┃么 ${prefix}islamic
┃么 ${prefix}darkjokes
┃么 ${prefix}boneka
┃么 ${prefix}wallhp
┃么 ${prefix}tatasurya
┃么 ${prefix}programing
┣━━━━━━━━━━━━━━
┣━❲ 𝙋𝙍𝙄𝙈𝘽𝙊𝙉 𝙈𝙀𝙉𝙐 ❳
┃么 ${prefix}ramaljodoh
┃么 ${prefix}ramalanjodoh
┃么 ${prefix}nomorhoki
┃么 ${prefix}artimimpi
┃么 ${prefix}artinama
┃么 ${prefix}sifatusaha
┃么 ${prefix}tafsirmimpi
┃么 ${prefix}pasangan
┃么 ${prefix}suamiistri
┃么 ${prefix}ramalcinta
┃么 ${prefix}ramalancinta
┃么 ${prefix}ramaljodohbali
┃么 ${prefix}ramalanjodohbali
┃么 ${prefix}cocoknama
┃么 ${prefix}kecocokannama
┃么 ${prefix}cocokpasangan
┃么 ${prefix}kecocokanpasangan
┣━━━━━━━━━━━━━━
┣━❲ 𝘼𝙎𝙐𝙋𝘼𝙉 𝙂𝘼𝘾𝙃𝘼 ❳
┃么 ${prefix}rika
┃么 ${prefix}bocil
┃么 ${prefix}ukhty
┃么 ${prefix}santuy
┃么 ${prefix}hijaber
┣━━━━━━━━━━━━━━
┣━❲ 𝘼𝙐𝘿𝙄𝙊 𝘾𝙃𝘼𝙉𝙂𝙀𝙍 ❳
┃么 ${prefix}fat
┃么 ${prefix}fast
┃么 ${prefix}slow
┃么 ${prefix}bass
┃么 ${prefix}deep
┃么 ${prefix}tupai
┃么 ${prefix}robot
┃么 ${prefix}blown
┃么 ${prefix}smooth
┃么 ${prefix}earrape
┃么 ${prefix}reverse
┃么 ${prefix}nightcore
┣━━━━━━━━━━━━━━
┣━❲ 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙏𝙄𝙊𝙉 𝙈𝙀𝙉𝙐 ❳
┃么 ${prefix}gempa
┃么 ${prefix}jadwaltv
┃么 ${prefix}gempanow
┃么 ${prefix}bioskopnow
┃么 ${prefix}latintoaksara
┃么 ${prefix}aksaratolatin
┣━━━━━━━━━━━━━━
┣━❲ 𝙍𝘼𝙉𝘿𝙊𝙈 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 ❳
┃么 ${prefix}dadu
┃么 ${prefix}anjing
┃么 ${prefix}patrick
┃么 ${prefix}bucinstick
┃么 ${prefix}gawrgura
┃么 ${prefix}amongus
┣━━━━━━━━━━━━━━
┣━❲ 𝘼𝙐𝘿𝙄𝙊 𝙈𝙀𝙉𝙐 ❳
┃么 ${prefix}audio${ad++}
┃么 ${prefix}audio${ad++}
┃么 ${prefix}audio${ad++}
┃么 ${prefix}audio${ad++}
┃么 ${prefix}audio${ad++}
┃么 ${prefix}audio${ad++}
┃么 ${prefix}audio${ad++}
┃么 ${prefix}audio${ad++}
┃么 ${prefix}audio${ad++}
┃么 ${prefix}audio${ad++}
┃么 ${prefix}audio${ad++}
┃么 ${prefix}audio${ad++}
┃么 ${prefix}audio${ad++}
┃么 ${prefix}audio${ad++}
┃么 ${prefix}audio${ad++}
┃么 ${prefix}audio${ad++}
┃么 ${prefix}audio${ad++}
┃么 ${prefix}audio${ad++}
┃么 ${prefix}audio${ad++}
┃么 ${prefix}audio${ad++}
┣━━━━━━━━━━━━━━
┣━❲ 𝙁𝙐𝙉 𝙈𝙀𝙉𝙐 ❳
┃么 ${prefix}goblokcek 
┃么 ${prefix}jelekcek 
┃么 ${prefix}gaycek
┃么 ${prefix}lesbicek
┃么 ${prefix}gantengcek 
┃么 ${prefix}cantikcek
┃么 ${prefix}begocek 
┃么 ${prefix}suhucek
┃么 ${prefix}pintercek
┃么 ${prefix}jagocek
┃么 ${prefix}nolepcek
┃么 ${prefix}babicek
┃么 ${prefix}bebancek
┃么 ${prefix}baikcek
┃么 ${prefix}jahatcek
┃么 ${prefix}anjingcek
┃么 ${prefix}haramcek
┃么 ${prefix}pakboycek
┃么 ${prefix}pakgirlcek
┃么 ${prefix}sangecek 
┃么 ${prefix}bapercek
┃么 ${prefix}fakboycek
┃么 ${prefix}alimcek
┃么 ${prefix}suhucek
┃么 ${prefix}fakgirlcek
┃么 ${prefix}kerencek
┃么 ${prefix}wibucek
┣━━━━━━━━━━━━━━
┣━❲ 𝙒𝘼𝙇𝙇𝙋𝘼𝙋𝙀𝙍 𝙈𝙀𝙉𝙐 ❳
┃么 ${prefix}milf
┃么 ${prefix}loli
┃么 ${prefix}wallml
┃么 ${prefix}waifu
┃么 ${prefix}husbu
┃么 ${prefix}cosplay
┃么 ${prefix}ppcouple
┃么 ${prefix}wallpaperislami
┃么 ${prefix}wallpaperinori
┃么 ${prefix}wallpaperanime
┃么 ${prefix}wallpapergamer
┃么 ${prefix}wallpapermeme
┃么 ${prefix}wallpaperprogamer
┃么 ${prefix}wallpaperteknologi
┃么 ${prefix}wallpapercyber
┣━━━━━━━━━━━━━━
┣━❲ 𝘼𝙉𝙄𝙈𝙀 𝙈𝙀𝙉𝙐 ❳
┃么 ${prefix}cry
┃么 ${prefix}hug
┃么 ${prefix}pat
┃么 ${prefix}bully
┃么 ${prefix}lick
┃么 ${prefix}kiss
┃么 ${prefix}awoo
┃么 ${prefix}waifu
┃么 ${prefix}shinobu
┃么 ${prefix}cuddle
┃么 ${prefix}megumin
┃么 ${prefix}slap
┃么 ${prefix}neko
┃么 ${prefix}wink
┃么 ${prefix}dance
┃么 ${prefix}poke
┃么 ${prefix}glomp
┃么 ${prefix}bite
┃么 ${prefix}nom
┃么 ${prefix}handhold
┃么 ${prefix}highfive
┃么 ${prefix}wave
┃么 ${prefix}smug
┃么 ${prefix}smile
┃么 ${prefix}bonk
┣━━━━━━━━━━━━━━
┣━❲ 𝘾𝙀𝙍𝙋𝙀𝙉 𝙈𝙀𝙉𝙐 ❳
┃么 ${prefix}cerpen-sejarah
┃么 ${prefix}cerpen-sedih
┃么 ${prefix}cerpen-sastra
┃么 ${prefix}cerpen-romantis
┃么 ${prefix}cerpen-rohani
┃么 ${prefix}cerpen-rindu
┃么 ${prefix}cerpen-remaja
┃么 ${prefix}cerpen-ramadhan
┃么 ${prefix}cerpen-petualangan
┃么 ${prefix}cerpen-persahabatan
┃么 ${prefix}cerpen-perpisahan
┃么 ${prefix}cerpen-perjuangan
┃么 ${prefix}cerpen-penyesalan
┃么 ${prefix}cerpen-pengorbanan
┃么 ${prefix}cerpen-pengalaman
┃么 ${prefix}cerpen-pendidikan
┃么 ${prefix}cerpen-penantian
┃么 ${prefix}cerpen-patahhati
┃么 ${prefix}cerpen-olahraga
┃么 ${prefix}cerpen-nasionalisme
┃么 ${prefix}cerpen-nasihat
┃么 ${prefix}cerpen-motivasi
┃么 ${prefix}cerpen-misteri
┃么 ${prefix}cerpen-mengharukan
┃么 ${prefix}cerpen-malaysia
┃么 ${prefix}cerpen-liburan
┃么 ${prefix}cerpen-kristen
┃么 ${prefix}cerpen-korea
┃么 ${prefix}cerpen-kisahnyata
┃么 ${prefix}cerpen-keluarga
┃么 ${prefix}cerpen-kehidupan
┃么 ${prefix}cerpen-jepang
┃么 ${prefix}cerpen-inspiratif
┃么 ${prefix}cerpen-gokil
┃么 ${prefix}cerpen-galau
┃么 ${prefix}cerpen-cintasejati
┃么 ${prefix}cerpen-cintasegitiga
┃么 ${prefix}cerpen-cintasedih
┃么 ${prefix}cerpen-cintaromantis
┃么 ${prefix}cerpen-cintapertama
┃么 ${prefix}cerpen-cintaislami
┃么 ${prefix}cerpen-cinta
┃么 ${prefix}cerpen-budaya
┃么 ${prefix}cerpen-bahasasunda
┃么 ${prefix}cerpen-bahasajawa
┃么 ${prefix}cerpen-bahasainggris
┃么 ${prefix}cerpen-bahasadaerah
┃么 ${prefix}cerpen-anak
┣━━━━━━━━━━━━━━
┣━❲ 𝙉𝙎𝙁𝙒 𝙈𝙀𝙉𝙐 ❳
┃么 ${prefix}yuri
┃么 ${prefix}ero
┃么 ${prefix}foot
┃么 ${prefix}ass
┃么 ${prefix}cuckold
┃么 ${prefix}cum
┃么 ${prefix}hentai
┃么 ${prefix}gangbang
┃么 ${prefix}femdom
┃么 ${prefix}ahegao
┃么 ${prefix}glasses
┃么 ${prefix}jahy
┃么 ${prefix}orgy
┃么 ${prefix}pussy
┃么 ${prefix}thighs
┃么 ${prefix}panties
┃么 ${prefix}thighs
┃么 ${prefix}masturbation
┃么 ${prefix}chiisaihentai
┃么 ${prefix}trap
┃么 ${prefix}blowjob
┃么 ${prefix}yaoi
┃么 ${prefix}ecchi
┃么 ${prefix}hentai
┃么 ${prefix}ahegao
┃么 ${prefix}hololewd
┃么 ${prefix}sideoppai
┃么 ${prefix}animefeets
┃么 ${prefix}animebooty
┃么 ${prefix}animethighss
┃么 ${prefix}hentaiparadise
┃么 ${prefix}animearmpits
┃么 ${prefix}hentaifemdom
┃么 ${prefix}lewdanimegirls
┃么 ${prefix}biganimetiddies
┃么 ${prefix}animebellybutton
┃么 ${prefix}hentai4everyone
┣━━━━━━━━━━━━━━
┣━❲ 𝙎𝙊𝙐𝙉𝘿 𝙈𝙀𝙉𝙐 ❳
┃么 ${prefix}sound1
┃么 ${prefix}sound2
┃么 ${prefix}sound3
┃么 ${prefix}sound4
┃么 ${prefix}sound5
┃么 ${prefix}sound6
┃么 ${prefix}sound7
┃么 ${prefix}sound8
┃么 ${prefix}sound9
┃么 ${prefix}sound10
┃么 ${prefix}sound11
┃么 ${prefix}sound12
┃么 ${prefix}sound13
┃么 ${prefix}sound14
┃么 ${prefix}sound15
┃么 ${prefix}sound16
┃么 ${prefix}sound17
┃么 ${prefix}sound18
┃么 ${prefix}sound19
┃么 ${prefix}sound20
┃么 ${prefix}sound21
┃么 ${prefix}sound22
┃么 ${prefix}sound23
┃么 ${prefix}sound24
┃么 ${prefix}sound25
┃么 ${prefix}sound26
┃么 ${prefix}sound27
┃么 ${prefix}sound28
┃么 ${prefix}sound29
┃么 ${prefix}sound30
┃么 ${prefix}sound31
┃么 ${prefix}sound32
┃么 ${prefix}sound33
┃么 ${prefix}sound34
┃么 ${prefix}sound35
┃么 ${prefix}sound36
┃么 ${prefix}sound37
┃么 ${prefix}sound38
┃么 ${prefix}sound39
┃么 ${prefix}sound40
┃么 ${prefix}sound41
┃么 ${prefix}sound42
┃么 ${prefix}sound43
┃么 ${prefix}sound44
┃么 ${prefix}sound45
┃么 ${prefix}sound46
┃么 ${prefix}sound47
┃么 ${prefix}sound48
┃么 ${prefix}sound49
┃么 ${prefix}sound50
┃么 ${prefix}sound51
┃么 ${prefix}sound52
┃么 ${prefix}sound53
┃么 ${prefix}sound54
┃么 ${prefix}sound55
┃么 ${prefix}sound56
┃么 ${prefix}sound57
┃么 ${prefix}sound58
┃么 ${prefix}sound59
┃么 ${prefix}sound60
┃么 ${prefix}sound61
┃么 ${prefix}sound62
┃么 ${prefix}sound63
┃么 ${prefix}sound64
┃么 ${prefix}sound65
┃么 ${prefix}sound66
┃么 ${prefix}sound67
┃么 ${prefix}sound68
┃么 ${prefix}sound69
┃么 ${prefix}sound70
┃么 ${prefix}sound71
┃么 ${prefix}sound72
┃么 ${prefix}sound73
┃么 ${prefix}sound74
┣━━━━━━━━━━━━━━
┣━❲ 𝙏𝙀𝙓𝙏𝙋𝙍𝙊 𝙈𝙀𝙉𝙐 ❳
┃么 ${prefix}metallic text
┃么 ${prefix}naruto text
┃么 ${prefix}butterfly text
┃么 ${prefix}flaming text
┃么 ${prefix}shadow text
┃么 ${prefix}cup text
┃么 ${prefix}cup1 text
┃么 ${prefix}romance text
┃么 ${prefix}smoke text
┃么 ${prefix}burnpaper text
┃么 ${prefix}lovemessage text
┃么 ${prefix}undergrass text
┃么 ${prefix}love text
┃么 ${prefix}coffe text
┃么 ${prefix}woodheart text
┃么 ${prefix}woodenboard text
┃么 ${prefix}summer3d text
┃么 ${prefix}wolfmetal text
┃么 ${prefix}nature3d text
┃么 ${prefix}underwater text
┃么 ${prefix}goldenrose text
┃么 ${prefix}summernature text
┃么 ${prefix}letterleaves text
┃么 ${prefix}glowingneon text
┃么 ${prefix}fallleaves text
┃么 ${prefix}flamming text
┃么 ${prefix}harrypotter text
┃么 ${prefix}carvedwood text
┃么 ${prefix}tiktok text1 text2
┃么 ${prefix}arcade8bit text1 text2
┃么 ${prefix}battlefield4 text1 text2
┃么 ${prefix}pubg text1 text2
┣━━━━━━━━━━━━━━
┣━❲ 𝙀𝙋𝙃𝙊𝙏𝙊 𝙈𝙀𝙉𝙐 ❳
┃么 ${prefix}wetglass text
┃么 ${prefix}multicolor3d text
┃么 ${prefix}watercolor text
┃么 ${prefix}luxurygold text
┃么 ${prefix}galaxywallpaper text
┃么 ${prefix}lighttext text
┃么 ${prefix}beautifulflower text
┃么 ${prefix}puppycute text
┃么 ${prefix}royaltext text
┃么 ${prefix}heartshaped text
┃么 ${prefix}birthdaycake text
┃么 ${prefix}galaxystyle text
┃么 ${prefix}hologram3d text
┃么 ${prefix}greenneon text
┃么 ${prefix}glossychrome text
┃么 ${prefix}greenbush text
┃么 ${prefix}metallogo text
┃么 ${prefix}noeltext text
┃么 ${prefix}glittergold text
┃么 ${prefix}textcake text
┃么 ${prefix}starsnight text
┃么 ${prefix}wooden3d text
┃么 ${prefix}textbyname text
┃么 ${prefix}writegalacy text
┃么 ${prefix}galaxybat text
┃么 ${prefix}snow3d text
┃么 ${prefix}birthdayday text
┃么 ${prefix}goldplaybutton text
┃么 ${prefix}silverplaybutton text
┃么 ${prefix}freefire text
┣━━━━━━━━━━━━━━
┣━❲ 𝙍𝘼𝙉𝘿𝙊𝙈 𝙄𝙈𝘼𝙂𝙀 ❳
┃么 ${prefix}bj
┃么 ${prefix}ero
┃么 ${prefix}ppcp
┃么 ${prefix}cum
┃么 ${prefix}feet
┃么 ${prefix}yuri
┃么 ${prefix}trap
┃么 ${prefix}lewd
┃么 ${prefix}feed
┃么 ${prefix}eron
┃么 ${prefix}solo
┃么 ${prefix}gasm
┃么 ${prefix}poke
┃么 ${prefix}anal
┃么 ${prefix}holo
┃么 ${prefix}tits
┃么 ${prefix}kuni
┃么 ${prefix}kiss
┃么 ${prefix}erok
┃么 ${prefix}smug
┃么 ${prefix}baka
┃么 ${prefix}solog
┃么 ${prefix}feetg
┃么 ${prefix}lewdk
┃么 ${prefix}waifu
┃么 ${prefix}pussy
┃么 ${prefix}femdom
┃么 ${prefix}cuddle
┃么 ${prefix}hentai
┃么 ${prefix}eroyuri
┃么 ${prefix}cum_jpg
┃么 ${prefix}blowjob
┃么 ${prefix}erofeet
┃么 ${prefix}holoero
┃么 ${prefix}classic
┃么 ${prefix}erokemo
┃么 ${prefix}fox_girl
┃么 ${prefix}futanari
┃么 ${prefix}lewdkemo
┃么 ${prefix}wallpaper
┃么 ${prefix}pussy_jpg
┃么 ${prefix}kemonomimi
┃么 ${prefix}nsfw_avatar
┗━━━━━━━━━━━━\n
☕Sc:chat owner
☎️Pemilik bot: https://wa.me//6282252285143
`
}

exports.rulesBot = () =>{
return`*──「 RULES-BOT 」──*

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengejek bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah paham rulesnya
Ketik *#menu* untuk memulai bot`
}

exports.donasiBot = (cekName,ucapanWaktu) =>{
return`──「 *MENU DONATE* 」──

Hi Kak *${cekName}* ${ucapanWaktu} 👋🏻

*Payment Pulsa Telkom*
Number: 082350496532

*Payment Dana*
Number: 082350496532
A/N: RyanStore

*Payment Gopay*
Number: 082252285143
A/N: RyanStore

${monoSpace}Terimakasih untuk kamu yang sudah donasi untuk perkembangan bot ini ^_^${monoSpace}

──「 *THX FOR YOU* 」──`
}

exports.infoOwner = () =>{
return`──「 *INFO OWNER* 」──

 *Data Profil*
 • *Nama:* Ryan Adt Prtm
 • *Umur:* 24th
 • *Hoby:* Turu/Game
 • *Askot:* Indonesia,Jawa barat
 • *Konten:* Creator

_iam developer bot whatsapp._

 *Sosial Media*
 • *Whatsapp:* 082252285143
 • *Github:* YannPrtm
 `
}