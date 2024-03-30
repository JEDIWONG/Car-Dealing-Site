import { useState } from "react"; 
import Card from "@mui/material/Card"; 
import Collapse from "@mui/material/Collapse"; 
import CardHeader from "@mui/material/CardHeader"; 
import Container from "@mui/material/Container"; 
import CardContent from "@mui/material/CardContent"; 
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"; 
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { IconButton, colors } from "@mui/material";

function CollapseCard(props){

    const [open, setOpen] = useState(false);

    return ( 
        <div>
            <Card onClick={() => setOpen(!open)} sx={{width: 800, border: "1px solid rgba(211,211,211,0.6)"}}>
                
                <CardHeader title= {props.title} titleTypographyProps={{variant:'h7',fontWeight:"bold",fontFamily:"verdana"}}
                action={ 
                    <IconButton 
                        
                        aria-label="expand"
                        size="small"
                    > 

                        {open ? <KeyboardArrowUpIcon /> 
                                : <KeyboardArrowDownIcon />}
                    
                    </IconButton> 
                }
                ></CardHeader>

                <div>
                    <Collapse in={open} timeout="auto" sx={{height:100}} unmountOnExit> 
                            <CardContent> 
                                <Container sx={{  
                                    height: "fit-content",  
                                    lineHeight: "fit-content"
                                }}> 
                                <div style={{fontSize:19,color:"grey", textAlign:"top"}}>
                                    {props.desc}
                                </div> 
                                </Container> 
                            </CardContent> 
                    </Collapse>
                </div>   
            </Card>
        </div>
    );
}

export default CollapseCard; 
