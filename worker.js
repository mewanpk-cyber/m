const SALT="9404c660aedb35a9";
const ORIGIN="https://mewanpk-cyber.github.io";
const DAILY_LIMIT=100;
const MODEL="claude-sonnet-5-5";
const ACC={"user001": "a6c0fb92a06953999a4347a3688db087bd68c531591abe8ed9cebb9ecfd3020b", "user002": "ab3048f9418b7a0d76de106bb5bf42b4f83987d110b35b95eeec18985bc50ea0", "user003": "10c9a9fc4c88861097662f3512908fda5f29eddf8b0729c624d99b03c29ab6c8", "user004": "69ab1beb525c4188d97f73a876ccd5a1caa3f5eb0fd97c4c2d7b025fd8a2d40b", "user005": "b82e5259356d90a6914946a14fa1e6db513ab994ac6a2960f9d72b554724b38c", "user006": "793df0be9215060875a8f071fc7eebf1b81e19f87b1ccaaff0bf004855a05194", "user007": "b6521eb9d392b7b504f989fd05be2f5a49a1646910640cb945ca6f785e793ca7", "user008": "99382aeb5633c8ab45e2df6d8d4186cc4fa9a4839273ae21a6e0c8f356b0b296", "user009": "8c1466591bac63c24a81b80e57f5d4f0d1d4f174a0c9aa0c7956214252ec905c", "user010": "260cd85cb8e25aa027a9af0162a221f516183a4929f91c03230c66f89012ac82", "user011": "1ff421f017abb8fe73a85748f5fe3b7755a54c0888b07136e24ec2d29114450a", "user012": "0d07db4ca3d986bc23d0e5effa38d41838786a44a3711208e3358d18ca128560", "user013": "05c72974aa0408e940d153ab56c44935313bbdc2e8cbd6d01c6d270ced17f1c5", "user014": "1668032461131809f8ff76d2d54df38899f933dfc020d36133c9a9a90571bbf1", "user015": "52c8ee20dc025913df29026cfaf977ee0f508385d3ec764767eee7fddf5daf48", "user016": "8af2675bc041220fe6b7cf9b924ace48f246ee95c67c62e0af43e1c8e6d231f8", "user017": "77361e613d8ed200127e97d37b16cc50d553a4365d4f0eb199d1e49b417b22e9", "user018": "aa63ca63b366445ca0f6f9e2a416cb4c20bd03d94cf946b06184559271250f73", "user019": "bead6a22efeb72ee4aceb5d82406fb54fe27d0904c37f6463b756a1da147c47b", "user020": "c9ba8d2c59d08b988b63a958b9e5bf320fee1a27c02ee576045f094a7617f911", "user021": "982407382cb263fa0f67c0ecf643b32ba5f2daba813425da9d2f578464c36e7a", "user022": "7abade54c3450eb819dbc1e8a81bac5dd2bc4a287dff77a52df83d834b44fdd4", "user023": "2ddade5039347b65c9b871af97c7130cdb50670344e74f0440a1e569ea52d855", "user024": "45623341985eb19130a548e1a16eca0ca0ca86ab73507311e457e60b99550775", "user025": "f2b033f2459c52cef105ab4712263d59d8bcc2371483e85002c6a8c221f05630", "user026": "6160ba6099848ac8071706e1155bb3406085384251b70667cecc171987e4ad96", "user027": "1e98ca2b7f1f661612044001d51a625d3a326fd0241d47639c092d9d682ee6cc", "user028": "5ceff494d56a18b0e6a5f5dd9f27375c07c3dbed5b621a412116c011e0e1658d", "user029": "a127772b06aec5a87ef8347bbedb82a66fb04a0e877e76e3e0dc1476244cac20", "user030": "5c6c34007fd32638ee0fb1ebdb4e457fe90d331f9b65b177ea635d3446351b64", "user031": "7fafbb5aad7942c2a077ec90c7b88a29e3e69816e022150a390184cd0417470c", "user032": "5488fc3234a7491cb96acfa46e438f4b17e0809c9a76fce406531a892bd52cc8", "user033": "3f3be9832d4cd77e03fb9c3123b34e99c6f0a2e14837d6d47ba1cec216f82b6f", "user034": "6f5eac2c21fbc599f7742c7e6add5464c931375bfc446b689f7eb5fabd947f3e", "user035": "ff4f6eb0e6db9ecdd2b58dfcccf7e4a04ba85c072701af50aa06e955b3d8d9b2", "user036": "5375d91c28c3a5f44ad50b8d4542ca80850ea290423bd941906d27d6ac951a4c", "user037": "aaf651de6be1748df8f9ebabe87d0005a4b4e89ed7033d2942e217a36e15070b", "user038": "95f338a48b351810bd49aff879cf2fad75485b1adb04299b416da822b70a5b79", "user039": "e202875695cbb3a187413ae81696d6867534eb7085683c6ab02874dad174fdce", "user040": "98fe91e9abef50121948865d3ddf7c1969905839c43449ca848f2358f507e91a", "user041": "87335fce92df0d7c0f17ba9bb43e39b343d18033947fd9b3bf93e4dd04b62398", "user042": "3f8f7c9094ffb296a50a9c571345d1831d372c01356c0c2fc6fa068f39c7861d", "user043": "a4756589f6e625104b5f0eaaefd0364e7265979886c831b42a95422e5c9faedf", "user044": "27c1e8e62ea7c766a812fcc9dc46ae649d18beec93196d56e8bada9abc2d5ff7", "user045": "bce86a10570fff11312c2f5131460d58940421aa2f8bd91340dc7a604fb62e48", "user046": "904e493ac554a8aed689cfae3f1609cc83c96f744bcb97d512f85804b647056b", "user047": "523d073e8ee00b6d631812d98206ab4b5ecdf56f2ea2e0b7e93b803d73903497", "user048": "886d73d77453d32c948ae241390205d772ff68fc44221ed475ad2eff2c073cba", "user049": "b71feddb2b3ddf95d5efac3d62dbb39f842802ce71eb81382bb52b0dc1a3a972", "user050": "758fc721557491ebb00e32a191395b8e0aac49ef9e3e52984ed51f325c47506d", "user051": "e90e5f7d29f173a3820de4bc0d585b97bd7fa3857a10c8db5be6a36d3e29ce45", "user052": "3479b8e990e7bbbfcedd4d19a6334b96b7b7cf889252e75fe2832ac39001c624", "user053": "5603cc848ee16e62e5f9e8f1e5b31b4195c85d72142f54aef5d5b2b65e267ed1", "user054": "96686dc10bfe5431476e7daeb8b88000cd966979da7689dacff5e5c0398f0104", "user055": "83a843c8ce0e0a9962d35d23044e0439d6b41f66b826d52d6429d7be8a63acf5", "user056": "fc05b2fbb766509f24bb3da26227e4aa5eed6d3d3d55a60afc2e1b9bbb4c936e", "user057": "d914637694c08bca9f44eda605097c9a9f53f3748606894f0f3e25fc136ec074", "user058": "b112a8a334a119830f06ff42e7edf0b3db0d3d05c7e8762049f0af0c273af56e", "user059": "3919ea0478c03c930fc70c659ba5c89bdc622383e4c271db2e33738908623a27", "user060": "94c314a7b184a87a0ab2216e163c8e46be16ca6e7aeb023631b1eea8900e76b5", "user061": "7f5ddda10e2a9b3fd6028c580361bb9750512afd4dad62bfa1924042ac8e25a4", "user062": "ee32780c63ab1837f6694ed20bcd08909e13c642702c58e092ee0a7b080d470c", "user063": "55ea7e99b719cf7c640f47f020946386ea3ef92ec1f20882e5ba2f92d75d0c44", "user064": "f9f25358a101662c73a71c367d4caec3edd0b03f7e02b82540cb486f3b932f43", "user065": "cb3e038a18873c61ace5b580a30178037695b1db7b39eb0cb7d1286b1c79b8d1", "user066": "5dfea535bcbafc5f4b9c97a4f59d9f3702f7080320655dafa4edf3fabf27bbb6", "user067": "9fd48a56dfc717ece48dc6fa4ea6ff4cd057f8e2a25ba5b5cc6652c6bab0204d", "user068": "355638bb5515c820ea129af76f75e70bd2e5b094b9b4d6c4fcc4f97a9f43de40", "user069": "7eed96e0d47f6ffeb538fe3894773a412f54f0b0bc0f1771b935209bae6615c4", "user070": "8108ecca890f436188a7429984345a44aa13e9150ed139627f1906f9ac861230", "user071": "e324a3a667ea4e8c6f8a8381bde8f6b6eafe1146b678bad89502c2fbf3f35a70", "user072": "f1f6a3fd55276c6fa3c636bdb79aed63c6f2d45b05215687467e310061f29dc5", "user073": "3e44a671d78f9d26a85a1980dbc284d6713b98b06f7c2ae7fea93f95484bbaad", "user074": "e48c1a883b8f8384a371559136f73b5c41172501ff2c1e1c461a35f59b970126", "user075": "4555035e04307c7bbba1964d979fdd2e923035435be86bdf64b318ec39e6b475", "user076": "8c7d72c5325d3350e31c0763b00c1806ed7e0f02497d1b8e6388c0059a4da342", "user077": "12f2544db429292ed2b2c088928fde3730d758bee242c3988c197b8f9882df81", "user078": "7a95047ca7372ed5b20e329e2a49eef9d9cc78fa2d63947140a799dbebefb067", "user079": "91bd9bd758d78c2b5a0348a95c75850928893a285fcec6289718b2e713b462e6", "user080": "73eb574db3165ff67f013c24a9fa9f13cf8fbba7aceff71275402097f373c4a8", "user081": "99416deb51dc08fd7fd8b7dc7dff41e9f729fd2f1a7d5b5f102ef3acb2b382fb", "user082": "cc34584d340ac7dd923dee04f9cf31bcd7f87a7345907154f12bf8231b4948b6", "user083": "f23dce11da06c32510417b36a4ddf3981f0931f312b3d0bc7d591c4b733c6adb", "user084": "38d5dcb9c86af148b47bc267a739ba434b864089e6d0592e55b6a4e9f010f71a", "user085": "53518f4ac3efe9bd6f1c92a3b698f2ec3b73cd16e35ee604a1e67ede96843ef9", "user086": "44b91f8fe2e6487ad5026cf716ef5eb1766539f9ea4d15348ca3b6c9f89c1460", "user087": "7ee2c50fe9eb419a687abcfb2bea6960d6ea7ad0dbb9c0e7a9734c78220e63db", "user088": "7356b1695849dda53fe9d75540914cd0f025901e8e573ab61feaaeb93d9fa7bb", "user089": "427a27bd2736361fdc4ba281f712d5cf6d5ed1a4e0542480fff58745c7f9aeab", "user090": "4c193dbf0613a6e53632c40612bccdd9c7b85beb9b50f48e147e2dff17801a26", "user091": "078c1ac1fcab66eb9a613ddff9db31cf1eec2e6f7e4b7e1426f3758fb85e2c36", "user092": "21511e23795f359a26e96b90f1b85cfa7b74ea35397b40359094f43b9afbf719", "user093": "721972dda798578fe43297d96b6f6b5a3e651d3311ed9940975c2c43f0603d3c", "user094": "1af136745f2a08c2e7db2e53209901a01bbbb78e4d8d0f306f04dcdf4e955221", "user095": "cdc694eb0301f5ac05fb530869a14999f5741947de0547648e6e62f22935d8d9", "user096": "fe0dcd8ff343d230166587c2e4506f7a9ff612cc0739669f3d001036afaf7009", "user097": "7f26c621d65ee78fe8b3c98811ad3a05a7a279e52d074bd5c5859da284875586", "user098": "5d5808308faa879e5836e711caf250f361071d8ea173dc4e1b14635f877749c6", "user099": "7790baa0a5ac666e446ddb86e80c77a3471bf7b890531880c00d0918269b6c74", "user100": "5cf6928c557b8096efbeb676ed213524a417e9548e9edf3289ae5dc5ae10688d"};
async function sha(t){
  const b=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(t));
  return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,"0")).join("");
}
export default {
  async fetch(req, env){
    const cors={"Access-Control-Allow-Origin":ORIGIN,"Access-Control-Allow-Methods":"POST, OPTIONS","Access-Control-Allow-Headers":"Content-Type"};
    const J=(o,s=200)=>new Response(JSON.stringify(o),{status:s,headers:{...cors,"Content-Type":"application/json"}});
    if(req.method==="OPTIONS")return new Response(null,{headers:cors});
    if(req.method!=="POST")return J({error:"method"},405);
    let b;try{b=await req.json()}catch{return J({error:"invalid_json"},400)}

    // Required Cloudflare bindings/secrets. These must be configured in Worker Settings.
    if(!env.ACCOUNTS || typeof env.ACCOUNTS.get!=="function")return J({error:"accounts_binding"},500);
    if(!env.ANTHROPIC_API_KEY)return J({error:"anthropic_key"},500);

    const user=String(b.user||"").toLowerCase().trim();
    const key=String(b.key||"").toUpperCase().trim();
    const device=String(b.device||"").slice(0,64);
    if(!/^user\d{3}$/.test(user)||!key||!device)return J({error:"bad"},401);

    const h0=ACC[user];
    if(!h0||(await sha(`${SALT}:${user}:${key}`))!==h0)return J({error:"bad"},401);
    const dk="dev:"+user;
    const devs=(await env.ACCOUNTS.get(dk,"json"))||[];

    // max 2 devices per account
    if(!devs.includes(device)){
      if(devs.length>=2)return J({error:"device"},403);
      devs.push(device);
      await env.ACCOUNTS.put(dk,JSON.stringify(devs));
    }
    if(b.action==="login")return J({ok:1});
    if(b.action!=="chat")return J({error:"action"},400);

    // daily limit per account (protects your API cost)
    const ck=`cnt:${user}:${new Date().toISOString().slice(0,10)}`;
    const n=parseInt((await env.ACCOUNTS.get(ck))||"0");
    if(n>=DAILY_LIMIT)return J({error:"limit"},429);
    await env.ACCOUNTS.put(ck,String(n+1),{expirationTtl:172800});

    let msgs=(Array.isArray(b.messages)?b.messages:[]).slice(-12)
      .map(m=>({role:m.role==="assistant"?"assistant":"user",content:String(m.content||"").slice(0,4000)}));
    while(msgs.length&&msgs[0].role!=="user")msgs.shift();
    if(!msgs.length)return J({error:"err"},400);
    if(typeof b.image==="string"&&b.image.length<2500000){
      msgs[0].content=[{type:"image",source:{type:"base64",media_type:"image/jpeg",data:b.image}},{type:"text",text:msgs[0].content}];
    }
    let r;
    try{
      r=await fetch("https://api.anthropic.com/v1/messages",{
        method:"POST",
        headers:{"x-api-key":env.ANTHROPIC_API_KEY,"anthropic-version":"2023-06-01","content-type":"application/json"},
        body:JSON.stringify({model:MODEL,max_tokens:700,messages:msgs})
      });
    }catch{
      return J({error:"anthropic_network"},502);
    }

    const j=await r.json().catch(()=>({}));
    if(!r.ok){
      const detail=j?.error?.message||j?.message||`HTTP ${r.status}`;
      return J({error:"anthropic",detail:String(detail).slice(0,300)},502);
    }
    const text=(j.content||[]).filter(x=>x.type==="text").map(x=>x.text).join("\n");
    if(!text)return J({error:"empty_ai_response"},502);
    return J({text});
  }
};
