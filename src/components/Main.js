import React from 'react';
import Info from './Info/Info';
import Preview from './Preview/Preview';

const Main = () => {

    const [infos, setInfos] = React.useState({
        general:{
            name: "",
            surname: "",
            bio: ""
        },
        educational:{
            uni: "",
            city: "",
            degree: "",
            subject: "",
            from: "",
            to: ""
        },
        practical: {
            pos: "",
            comp: "",
            city: "",
            from: "",
            to:""
        }
    });

    const [pracComps, setPracComps] = React.useState([]);
    const [educComps, setEducComps] = React.useState([]);


    return (
        <div className="container">
            <Info comps={pracComps} setComps={setPracComps} setEducComps={setEducComps} infos={infos} setInfos={setInfos}/>
            <Preview educComps={educComps} pracComps={pracComps} infos={infos}/>
        </div>
    )
}


export default Main;