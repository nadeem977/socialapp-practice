
import { GoHome } from "react-icons/go";
import { MdSlowMotionVideo } from "react-icons/md";
import { ComminunityIcon } from "./Icons";
import { AiOutlineFire } from "react-icons/ai";
import { GoBell } from "react-icons/go";
import { MdOutlineExplore } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { BsSend } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { PostType } from "./type";
import { PiShareFatLight } from "react-icons/pi";
import { MdOutlineEdit } from "react-icons/md";
import { GoShareAndroid } from "react-icons/go";
import { FaLink } from "react-icons/fa6";


export const SidebarData = [
    {
        title:"Home",
        icon:<GoHome/>
    },
    {
        title:"Video",
        icon:<MdSlowMotionVideo/>
    },
    {
        title:"Communities",
        icon:<ComminunityIcon/>
    },
    {
        title:"Trending",
        icon:<AiOutlineFire/>
    },
    {
        title:"Notifications",
        icon:<GoBell/>
    },
    {
        title:"Explore",
        icon:<MdOutlineExplore/>
    },
    {
        title:"Profile",
        icon:<IoPersonOutline/>
    },
    {
        title:"Messages",
        icon:<BsSend/>
    },
    {
        title:"Settings",
        icon:<IoSettingsOutline/>
    },
]
export const tranding = [
    {
        title:"Fitness",
        followers:"3.6k Followers",
        img:"https://s3-alpha-sig.figma.com/img/29ef/12a5/3064dfb557a5a5cf824e86a458aefb8a?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K1469cYVsr4gqkX6aNnurkdqZUnYPlPdc7CKDcpxo4zgAtJPujgK38u9MLLl6qLImUFWfQ3pM8uF8qCTtUE~IF5CbSXvCdfsCHZll0kYawReXS4RDcMo-cJbmFfy1Fr5q8IwAzyIiT4LZM7ZUqq1cQTt~FCF4OsdGzXVgqgDJvCft~xhwD9hWGTAbbNzWnzCQRegTv8SmKbgnXDLcYG324q6Me9gGe229tjhEL2vAcifd4CKbPlnsNPnZTc9nrYHi8IG~nOnldRlklYo17dla0vr6wwfO7GbOWjGLx5o~F2EXhKF6xaQIBQDQijcXaYNYPYk2orczBx-sDPjvsfthA__"
    },
    {
        title:"Fitness",
        followers:"3.6k Followers",
        img:"https://s3-alpha-sig.figma.com/img/655c/f081/81d5246f80014b9138cd3908b0a3328f?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=InZHjVxZ55uP~5ckAw8rMyG5D8t3VTiQr~yAN0u5kadpM6ntAkpLI0NO7zJflaKC8Lr7guMTAxjlq3xs37b2mF2B-Z6VdgauwDYbaL5ZrZsP6pqpvICwtraVHTXd4pkmz2ee71UVe3espjDvVDEJeBVRaIbFEPm9bnBTUXaa4O8n6h3qsWikZfx5wb-K-opVyQjiqsbxDjpN~ZiwdoQisLbWnxTv37KL9V3O291WQI5iRorECHLqzvjotgmijX1RXidle2clQUHG8mKXH1sGNiUlMuoEA2RALykMOoxDP15CoajfpJGqxZolumRY3Jt7lyJAgUQWGdn4X9OdkiPFpg__"
    },
    {
        title:"Premier League",
        followers:"2.4k Followers",
        img:"https://s3-alpha-sig.figma.com/img/281f/299b/4c8db825c7ff827b1a6b7ccd4f08d8b8?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TC9W0Bj0AwsFISIQ~atI53VQMDEU~riKPDDEhfbBk86ZPwua1ykb1as7lEmEyzTTJ3IQUOClspeKAg7Bum0laS6sic2rXs6w0-efKGJePNAQmJ4NZRCXdkpPXeXfBY38uXiAggBQxiZwZbc3qcPFu0Zvq6Svg3kl~mYnvpsU1QZgsBz5hUaDLh2sHsjI65d24twAsLSEqkNXuPmL6wYT3BObNowVIXXuW-pMzPjXZWbokAUPmYDgzNjO7am9Ym5oRshv3pl6b0K8WOLONUZIB13i9Na7bX9W-UzKakjbLh6yAgbSj2eV2wVKDqlg~XnTb7Dxt7wNgX41cSYI0hQf~A__"
    },
    {
        title:"Vintage Cars",
        followers:"1.6k Followers",
        img:"https://s3-alpha-sig.figma.com/img/9256/e95b/1aab86213a7134a826b832edb55453f8?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HZMfh6aYrBAGzsTQSq6mZfMerqB7QrkgWjxeczK7~pbBoKG~WJBN-HbZKZxHBMb-Yg9E7euM4A4OS5YQ6A~Pvvk-YJMsGmxeF~LrJHtRq3r9ybBY9a8GyOEBC0A4XnOpPXkZqLwwWxbKJb3vDLe4sNt6SCBNQRiHsaPe3PRHaOFLAqKKm0T9Q1ma1LQ294xV7ZSSyeBrtQDfE0GcYnYmflWIiNet6xQ~6~7K8ZuGsS4rXcMBiiFzDXSt~unioNpZf-~TlN0zuAER~UVo2gZh3gqaLT4oHd5NbIB4cnKZL6XvZP0nMuJtAM6hewnshylHgYnxLCi0SxjE4rzvoG0~HQ__"
    },
]
export const trandingvideos = [
    {
      title:"On this day, a historic goal by this great player",
      profile:"https://s3-alpha-sig.figma.com/img/bc78/fddf/07d9ca802678bf2e1ee75ca143d01580?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=owLm3FiJ94XSosl~NRfdDXLL1eOjQGNQJxjEd4~8VXESzJNhY-XeMjN8WZLr7fm~2~C2HbrAyXOUe92lgkUO0AdN0R2fQvo4CHKEwZOl6DIN6GSuy7iGkLa0VNd2tQ-1bPjkcwg83jV5c4do2mFjji3WKxzE6mdxXuYQKgPXUi46e445RWPM8UdPzaVXumR0F-wyCOr4bptXMBHHxcahAzurKa4R6WB5wcC9K2h7~HfXk3aEqX39-JKMq9KJz0Lp2O80m-qPy-C~9xZ56YjGcHPnjbTKbAJr7q89ABNdOdZ5FxwCI0-XggDCwdvj2JvD4oGE0VVSbVvxBp7J55JJPw__",
      name:"Jim Someone",
      img:"https://s3-alpha-sig.figma.com/img/3966/afa1/9aaccd1a65390a1099c70b732e685e14?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Um5Q7LP8k~vuEL5fZxNAak3kgHdGYAfyzF0BDJqQnLwzd7U8e9FTUZEDRMmDpa7rbCo3LUpqCvB-qqJCAncXjTfkcEHQavSoeoT010i-6rDiP5S-JBfprhLraNoo7MnvptiZiNwXHzIl7cSnFPHCwHmRhTPzCmgjo1boT2cAuBltQwKPHGz-X9PJ2QgFIe4~KfDXJYv7rJ13ocf4dJrmReAt4BaJzE3KnLvO6taip0kaSIXjhrq-b3~Cj4tsHMiWZr8hvt~cye0nXPwYzzDS10y8MFUWuzD~RT2nxKr3X51bB5-nQc7u9ATLc7TktSlSa7Ga56gzaXLFTeRjfccDEA__",
      oscr:"https://s3-alpha-sig.figma.com/img/655c/f081/81d5246f80014b9138cd3908b0a3328f?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=InZHjVxZ55uP~5ckAw8rMyG5D8t3VTiQr~yAN0u5kadpM6ntAkpLI0NO7zJflaKC8Lr7guMTAxjlq3xs37b2mF2B-Z6VdgauwDYbaL5ZrZsP6pqpvICwtraVHTXd4pkmz2ee71UVe3espjDvVDEJeBVRaIbFEPm9bnBTUXaa4O8n6h3qsWikZfx5wb-K-opVyQjiqsbxDjpN~ZiwdoQisLbWnxTv37KL9V3O291WQI5iRorECHLqzvjotgmijX1RXidle2clQUHG8mKXH1sGNiUlMuoEA2RALykMOoxDP15CoajfpJGqxZolumRY3Jt7lyJAgUQWGdn4X9OdkiPFpg__"

    },
    {
        title:"On this day, a historic goal by this great player",
        profile:"https://s3-alpha-sig.figma.com/img/bc78/fddf/07d9ca802678bf2e1ee75ca143d01580?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=owLm3FiJ94XSosl~NRfdDXLL1eOjQGNQJxjEd4~8VXESzJNhY-XeMjN8WZLr7fm~2~C2HbrAyXOUe92lgkUO0AdN0R2fQvo4CHKEwZOl6DIN6GSuy7iGkLa0VNd2tQ-1bPjkcwg83jV5c4do2mFjji3WKxzE6mdxXuYQKgPXUi46e445RWPM8UdPzaVXumR0F-wyCOr4bptXMBHHxcahAzurKa4R6WB5wcC9K2h7~HfXk3aEqX39-JKMq9KJz0Lp2O80m-qPy-C~9xZ56YjGcHPnjbTKbAJr7q89ABNdOdZ5FxwCI0-XggDCwdvj2JvD4oGE0VVSbVvxBp7J55JJPw__",
        name:"Jim Someone",
        img:"https://s3-alpha-sig.figma.com/img/3966/afa1/9aaccd1a65390a1099c70b732e685e14?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Um5Q7LP8k~vuEL5fZxNAak3kgHdGYAfyzF0BDJqQnLwzd7U8e9FTUZEDRMmDpa7rbCo3LUpqCvB-qqJCAncXjTfkcEHQavSoeoT010i-6rDiP5S-JBfprhLraNoo7MnvptiZiNwXHzIl7cSnFPHCwHmRhTPzCmgjo1boT2cAuBltQwKPHGz-X9PJ2QgFIe4~KfDXJYv7rJ13ocf4dJrmReAt4BaJzE3KnLvO6taip0kaSIXjhrq-b3~Cj4tsHMiWZr8hvt~cye0nXPwYzzDS10y8MFUWuzD~RT2nxKr3X51bB5-nQc7u9ATLc7TktSlSa7Ga56gzaXLFTeRjfccDEA__",
        oscr:"https://s3-alpha-sig.figma.com/img/655c/f081/81d5246f80014b9138cd3908b0a3328f?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=InZHjVxZ55uP~5ckAw8rMyG5D8t3VTiQr~yAN0u5kadpM6ntAkpLI0NO7zJflaKC8Lr7guMTAxjlq3xs37b2mF2B-Z6VdgauwDYbaL5ZrZsP6pqpvICwtraVHTXd4pkmz2ee71UVe3espjDvVDEJeBVRaIbFEPm9bnBTUXaa4O8n6h3qsWikZfx5wb-K-opVyQjiqsbxDjpN~ZiwdoQisLbWnxTv37KL9V3O291WQI5iRorECHLqzvjotgmijX1RXidle2clQUHG8mKXH1sGNiUlMuoEA2RALykMOoxDP15CoajfpJGqxZolumRY3Jt7lyJAgUQWGdn4X9OdkiPFpg__"
      },
      {
        title:"On this day, a historic goal by this great player",
        profile:"https://s3-alpha-sig.figma.com/img/bc78/fddf/07d9ca802678bf2e1ee75ca143d01580?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=owLm3FiJ94XSosl~NRfdDXLL1eOjQGNQJxjEd4~8VXESzJNhY-XeMjN8WZLr7fm~2~C2HbrAyXOUe92lgkUO0AdN0R2fQvo4CHKEwZOl6DIN6GSuy7iGkLa0VNd2tQ-1bPjkcwg83jV5c4do2mFjji3WKxzE6mdxXuYQKgPXUi46e445RWPM8UdPzaVXumR0F-wyCOr4bptXMBHHxcahAzurKa4R6WB5wcC9K2h7~HfXk3aEqX39-JKMq9KJz0Lp2O80m-qPy-C~9xZ56YjGcHPnjbTKbAJr7q89ABNdOdZ5FxwCI0-XggDCwdvj2JvD4oGE0VVSbVvxBp7J55JJPw__",
        name:"Jim Someone",
        img:"https://s3-alpha-sig.figma.com/img/3966/afa1/9aaccd1a65390a1099c70b732e685e14?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Um5Q7LP8k~vuEL5fZxNAak3kgHdGYAfyzF0BDJqQnLwzd7U8e9FTUZEDRMmDpa7rbCo3LUpqCvB-qqJCAncXjTfkcEHQavSoeoT010i-6rDiP5S-JBfprhLraNoo7MnvptiZiNwXHzIl7cSnFPHCwHmRhTPzCmgjo1boT2cAuBltQwKPHGz-X9PJ2QgFIe4~KfDXJYv7rJ13ocf4dJrmReAt4BaJzE3KnLvO6taip0kaSIXjhrq-b3~Cj4tsHMiWZr8hvt~cye0nXPwYzzDS10y8MFUWuzD~RT2nxKr3X51bB5-nQc7u9ATLc7TktSlSa7Ga56gzaXLFTeRjfccDEA__",
        oscr:"https://s3-alpha-sig.figma.com/img/655c/f081/81d5246f80014b9138cd3908b0a3328f?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=InZHjVxZ55uP~5ckAw8rMyG5D8t3VTiQr~yAN0u5kadpM6ntAkpLI0NO7zJflaKC8Lr7guMTAxjlq3xs37b2mF2B-Z6VdgauwDYbaL5ZrZsP6pqpvICwtraVHTXd4pkmz2ee71UVe3espjDvVDEJeBVRaIbFEPm9bnBTUXaa4O8n6h3qsWikZfx5wb-K-opVyQjiqsbxDjpN~ZiwdoQisLbWnxTv37KL9V3O291WQI5iRorECHLqzvjotgmijX1RXidle2clQUHG8mKXH1sGNiUlMuoEA2RALykMOoxDP15CoajfpJGqxZolumRY3Jt7lyJAgUQWGdn4X9OdkiPFpg__"
      },
]

