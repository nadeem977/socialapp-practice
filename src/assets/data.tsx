
import { GoHome } from "react-icons/go";
import { MdSlowMotionVideo } from "react-icons/md";
import { ComminunityIcon } from "./Icons";
import { AiOutlineFire } from "react-icons/ai";
import { GoBell } from "react-icons/go";
import { MdOutlineExplore } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { BsSend } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { PostType, UserType, communityItem } from "./type";
import { PiShareFatLight } from "react-icons/pi";
import { MdOutlineEdit } from "react-icons/md";
import { GoShareAndroid } from "react-icons/go";
import { FaLink } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";

export const SidebarData = [
    {
        title:"Home",
        icon:<GoHome/>,
        link:"/"
    },
    {
        title:"Video",
        icon:<MdSlowMotionVideo/>,
        link:"/video"
    },
    {
        title:"Communities",
        icon:<ComminunityIcon/>,
        link:"/communities"
    },
    {
        title:"Trending",
        icon:<AiOutlineFire/>,
        link:"/trending"
    },
    {
        title:"Notifications",
        icon:<GoBell/>,
        link:"/notifications"
    },
    {
        title:"Explore",
        icon:<MdOutlineExplore/>,
        link:"/explore"
    },
    {
        title:"Profile",
        icon:<IoPersonOutline/>,
        link:"/profile"
    },
    {
        title:"Messages",
        icon:<BsSend/>,
        link:"/messages"
    },
    {
        title:"Settings",
        icon:<IoSettingsOutline/>,
        liik:"/settings"
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
    },{
        option:"Delete",
        icon:<RiDeleteBin6Line/>
    }
];
export const comiunytys:communityItem[] = [
    {
        title:"Crypto Currency",
        followers:10,
        img:"https://s3-alpha-sig.figma.com/img/b47c/19ed/378555a41c2afc925c073bcbd0aca3ce?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LjvKYERryl0KMQYh2hzDcAC9HG7O2SwTkxlj1c8nTEXSCnBtfURMGS1x0jka6o2KL2Lq3UOWyPrVcXWCb5c95a8c-uOaQhqh~VKcvbHo5-Gqn~h3ZX-nlrMGNAXGQ7IgpV0sPn3g1H8m4IdyuvZAQPBYMIw-cRubFn17RkVpROhOG-Pngv5P~K~JnO5DMEeolR94I1i4XbFH8JNvqd3D-tWZr3Eix9FOMj-B8vhbuZZrzEUix8f5Rhv8JUO2X3K52oa4gJTi3~hlS52SyIJzyTs8D2Sk6gJ3WatJWJ2~Ss93Z5Uekb4rImSrvRm4OtwFmvq5O93mPbXN2yV7-l2OOw__"
    },
    {
        title:"Web 3.0",
        followers:20,
        img:"https://s3-alpha-sig.figma.com/img/7884/dd62/73868034f85cda129892aa746d0267f1?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aLTgthqhsBoD7vcBRvUwuCEsXHE5lIRVBngLxF8bEbZaYBOT5FhqOWd2IfA1x6UDu1Rt2AYtBH7WR4fCAGyGHq3MEuQ5LVO93Q7C9O7cA4CBGT8OeKQcOXWZ0lx9e~8Y5MuoSCKXgObq6NFXf1uPxj3vimtQ7De-kMlBXb9Tpcuh6qe4zH3IX9WvTFmYvNEDAHm9tCwOh1~QvByX0AUEigNYbMZmKfPI1il1mKuSZazoSQoqFcdjuKmbKKu-OTySoZCOVVc~HCkGU7tkFoMPOxjVl-KA2dpFd2EB0BjYGZ9EJh9rxUy5M3CW1v6rlorVurJcKUYXnWSXK5odmyHHGQ__"
    },
    {
        title:"Premier League",
        followers:30,
        img:"https://s3-alpha-sig.figma.com/img/655c/f081/81d5246f80014b9138cd3908b0a3328f?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LNFmTF3jS3B54tp2qmvCdn0oG4pgzQmaRCOxkveP~VCWTZ26JE5YDBXMD47NkeBy9xnLlhO3VxG97du7e4a6m9hrwd6pkjuxnCkFncDkgUaxGTk2xplvys5n207hkSFAGoaOlhSv4FM5bpMqtOXe~fmAHcjiFgQyLOQ5L~96BR19p-Aaz6G~cyWuVDAwryd6qe1rv4bf1QjpDW8VMIlZB8CyAAhg08yl~IrM3a4epL3DqDcwyDOAo4OAhdhPicOth6-6GjDpBnroUnJtOv-Xu7Z3bflLxTPDXzmMlhl~bkh4yrUdok4ILniG5GD0QemTsACAjhSq7MVSymSFREyMIA__"
    },
    {
        title:"Growth",
        followers:40,
        img:"https://s3-alpha-sig.figma.com/img/e1f1/bac6/f0c9b6a01fb526ac66d9c8a6d8117f6e?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VRPtIozdoly5eTmYFmXvqXwE4J8MN5Prx792~qx3dNOlj6nzRScgWopAK9xJVRWDJvS0RUjPGjRzoIlUGe4uF6UQ88pZBoA6eb0u7IB0B9kiJ~67uk5rjZPb-l3yy2x7DMm0lV0GXieB-6M-gWzxpoJQ2snQBbA2tOSpAMWaNTLOqJaYniBCehD5wo0iTjBdoY0sMdtM~8HeO2cfn6Osa3BNua9VbdjsCu2AcWkuGct-9aoFstO66MQ4k6fGl6jlXawm1OGOmO1loUkNoklXEEflyL~4vQrYtibPOBEeQFueZrASA7es-D9zfRAIb7uC~RVM-U9-e9Oae3QE7L2Jmw__"
    },
    {
        title:"Metaverse",
        followers:50,
        img:"https://s3-alpha-sig.figma.com/img/99b3/2e18/b537732ca5b41e94f3660afe87eb9e45?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jeUbEQYMM0LTTjRNo8Q2eiB3hZUxqcH~EFsMDOR5Y7DRhHaK3Xr8SqZkvw3bTvAOQns8cbeuN4UOkcGsYjWr705OT2PPchGC2KEBWljq8tZqVqqpn5tXA3sNmmcc-FXyCwiCtMieY-RqBFiyIiAEgHxg~cL03nN5PhuUq8wz6Ok6CwzRV34l5k-rXFBFKY26YQyvONmsoKiZefdIF~OkVghQx16SY48Ip76XjHvSL4xmn5nNfeRY0PgRMSbulfiEACZ4sNWlhmnZUYqOMmGIKX2KAuP8YI5n5E8UC7aqaXLCjRg3Qf1Ki4Tz4PCvCOrsgV8A1CBvMSwo-qaSgigB5A__"
    },
    {
        title:"Music",
        followers:60,
        img:"https://s3-alpha-sig.figma.com/img/d9c5/c0a9/fc60c6acc45f4bbe243522c68d1545ad?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TVEDOaEg9C7g1xi9vsxBVP6N1dBH~KUBEeuXLOXlEv8jEF7xR-s9~xB8W1Pw795JE4nXE2NHc9hsCd6N9E9ivf1yWr5Lwo2Y-pbPzGgbXFd0YbuF4Vyzve3QzLrW-70r1jup2GmUO3YY-SG694hY5A2RotJPITNy1su~OBNT1b4gWwPXJ3K6Tg3J7NxbVT3uSRGk-zpc7VkY0o3a6iOZwHPIDix0AvTrtram4Ds7xzVDtVc~BYNrryjoUG0eCjF4lLtOHmpez0AENl9KdnHzgVlQiSY5QqPa8skqsUeZLpJqrX5QkD-vH6N79RKUBa6dyCb~2S07m5u8aUAd~mJ31g__"
    },
    {
        title:"Entrepreneurship",
        followers:70,
        img:"https://s3-alpha-sig.figma.com/img/d4a0/c781/3149e3c1b4d1d392ecb59363d3fc6aa2?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P0MwRTSHlFWD45BNtFTMwLeEQGP~STe7SvBnEJH1T0Zv~9pkHzjq3GT8JgEqS1Nk4Ywrc-2KxzF-DCjauttUGvRjTq3qVcC6I0FW4jJiwssPLJVn05DycmfNidKwQVcDFdjOuyKTTBAxWEL1GIWwGry7LNSsenqXyJ9vddtFvGCyk5eGA5Sp4Wyw-1EUwWz7vbswXhs5QZdZiDsYwHhWalC3s3v7ifitdURWX4tEPjzkcxBbbb40SA49BR-KglEX8OhYbhFtgPu5tV4GF~vI1qewY83sCrlEQuRao-ICPwvFNNE8cszhcgfOHgWb-alwMabMbZ5eP-pJfoEU2~c4ag__"
    },
    {
        title:"Economy",
        followers:80,
        img:"https://s3-alpha-sig.figma.com/img/676d/ac90/945baf33ae56c901193b0a9bfaa213e4?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iFLcGbEjS44pl6yPdm0D4ERfhrGYdvnXvwmZV8aSbEM2KE2FA7LdtbUYZFBS8L3-b2OvvslI7GMVPMQ17wzzMM2wDerdopG0knckqmFO8ng~c5jm3XkVWwQMQ7SrEcMoTx470PVbSBg1bZFcSSW7d3ZaDtrcfyKML58GkNaVPIBV7j4Yjr8yBXE70GU1IjA6vrBOFmZbdf3dQSFMv2gEpQZeUbLeryFAFXbkhnKMOTJjpC1vim0PrMQHNIt3k7xWzZRvT46Pomx781T4J2FbUBl4hQ8hoXLbdN4vtHe1cQV6pTKdCzLrQXdYGewORzyytL5XpWRTyfSe~6I5YLOhUg__"
    },
    {
        title:"Fitness",
        followers:90,
        img:"https://www.google.com/imgres?q=fitness%20profile%20pic&imgurl=https%3A%2F%2Fwww.biosytech.com%2Fmedia%2F6590%2Ffitness.jpg&imgrefurl=https%3A%2F%2Fwww.biosytech.com%2Fhealth-packages%2Ffitness-profile%2F&docid=P0gEgzNEqpejGM&tbnid=b7jRYmcfEsbKAM&vet=12ahUKEwiYzf6T34qHAxWQRfEDHYvNC6YQM3oECBsQAA..i&w=600&h=400&hcb=2&ved=2ahUKEwiYzf6T34qHAxWQRfEDHYvNC6YQM3oECBsQAA"
    },
    {
        title:"Technology Memes",
        followers:100,
        img:"https://s3-alpha-sig.figma.com/img/76d1/239a/cd5b1c885e76f62d0dde6b719bbb7587?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kolxNE4~HxTH1ovqyTo-RA-364l6BP0zlQJOGEGNrgX77vyNTdj7SQP18jUyjiZrE-udp1fDmQzoclJIyllWoXSuv0OZmAioZHYyarqL28QJn7IovUJY8MvtYcPa8uurnpN4PunymIPE70TP~lZk5fRizW8EnWGxDA3cPJ6kSZTG5fHwim7uJUdMR2Y71fKGcVS6Ef6DXpa62rVo7WGoIH~2A7mfXWHbRDfXccSUMJ~R7EK3-IQa47HNkMijCJ~b~5EdwB~R2cef4iCzLLtal8Maw0cP7OceA9hjqCl18mARiWEvRutdCSWzku5~h6TGBre5L-9LlQezbTLk6OzpEA__"
    },
    {
        title:"Leadership",
        followers:110,
        img:"https://s3-alpha-sig.figma.com/img/2dee/bdc9/2b78afc2210f4ace09b13c7cd915a441?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oVywYlPQXfKHknCRHaBdO1d~zgOemF5EF~i1-K8lMAc7U0gRS870ymQvMymSNAdTzE~HyvXPJGKBztwYeSTSDqwkjhqCpGhN11UKHzTRkBVZer7Hwv0fwc89M-Dr5OGGnfrTmBIIU8Bkz6EP~45fKzrqDEHIFsDcEMiz2UqCoGpr~PgrMhbRc8sohhIBKuI3RrLo80wxLsCQHb3gGz90gxz56nsU4X1DCuwv-vh67oEnbMqBZL~SW0yKZ76-CvG1ml61ffkisobggDX7ek-0BbHfvvDYCZZdrz9if9u-Ji3AEwnG6mBH6G6mS7O5Rg2D5iyRhbYs9aj1xJvGQPpVsw__"
    },
    {
        title:"Apple",
        followers:120,
        img:"https://s3-alpha-sig.figma.com/img/f8f3/bda1/7340103d6ea477209ed867a04bce43fc?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Okt-Rw9~nUQEx1NADerSfpUeZ3PExEYkRzfTMsJEOA5aC3OAH-oxEz7TDIiHahYBtK1XbZGkFr88PrGpFdRMWAI9TtxJUAmhjJHDeq4Hw2RkBLXzqQbhA1TGXsLpReGWYl8Zjg4PVlHzDiT68hw3sv2OLOcR1vgjZ4pAikrSii98NY-MMYEO8-LHC14i-n6cJ0r6b73wqYzJV7tGkzu3x4mYEhuJ96S5VnasSXFV10b7KFfXFNYkWlfal4kEtk2D-YQmOHm2Hyu2UoA04gcLWdIBy2oEeZ6cU6FPxl6oW9WIsrN7ySwwsBjzrjR2mF7MeaRm8A1txJR9vdeUrJp0tg__"
    },

]




