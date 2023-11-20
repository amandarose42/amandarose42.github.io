import React, {useState, useRef} from 'react';
import Style from './Terminal.module.scss';
import classNames from 'classnames';
import { Box } from '@mui/material';
import { info } from '../../assets/info/Info';

const iconClass = 'fa fa-circle';

export default function CustomTerminal ({whichWindow}) {
    const [text, setText] = useState("")

    const [previousCommands, setPreviousCommands] = useState([])

    const [currentDirectory, setCurrentDirectory] = useState("amandaortiz $")

    const scrollToRef = useRef()
    
    const termOptions = (e) => {
        //scrollToRef.current.scrollIntoView()
        if(e.code == 'Enter') {
            if(text.trim() == "clear") {
                setPreviousCommands([])
                setText("")
                setCurrentDirectory("amandaortiz $")
            } else if(text.trim() == "ls") {
                if(currentDirectory == "amandaortiz $"){
                    setText("")
                    setPreviousCommands([...previousCommands, {item:'firstLS', directory: currentDirectory}])
                } else{
                    // skills
                    setText("")
                    setPreviousCommands([...previousCommands, {item:'lsSkills', directory: currentDirectory}])
                }

            } else if (text.trim() == "cd skills" || text.trim() == "cd skills/") {
                setText("")
                setPreviousCommands([...previousCommands, {item:'skills', directory: currentDirectory}])
                setCurrentDirectory("amandaortiz/skills $")

            } else if (text.trim() == "cat hobbies and interests.txt" ) {
                if(currentDirectory=="amandaortiz $"){
                    setText("")
                    setPreviousCommands([...previousCommands, {item:'hobbiesandinterests', directory: currentDirectory}])
                } else {
                    // bash error
                    setPreviousCommands([...previousCommands, {item:'basherror', directory: text}])
                    setText("")
                }
                
            } else if(text.trim() == "cd"){
                setPreviousCommands([...previousCommands, {item:"returnhome",directory: currentDirectory}])
                setCurrentDirectory('amandaortiz $')
                setText("")
            } else {
                if("cat".includes(text.trim())){
                    // show hobbies and interests
                    // or about amanda
                    // or whatever skills options there are 
                    setPreviousCommands([...previousCommands, {item:'catNoFileEnterOption', directory: currentDirectory}])
                } else {
                    setPreviousCommands([...previousCommands, {item: 'catFile', directory: text}])
                    setText("")
                }

            }
        } else if( e.code ==  "Tab") {
            e.preventDefault()

            if("cd ".includes(text.trim())) {
                console.log("here1")
                // allows user to see available directories
            } else if("cd skills".includes(text)) {
                setText("cd skills/")
            } else if("cat ".includes(text)){
                // 
            } else if("cat aboutamanda".includes(text)){
                if(currentDirectory == 'amandaortiz $') {
                    setText('cat aboutamanda.txt')
                }
            } else if("cat hobbies and interests.txt"){
                if(currentDirectory == 'amandaortiz $') {
                    setText('cat hobbies and interests.txt')
                }
            } else if("cat databases".includes(text)){
                if(currentDirectory == 'amandaortiz/skills $') {setText('cat databases.txt')}
            } else if("cat languages".includes(text)){
                if(currentDirectory == 'amandaortiz/skills $') {setText('cat languages.txt')}
            } else if("cat frameworks".includes(text)){
                if(currentDirectory == 'amandaortiz/skills $') {setText('cat frameworks.txt')}
            } else if("cat tools".includes(text)){
                if(currentDirectory == 'amandaortiz/skills $') {setText('cat tools.txt')}
            } else if("cat cloudServices".includes(text)){
                if(currentDirectory == 'amandaortiz/skills $') {setText('cat cloudServices.txt')}
            }
        }
    }

    return (
        <Box
        component={'section'}
        className={classNames(Style.terminal, Style.shadowed)}
        width={{ xs: '80%', md: '65%' }}
        borderRadius={'0.5rem'}
        mb={'4rem'}
        >
        <Box
            sx={{ backgroundColor: '#8c8c8c', display: "flex", justifyContent:"space-between"}}
            p={'0.5rem'}
            borderRadius={'0.5rem 0.5rem 0 0'}
            fontSize={'1rem'}
        >
            <div style={{ display:"flex", alignItems: 'center'}}>
                <div>
                <i className={classNames(iconClass, Style.red)} />
                <i className={classNames(iconClass, Style.amber)} />
                <i className={classNames(iconClass, Style.green)} />
            </div>
            <p style={{marginLeft: '15px', fontFamily: "Courier New, Courier, monospace"}}>What would you like to see?</p>
            </div>
            <i style={{display: 'flex', alignSelf: 'center'}}>Not sure where to start? Start by running "ls"</i>
        </Box>
        <Box
            py={{ xs: '1rem', md: '2rem' }}
            px={{ xs: '2rem', md: '3rem' }}
            borderRadius={'0 0 0.5rem 0.5rem'}
            sx={{ backgroundColor: '#27242f' }}
            fontSize={'1.5rem'}
            fontFamily={'Courier New, Courier, monospace'}
        >   
            {
                previousCommands.map((element, index)=>{
                    if(index == previousCommands.length-1){
                        return (
                            <TerminalOptions ref={scrollToRef} option={element.item} key={index} directory={element.directory}/>
                        )
                    } else {
                        return (
                            <TerminalOptions option={element.item} key={index} directory={element.directory}/>
                        )
                    }
                    
                })
            }
            <div style={{display: 'flex', alignItems: "center"}}>
                <p style={{color: 'rgb(75, 144, 247)', width:"max-content"}}>{currentDirectory}</p>
                <input className={Style.focusStuff} style={{
                    height: "75%",
                    flex:"2",
                    background: '#27242f',
                    color: 'white',
                    border: '0px ',
                    caretColor: "white",
                    fontSize: '25px', 
                    marginLeft: '5px',
                    fontFamily: "Courier New,Courier,monospace"
                }}
                autoFocus
                value={text}
                onChange={(e)=>{
                    setText(e.target.value)
                }}
                onKeyDown={(e)=>{
                    termOptions(e)
                }}/>
            </div>
        </Box>
        </Box>
        )
}       