export const postsdata: PostType[]  = [
    {
     profileimg:"https://s3-alpha-sig.figma.com/img/d4ba/b37c/728178de4853f36aef820d45f81e69e7?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o9eJBWcMg9ryP4hjj7KrNyKN~u8-8mVXtnRFUGJ2SkneJQCyW8KQXoBFglPse5Umq5s2NgLU4FHXQGuokoG~awLj75kfQfwmKsmkLAYWjcWj33u5Xez8xnLgQqxii5G0eoys6uiNlvdTFH1Qt6D0eD1KHddK4~2EfmbOn474eOutdfJWBCAP8wfOmFhaZzI9ugjJl3a44PBZMZBISdCbWC3I8D5bh1Cm3UAkwKK5U8qqkNiyNk9XUeL65cwWWzamqNjbnZJfBt2wqWCLs7kTZwr4qu90YQxt1g-m9f1RJ~ahKT9QSbYsfRXmpxv5r9VMvXoEwGNw1c~nlfc0jE-tyg__",
     username:"John Doe",
     desc:"Walking during my trip to this hillstation and took this gem of a picture. Can’t believe I was able to take this. Spooky or brilliant? 👻🤩",
      comments:[
        {
            comment:"This is how a post would like on the website, and it’s different from the template we normally use for the blog posts on 🔥🔥🔥",
            img:"https://s3-alpha-sig.figma.com/img/606c/88d2/857cd14e35a3c03feba2e9f075f83b3a?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=euezs1Y1QymyrtXjIVb9yvIgEu3dBfNBmnoC2baSAwyJKA-C84oF-lpDWzv7pli9ecF1dYHRnDXsGX8IGlcceegIado82NNEWV0XN0UDASVUXDFkvdkEcFFA-RJAVpGwsTVxRMfh38fVBv1jOOkzN0wTiSUindS4~ZZPkZCQYzyBUrk1Qe3L-nx5kBg9diimJ5OMwLNBaegA1ncob6Ri-cft9dtkNHIRhDKBD6LCcGwrrhXq46YGa2t5ns3Bz~~jNo9Iw61XdU~qIoDgvBschdBIbCaq4JyVKTbTnf6CuYeyP53BYRMwKb7YNltyO4PsGDJXX4IM7~yYBwDdB6utHA__",
            username:"Mike Someone",
            time:"2h ago"
        },
        {
            comment:"This is how a post would like on the website, and it’s different from the template we normally use for the blog posts on 🔥🔥🔥",
            img:"https://s3-alpha-sig.figma.com/img/a5e0/417b/ae34b53051fbf7a0d79449437e28c924?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lrGqg7I~Z6I4zku-ik04R9RKdyo6S15aV7N3tWi-NFvbzI1A~YdqMPc3UPNukeGQx48hCsw5wTXzzgsjvaPiViosbhvZLmTWsZjmR6vofMQdibxpIyIj1G2QqfN5VmPOtoJoZDYDcAyWtncDObSQFH3RM8sTi2I9DCZhTeso9wiyhbwExzUPAUi-OWXaa4CqKFj8q~jO8~3w8bhiLugoClW7q-dU7deibZmOopZj2hNySZS0qyV0u~OukXSsDiadh0db8Ncxb7fHD7jz5B7vvvLE54YZJoQKmbxWH1V61iLPmNFUd3whxLkDTtKE9exFv9V4U0INvimeh9tRErZ2DQ__",
            username:"basheer",
            time:"2h ago"
        },
      ],
      shared:10,
      likes:343,
      time:"6h ago",
      followers:13302,
      deslike:12235,
      postsimg:[
       {
       img: "https://s3-alpha-sig.figma.com/img/7bd6/139a/030d444381024a5251bc970ffca233f4?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XurnREUlsyqRAa1j~U-ZjWIeITNOiSQurY3i6JAOY5p83VtTJUYzriQziy8f0GxLtTQNuUsRLl3UbAK-7CwdA-iRDGQGsUyFzHsn7MyumGsbJBLAVSS44L8mkwZ~mRLugmH0YgllK7WtRVUtzaW146YkhH0RsnYrERI5uUcbQxDTRri5JxSLBufr8cc3sPLYUIUAou-UZemzoTzoCAgtFQQTSG-DJwHmuwrdhnoxVjAwSsxEHzluhjjoukDyAef4jN6x~NG0rfS88PwkGWpUBHhOmZvkP~bNIPdjUajQ4djMqyf19nMUDtj7zcuHBgDLBFKons4FLTu0vrvvAlVn6w__",
       },
      ]
    },

    {
        profileimg:"https://s3-alpha-sig.figma.com/img/ccc2/7c16/fb66a3ea871f80cc036cf1afc109805d?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fBbzqIIf7ljZKNGAssM59f2ZPDH8rlpG-AJYeUh-8vRAbd8oSLBjWfDS3mP8tLGjHmr7UAjdDaxEkoVa-sCrGeU6tBQpC5jNmESmKFFnVMuelQTAvNNcs3AQPCT8QAdI28aUvDPG3HVr81iGpelVPDZ5GuQY9-i5pJ09JWHCezFHM0mTVmB1jf4W9OONajNtwlF8QQVjgptQ-cw7BzaYJFm9-V~jUgZ9F6KYjJ6syvUNlDqZLjcCj4np5v0fpOEBbjJfnqnzfbL7QNstNxGLVrKx5d83xwP-EWBJGr1i-FQ0gkU4GweehwAYlAlrZ3O8hvAZ-zYfJcVLYwHIW0OQ0Q__",
        username:"chuman",
        desc:"This is how a post would like on the website, and it’s different from the template we normally use for the blog posts on 🔥🔥🔥",
         comments:[
           {
               comment:"This is how a post would like on the website, and it’s different from the template we normally use for the blog posts on 🔥🔥🔥",
               img:"https://s3-alpha-sig.figma.com/img/606c/88d2/857cd14e35a3c03feba2e9f075f83b3a?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=euezs1Y1QymyrtXjIVb9yvIgEu3dBfNBmnoC2baSAwyJKA-C84oF-lpDWzv7pli9ecF1dYHRnDXsGX8IGlcceegIado82NNEWV0XN0UDASVUXDFkvdkEcFFA-RJAVpGwsTVxRMfh38fVBv1jOOkzN0wTiSUindS4~ZZPkZCQYzyBUrk1Qe3L-nx5kBg9diimJ5OMwLNBaegA1ncob6Ri-cft9dtkNHIRhDKBD6LCcGwrrhXq46YGa2t5ns3Bz~~jNo9Iw61XdU~qIoDgvBschdBIbCaq4JyVKTbTnf6CuYeyP53BYRMwKb7YNltyO4PsGDJXX4IM7~yYBwDdB6utHA__",
               username:"Mike Someone",
               time:"2h ago"
           },
           {
               comment:"Walking during my trip to this hillstation and took this gem of a picture. Can’t believe I was able to take this. Spooky or brilliant? 👻🤩",
               img:"https://s3-alpha-sig.figma.com/img/a5e0/417b/ae34b53051fbf7a0d79449437e28c924?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lrGqg7I~Z6I4zku-ik04R9RKdyo6S15aV7N3tWi-NFvbzI1A~YdqMPc3UPNukeGQx48hCsw5wTXzzgsjvaPiViosbhvZLmTWsZjmR6vofMQdibxpIyIj1G2QqfN5VmPOtoJoZDYDcAyWtncDObSQFH3RM8sTi2I9DCZhTeso9wiyhbwExzUPAUi-OWXaa4CqKFj8q~jO8~3w8bhiLugoClW7q-dU7deibZmOopZj2hNySZS0qyV0u~OukXSsDiadh0db8Ncxb7fHD7jz5B7vvvLE54YZJoQKmbxWH1V61iLPmNFUd3whxLkDTtKE9exFv9V4U0INvimeh9tRErZ2DQ__",
               username:"basheer",
               time:"2h ago"
           },
         ],
         shared:10,
         likes:343,
         followers:31230346,
         time:"2h ago",
         deslike:2,
         postsimg:[]
       },
]


export const optionsmenu = [
    {
     option:"Share",
     icon:<PiShareFatLight />,
    },{
      option:"Quote Scribbe",
      icon:<MdOutlineEdit />,
    },
    {
      option:"Share via",
      icon:<GoShareAndroid />,
    },
    {
      option:"Copy Post URL",
      icon:<FaLink />,
    },
  ];
  