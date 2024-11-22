'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
".git/config": "94c9c62e0c20b4b8f29a542a9bf1ce84",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "07325fd6bdd07b4e3ba1733a4209bdfb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5047683d2d58b9a3d369d854731d75ad",
".git/logs/refs/heads/master": "5047683d2d58b9a3d369d854731d75ad",
".git/objects/01/d9f5309afeb98810c07d58b9d372d07e665494": "8a2cf7c9fe18c789d3956a9a90f1dd28",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0e/795fdc719b25e458a59cd9fc4aba16e26ddbb2": "9e590db03ec6f2875a6c272bae2b2fc5",
".git/objects/0f/0883a11ed1853630b202cc0a6ca24b3a572d4c": "c73c411b05a25e1d4e71a665dcf974fb",
".git/objects/12/5a77d824ffad0cc46422fb9e444c8d586d5d71": "1810abee9da67dea91d7d8278adf2bd3",
".git/objects/13/5047d909c4174be1fd3951d291318f579fdecd": "1c3e299008cb6ef45c2e205db0536c9e",
".git/objects/1e/dd5805284d0e435b8c4d1db48e5ef1c65ee838": "1d977e2e1bfef1348ea049c81a0ddc39",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/21/876740fd4d03cd4bf185c78c1e90fd50b58456": "d1785e0477f54d4c767b94049a60fc5e",
".git/objects/21/fdb4ae97030d309e61c7f41dc6a9e7fe4cc947": "b311a0a406481683694c7d24a483bf7c",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2e/0971af5f42d15c6b2664cfbd09fc8924249d9a": "8c30d0aff5904d84cbbd4fd771e0352f",
".git/objects/2e/7fc1e1cfb8a397ce4c21653d8bf08e10669aaa": "08643a4c073026021620737dadd28767",
".git/objects/2e/da58a64dc8a1c91f5ffd0f161dd6b00ec588ea": "103135e68553e098db90f1578b26e915",
".git/objects/31/e4e40757f76c5b6c33c449ceddc5d91a7b29b7": "dc8bd76fe9977c640c65c6f10cda265f",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/fe82c1a3258bca1e06c4c9408fdc457da72767": "30cac691894040e94f8f04df9d1fe68e",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/5c7a8cae3182c4293f590405652dc7206cd997": "951e734d77d3a7e211d683ead3b2505f",
".git/objects/47/17b4b71afaa44ff3883415398e6b2e754e13b1": "df196603a852d46469068533726a4dc3",
".git/objects/4f/132e0a46e20bd99ea0a99e4cf7a259c8496e92": "7733a288a1a918e7c7aac8996f3eaeeb",
".git/objects/50/6a210aa9c8060b7303fe1b2cb1a49f598b86ac": "925c7c8881c7c338c7bd836d94d367c9",
".git/objects/58/c9fef3a01c899867e280f49283fbb8e57d631d": "4cb9358325b60c723bd96d35849b060f",
".git/objects/60/256d6148f9ee82ccfcea38bb20f4c04b3ab88a": "11b661830d3f80025d12b9820c1ab8e6",
".git/objects/6a/13a7dfd235667dd72bc2cfb1cb09ceaa5d8b5b": "6edfa035ef9b43079520fb69ac62874e",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/7a/8bb2c530c702d9eda7487ba3a5dac42def298d": "de9bd0974bad895901d51c6ee59e7718",
".git/objects/7b/d23b95dded94c475456221dff9aa6df0b62e24": "44619a3d994f659be62c1bf23ddf6777",
".git/objects/7f/432e550bd2a5e1925053e60a8275c57f61413b": "0a87cb46112164ee759778fa81e63212",
".git/objects/81/488c8fb4ec101227576c41137834b38210a89a": "246cd44075fd5308d1734436515984ec",
".git/objects/81/8de7ab016f793f7c706b25a1f07addc84c5b86": "b787fa30ccf234948195178d6f97145a",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/949fb57bdbf716857433daa601a28a87180f1f": "2f39829d61034422ca87857690e6a8ca",
".git/objects/9f/16d993812692f837a437328516ea21f673fb23": "bd2f440d2b7dc5f3fbd12796e6b1ebf3",
".git/objects/a1/8fd0175d641fd881226b8adb9726e75af0c27a": "7bbd5e93eb330c87d590774ba6058f31",
".git/objects/a1/e99ef36b2d1c56277f26edea14c72f00d3a03e": "1ddb108e6543d8c3a328055db9f2f25e",
".git/objects/a5/668db5e68c1a3b2027da22bd1fef65e3234980": "a8b70a6ccfc0e7e8903fbaf50ea06add",
".git/objects/a8/44c14e2e4b2f2185a7ac5453ce8dd3a20e35b8": "658ccbe6f1fdd88f72062cb90e8e955f",
".git/objects/ac/e2d24983a7e64c40c199827a2257dd68fdd852": "bf551cbc1ea1d822df20daefa6eae15f",
".git/objects/b1/44bde10c12b52bb266dbdd47796d20144d0ac6": "354218135dc02779a95c3ba34fdc042a",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b5/8b8c4cf2aa1294b437674148c6c0bc99beaa4a": "f5f51cc51c26c629d7bc72a65d5912c7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/ee8051b39b783a3141b08696f9608655057596": "a9eef5032698126c2c1869397f85b429",
".git/objects/be/718347fa3157e057d57984ecc1a43fe61182cd": "14a15fd338906db2526c94937ac7be06",
".git/objects/c3/acd3e04b9067784a5c2c49785c3760d82f78f2": "c7c3896c7d485c430ab8c45e64cac98f",
".git/objects/cf/020d46d2a42be8414203e1404f416fbc9c8035": "f8ca603c1a63be51f986338034e64b5b",
".git/objects/cf/07a44976fc02807b3920ce1c3cfaaf00d5056a": "e6385d9f4d793cf00cba5d9b84eb8beb",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d1/0a9551f4164511fb0242142d32cfb88e76fe3e": "86106fef31475e56b6f2cfe0984f6ed4",
".git/objects/d1/3e5518fa6b49c02626d46747c322a98c002d20": "ee50d6bf4b7b38cbd5c9578b2b628fba",
".git/objects/d3/e2d4a6e30fa65816ece0824670e1e571cdf275": "df975830be0cad0449fa86d5f2b9ce09",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/9588a5850997c9073bc11672dac8d2a4908046": "1813b80b3401c6f026bab7f0c2a01bd3",
".git/objects/d5/4a6dbc2f715d0fedd671e5bd09d0ee2e496f73": "5492194531a042472d9bb78cf62ba5bf",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/66f501594f178187e26e978587f34dbfb84024": "fc5f8a497bd3f23fd23da41e669f0fe9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dd/02f1095cd3190593b659c2928a7b38d302d584": "d468cce7637cd992a51a233640b80e76",
".git/objects/e1/74f77a0fa1f011ee46fa5dccaed7294c029f6c": "253801ab0fc2811fa690e4bf5de1833f",
".git/objects/e4/3060bba285058cd3dce0e15951d0acf455254b": "436d8e60588d32e6ccb0985d06badf48",
".git/objects/e4/42d1b8732f2a3c1ba9d4394bb0ccd6211ee9c3": "638d92bdcdd49e76a7d27e6535be41f4",
".git/objects/e5/3a68e5c320ecc5e3b10a375ca4b995119c550e": "ceb8818c204b0c02911cf63e385e994b",
".git/objects/ea/c6de86c145624919d64c655c9694b8a78a23ea": "e78d4cca839d544052bf4dd8d651d2ea",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/befaf3828a2b2df4e95f6854f56379a7c86c0e": "b9c5c668cefcc64133b545f738dc9405",
".git/objects/f1/cfdf872d6ce1bfecd809ba5d84a879cd2eaff7": "2be315a564e8d8418bf728034bbcca23",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/b1bf4c9f10b2e73c9313a5f90328ab9db365da": "5fc760af185df81e8cb8ef898e28b119",
".git/objects/f7/832bf4e146359ac1018621f4aff26fdbfea91a": "a9f8e87142148bba6738272bf937cc5b",
".git/refs/heads/master": "068d0c45f358034aae7dbafc06acb822",
"assets/AssetManifest.bin": "a96dc9d908d428ae994b6c8fd804ad9b",
"assets/AssetManifest.bin.json": "b266ec0ec28ac44467c7bc4da05d0756",
"assets/AssetManifest.json": "30cff7fd546e51f8242c5987b83e5734",
"assets/assets/bkdr.gif": "dce7e2042d1260d4a6ad5996118c2006",
"assets/assets/blogs/Blog1/ADB%2520(%2520Android%2520Debug%2520Bridge).html": "ab31cbb8198211dcf7bab5f0fee8eecc",
"assets/assets/fonts/Inconsolata-Bold.ttf": "e156a118727053f0f6072d0ee05a48eb",
"assets/assets/fonts/Inconsolata-Regular.ttf": "f78a1ec600555b4cff33d243d3db476e",
"assets/assets/fonts/WelcomeToFuture1-E4Xnl.ttf": "3b7c8c95509604e95c975534cf1372de",
"assets/assets/images/1.png": "a062c31b611271f0370df1a5d4eac006",
"assets/assets/images/BDR.png": "9d45fccbe103b926d84e2e816c7b0801",
"assets/assets/images/Certificates/AE.png": "f1e3f7989ed7e3c9944a52eead5d7629",
"assets/assets/images/Certificates/EH.jpg": "bc0dc536c8f1256084fb8042c23a7de7",
"assets/assets/images/Certificates/gcs.png": "1026f97a9d66bb2ea2d4d0911e164486",
"assets/assets/images/Certificates/gl.jpg": "d638bc9ff45bf0e608fef9b53692ab53",
"assets/assets/images/Certificates/incs.png": "ac1dd4b24c1f9d7d1bcdf3812dce0fdd",
"assets/assets/images/Dramaz.png": "676185ff023bf4ba1899fccfdbb2ff05",
"assets/assets/images/Hellen.gif": "44a52caf835ad2d687e4d67ec8016632",
"assets/assets/images/Hellen.png": "3c4c1bcb83f703c8c57ddf01ac9355b6",
"assets/assets/images/Passport.jpg": "8115cb9c3e225abb6acaf1c8a2ef6687",
"assets/assets/images/password.png": "7eda4ae5e35388521addac0c8d6122f1",
"assets/assets/images/pattern.jpg": "7f857fa3409b36a2329c125405a04075",
"assets/assets/images/skills/accesscontrol.gif": "bae6e5f888e72e1016d4a787148b1c78",
"assets/assets/images/skills/aircrack.gif": "cb7b7c56077df1a9354c3ddd174095c8",
"assets/assets/images/skills/android.gif": "43fc8b9a646d7585a50ea589f3471e53",
"assets/assets/images/skills/AS.gif": "84dc35fb8eaec63093ed7b147575e566",
"assets/assets/images/skills/burpsuite.gif": "740ddc7f9a5531cd7b37ba0691636e04",
"assets/assets/images/skills/cpp.gif": "4ece422092458f7bf9cfaae9cb68a861",
"assets/assets/images/skills/cpp.png": "0ae6cf38dfa918d5c07ea197da38cfda",
"assets/assets/images/skills/cryptography.gif": "9d8972a81fc40330da522fdc80ddc825",
"assets/assets/images/skills/CT.gif": "51bd69248e474205040f575c27cbbdff",
"assets/assets/images/skills/cyberforencis.gif": "28e2a6fafab7ece00452103b711fa1d8",
"assets/assets/images/skills/eh.png": "a81e8d8bd3c0914b998b6cc4285afe78",
"assets/assets/images/skills/encryption.gif": "e67407f402881f2aac3641d889292884",
"assets/assets/images/skills/firewalls.gif": "f7c2d198344646eb9deda7e075fc78c6",
"assets/assets/images/skills/hashcat.gif": "c5744ae4f0a2a233c9e575929f01d6aa",
"assets/assets/images/skills/hashing.gif": "01e2b71ff46508bfee7499d8f36b4bbd",
"assets/assets/images/skills/iam.gif": "a6c0e52acf09a5ba888571b610dc5bcd",
"assets/assets/images/skills/incidentresponse.gif": "afe5ea8d1f46ccc8c9d172631f6c71fa",
"assets/assets/images/skills/intrusion.gif": "ee1b8b9057c79a781bc8057a44124efc",
"assets/assets/images/skills/java.gif": "2005565b4e8acc2f1e5106008afb4c98",
"assets/assets/images/skills/linux.gif": "894a04d7ac66804c6426dc31943db664",
"assets/assets/images/skills/linux.png": "e200ecc89b82b8f87eaed04123101cd6",
"assets/assets/images/skills/metasploit.gif": "06b20f4657b8e5d227074709f6e73b78",
"assets/assets/images/skills/mysql.gif": "f58fefccea809436cc53bd5ffa26e878",
"assets/assets/images/skills/networking.gif": "df8d89917a5964678fa87bd12313c340",
"assets/assets/images/skills/nmap.gif": "957ea11ea31e11bd9aebd3266f5b5bd5",
"assets/assets/images/skills/pentesting.gif": "3edc80010f64454e9a838b107025e90a",
"assets/assets/images/skills/phishing.gif": "a20357ec7fd9a25606bdd0bb23ac3bf8",
"assets/assets/images/skills/powershell.gif": "f5158b3011ddc3fe299199b1ef686afd",
"assets/assets/images/skills/PS.gif": "f9ff904d59405b37c1ba2492423248c6",
"assets/assets/images/skills/python.gif": "04c944c66a8c20f4ad78467f78dc64a2",
"assets/assets/images/skills/riskmanagement.gif": "7bdebf54389e0cf01543f6052b4ffab7",
"assets/assets/images/skills/sandboxing.gif": "ad0894cf80368d00de76476eff32fad2",
"assets/assets/images/skills/tcpip.gif": "cc47c4a8afaa6c4a60de8b427781455b",
"assets/assets/images/skills/threatintel.gif": "51bfd576d5d67602c1bc4e77a7562cba",
"assets/assets/images/skills/threatmonitoring.gif": "377454350368bde7e70e8ee2dd56be68",
"assets/assets/images/skills/vpn.gif": "6f47e0ca8c294536321fc22bc2207a2c",
"assets/assets/images/skills/vulnerability.gif": "14d47a97ad3abc25abe96273fcf28a7f",
"assets/assets/images/skills/windows.gif": "c985d57ed5d6c91ff6ad0b6db94c341f",
"assets/assets/images/skills/wireless.gif": "10069532ec3365d748b6f7decf8625fc",
"assets/assets/images/skills/wireshark.gif": "81891e1129e282046b1e5c959f4faf9a",
"assets/assets/images/Social%2520media/github.png": "54c04e3f462dab0c2fbbf83c676c21f5",
"assets/assets/images/Social%2520media/linkedin.png": "d2b6c44104204eb1644c41e0382b9656",
"assets/assets/images/Social%2520media/whatsapp.gif": "b7d82e3c02136d794cc3210a9dd86b5d",
"assets/assets/images/Social%2520media/whatsapp.png": "03cb1f51bc80a0aa476358049ec3f5c8",
"assets/assets/images/Stabit.png": "36eec99e4f6daa234688d003f24af443",
"assets/assets/images/WS.png": "d1d5f96d04912e3cfaddc0f595706577",
"assets/FontManifest.json": "40eea3b56a218dbc2e08367d520060f3",
"assets/fonts/MaterialIcons-Regular.otf": "cf4b5ec2a31851612bd75ab752b3cd12",
"assets/NOTICES": "9226300ec729a7cac12854ec8ee1f249",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "54e486a84f1f7dbc1ac18cc85e554912",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"ICSE-Paper-Biology-2023.pdf": "66718449629028b24cd3044880dc9f0c",
"index.html": "917c0b8f822b00821d043d5c6f640bd8",
"/": "917c0b8f822b00821d043d5c6f640bd8",
"main.dart.js": "845aaf5a8a1a16020c71e91f9651d75b",
"manifest.json": "f7a6f1dc5a133bfec30b36d7f240ec2b",
"t.png": "7eda4ae5e35388521addac0c8d6122f1",
"version.json": "47b7f3bd4cefe2733371189eb2989012"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