function TerminalOptions ({option, directory, ref}) {
    switch(option) {
        case 'firstLS':
            return (
                <div ref={ref}>
                    <div style={{display: 'flex', marginBottom: '0px'}}>
                    <p style={{color: 'rgb(75, 144, 247)'}}>amandaortiz $</p><p>ls</p>
                    </div>
                    <p>aboutamanda.txt</p>
                    <p>hobbies and interests.txt</p>
                    <p style={{color: "#27c93f"}}>skills/</p>
                    
                </div>
                )
        case "lsSkills":
            return (
                <div ref={ref}>
                    <div style={{display: 'flex', marginBottom: '0px'}}>
                        <p style={{color: 'rgb(75, 144, 247)'}}>amandaortiz $</p><p>ls</p>
                    </div>
                    <p>databases.txt</p>
                    <p>languages.txt</p>
                    <p>frameworks.txt</p>
                    <p>tools.txt</p>
                    <p>cloudServices.txt</p>
                </div>
            )
        case 'skills':
            return(
                <div ref={ref}>
                    <div style={{display: 'flex', marginBottom: '0px'}}>
                        <p style={{color: 'rgb(75, 144, 247)'}}>amandaortiz $</p><p>cd skills/</p>
                    </div>
                </div>
            )
        case 'hobbiesandinterests':
            return(
                <div ref={ref}>
                    <div style={{display: 'flex', marginBottom: '0px'}}>
                        <p style={{color: 'rgb(75, 144, 247)'}}>amandaortiz $</p><p>cat hobbies and interests.txt</p>
                    </div>
                    <ul>
                        {info.hobbies.map((hobby, index) => (
                            <li key={index}>
                            <Box component={'span'} mr={'1rem'}>
                                {hobby.emoji}
                            </Box>
                            {hobby.label}
                            </li>
                        ))}
                    </ul>
                </div>
            )
        case 'cdTabOption':
            if(directory == "amandaortiz $"){
                return(
                    <div>

                    </div>
                )
            } else if (directory == "amandaortiz/skills $") {
                return(
                    <div>
                        
                    </div>
                )
            }
        case 'catNoFileEnterOption':
            if(directory == "amandaortiz $"){
                return(
                    <div ref={ref}>
                        <div style={{display: 'flex', marginBottom: '0px'}}>
                            <p style={{color: 'rgb(75, 144, 247)'}}>amandaortiz $</p><p>cat</p>
                        </div>
                        <p>aboutamanda.txt</p>
                        <p>hobbies and interests.txt</p>
                    </div>
                )
            } else if (directory == "amandaortiz/skills $") {
                return(
                        <div ref={ref}>
                            <div style={{display: 'flex', marginBottom: '0px'}}>
                                <p style={{color: 'rgb(75, 144, 247)'}}>amandaortiz $</p><p>cat</p>
                        </div>
                        <p>databases.txt</p>
                        <p>languages.txt</p>
                        <p>frameworks.txt</p>
                        <p>tools.txt</p>
                        <p>cloudServices.txt</p>
                    </div>
                )
            }
        case 'returnhome':
            return(
            <div ref={ref}>
                <div style={{display: 'flex', marginBottom: '0px'}}>
                    <p style={{color: 'rgb(75, 144, 247)'}}>{directory}</p><p>cd</p>
                </div>
            </div>)
        case 'catFile': 
            if(directory == "cat aboutamanda.txt" || directory == "cat aboutamanda" ){
                return (
                    <p ref={ref}>
                        <div style={{display: 'flex', marginBottom: '0px'}}>
                            <p style={{color: 'rgb(75, 144, 247)'}}>amandaortiz $</p><p>{directory}</p>
                        </div>
                        {info.bio}
                    </p>
                )
            } else if(directory == "cat databases.txt" || directory == "cat databases"){
                return (
                    <div key={"databases"} ref={ref}>
                        <div style={{display: 'flex', marginBottom: '0px'}}>
                            <p style={{color: 'rgb(75, 144, 247)'}}>amandaortiz $</p><p>{directory}</p>
                        </div>
                      <ul className={Style.skills}>
                        {info.skills["databases"].map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  )
            } else if(directory == "cat languages.txt" || directory == "cat languages" ){
                return (
                    <div key={"languages"} ref={ref}>
                        <div style={{display: 'flex', marginBottom: '0px'}}>
                            <p style={{color: 'rgb(75, 144, 247)'}}>amandaortiz $</p><p>{directory}</p>
                        </div>
                      <ul className={Style.skills}>
                        {info.skills["languages"].map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  )
            } else if(directory == "cat frameworks.txt"|| directory == "cat frameworks"){
                return (
                    <div key={"frameworks"}>
                        <div style={{display: 'flex', marginBottom: '0px'}}>
                            <p style={{color: 'rgb(75, 144, 247)'}}>amandaortiz $</p><p>{directory}</p>
                        </div>
                      <ul className={Style.skills}>
                        {info.skills["frameworks"].map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  )
            } else if(directory == "cat tools.txt" || directory == "cat tools"){
                return (
                    <div key={"tools"}>
                        <div style={{display: 'flex', marginBottom: '0px'}}>
                            <p style={{color: 'rgb(75, 144, 247)'}}>amandaortiz $</p><p>{directory}</p>
                        </div>
                      <ul className={Style.skills}>
                        {info.skills["tools"].map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  )
            } else if(directory == "cat cloudServices.txt" || directory == "cat cloudServices"){
                return (
                    <div key={"cloudServices"}>
                        <div style={{display: 'flex', marginBottom: '0px'}}>
                            <p style={{color: 'rgb(75, 144, 247)'}}>amandaortiz $</p><p>{directory}</p>
                        </div>
                      <ul className={Style.skills}>
                        {info.skills["cloudServices"].map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  )
            }
        default: 
        // bash error
            return (
                <div>
                    <div style={{display: 'flex', marginBottom: '0px'}}>
                        <p style={{color: 'rgb(75, 144, 247)'}}>amandaortiz $</p><p>{directory}</p>
                    </div>
                    <p>
                        bash: command/file not found
                    </p>
                </div>
            )
    }
}