export const Notificationdata = [
    {
     img:[
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnwGr2aIPK-dwKNXyC6q9kVtcSF0XHUNm_7Q&s",
     ],                 
     name:"Jimmy McGill",
     sms:"followed you.",
     post:null,
     Commiunity:null
    },
    {
        img:[
           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnwGr2aIPK-dwKNXyC6q9kVtcSF0XHUNm_7Q&s",
           "https://www.google.com/imgres?q=profile%20images%20&imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100072493364168&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Fp%2FProfile-pic-for-girl-100072493364168%2F&docid=6DRI1_ZeDEdb-M&tbnid=2i-uZJ6N4h0J2M&vet=12ahUKEwjEt7CXp4iHAxWqzgIHHRlQEasQM3oECD0QAA..i&w=600&h=591&hcb=2&ved=2ahUKEwjEt7CXp4iHAxWqzgIHHRlQEasQM3oECD0QAA",
           "https://www.google.com/imgres?q=profile%20images%20&imgurl=https%3A%2F%2Fshotkit.com%2Fwp-content%2Fuploads%2Fbb-plugin%2Fcache%2Fcool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg&imgrefurl=https%3A%2F%2Fshotkit.com%2Fcool-profile-pictures%2F&docid=7X2aM4E4dK2D2M&tbnid=owccnJg1Ar4kEM&vet=12ahUKEwjEt7CXp4iHAxWqzgIHHRlQEasQM3oECB4QAA..i&w=829&h=580&hcb=2&ved=2ahUKEwjEt7CXp4iHAxWqzgIHHRlQEasQM3oECB4QAA"
        ],                 
        name:"",
        sms:"Jimmy McGill and 3 others have liked your post ",
        post:"This is how a post would like on the website, and it’s different from the template we normally use for the blog posts on this website. Either way thats how everything looks. Wow! 🔥🔥🔥",
        tagdImg:"https://www.google.com/imgres?q=profile%20images%20&imgurl=https%3A%2F%2Fcdn.hero.page%2Fpfp%2Fdc89ab45-0912-4da3-b933-89a6bd6e5464-kawaii-chibi-boy-cute-anime-profile-pictures-for-boys-1.png&imgrefurl=https%3A%2F%2Fhero.page%2Fpfp%2Fanime-pfp-cute%2Fcute-anime-profile-pictures-for-boys&docid=xmleWm666msd4M&tbnid=kYBNflTtPAG1EM&vet=12ahUKEwjEt7CXp4iHAxWqzgIHHRlQEasQM3oECB0QAA..i&w=1024&h=1024&hcb=2&ved=2ahUKEwjEt7CXp4iHAxWqzgIHHRlQEasQM3oECB0QAA"
       },
       {
        img:[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnwGr2aIPK-dwKNXyC6q9kVtcSF0XHUNm_7Q&s",
         ],                 
         name:"Jimmy McGill",
         post:"Annoucing the first annual CODING COMPETITION 2022. All you web 3.0 enthusiasts join us.📍22 Some Block, Fairfax Ave, LA.🕛 10:00am",
         sms:"posted to ",
         commiunitys:"https://www.google.com/imgres?q=web%200.3&imgurl=https%3A%2F%2Fimages.shiksha.com%2Fmediadata%2FugcDocuments%2Fimages%2FwordpressImages%2F2022_02_Web-3.0.jpg&imgrefurl=https%3A%2F%2Fwww.shiksha.com%2Fonline-courses%2Farticles%2Fwhat-is-web3-and-why-does-it-matter%2F&docid=n-wuKYis8x_LdM&tbnid=eJl3fyjDySbvAM&vet=12ahUKEwj_6962qoiHAxXTVvEDHcxHCoUQM3oECBcQAA..i&w=1200&h=675&hcb=2&ved=2ahUKEwj_6962qoiHAxXTVvEDHcxHCoUQM3oECBcQAA",
       },
]


export const UserProfile = [
    {
        name:"John Doe",
        username:"@johnDoeUser",
        followers:12323,
        following:23452,
        communities:232,
        about:"This is my bio. This where you find about me and my Communities in life. Love Soccer and travelling",
        profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUyllrW-u-01_B8qMki4ybHzbhuBWhUq3pMA&s"
    }
]

