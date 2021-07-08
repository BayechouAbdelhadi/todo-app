import React,{useEffect,useState} from 'react'
import styled from '@emotion/styled'
import {makeStyles} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles({
    select :{
        width:200,
        marginRight:20
    }
})

const ParamsContainer =styled.div`
    display :flex;
    justify-content: space-between;
    margin-bottom:20px;
    margin-top: 20px;
`
export default function ParamsForm({queryVariable,setQueryVariables}) {
    const classes=useStyles()
    const [businessCheked, setBusinessCheked] = useState(false);
    const [types,setTypes]=useState([]);
    const [isDone,setIsDone]=useState("");
    const [ordering,setOrdering]=useState("DATE_ASC");

    const handleCheckBoxChange=(event)=>{
        setBusinessCheked(event.target.checked);
        setTypes(event.target.checked?["Marketing","Communication"]:[]);
    }

    const handleTypesChange=(event)=>{
        setTypes([event.target.value]);
        setBusinessCheked(false);
    }

    const handleOrderChange=(event)=>{
        setOrdering(event.target.value);
    }
    const handleIsdoneChange=(event)=>{
        setIsDone(event.target.value);
    }

    const resetFilters=()=>{
        setBusinessCheked(false);
        setTypes([]);
        setIsDone("");
    }

    useEffect(()=>{
        var temQueryVariables={
            orderBy:ordering,
            filters:{}
        };
        if(types.length>0 )
            temQueryVariables.filters.types =types;
        if(isDone!=="")
            temQueryVariables.filters.isDone =isDone;
        console.log(temQueryVariables)
        setQueryVariables(temQueryVariables);
    },[ordering,types,isDone])


    return (
        <ParamsContainer  >
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={businessCheked}
                            onChange={handleCheckBoxChange}
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="only Business"       
                />
                <FormControl  >
                    <InputLabel id="demo-customized-select-label">Types</InputLabel>
                    <Select
                        className={classes.select}
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        value={types}
                        onChange={handleTypesChange}
                    >
                        <MenuItem value="" disabled>
                            <em>Filter</em>
                        </MenuItem>
                        <MenuItem value="Communication">Communication</MenuItem>
                        <MenuItem value="Marketing">Marketing</MenuItem>
                        <MenuItem value="RH">RH</MenuItem>
                        <MenuItem value="Tech">Tech</MenuItem>
                    </Select>
                </FormControl>
                <FormControl >
                    <InputLabel id="demo-customized-select-label">Ordre </InputLabel>
                    <Select
                        className={classes.select}
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        value={ordering}
                        onChange={handleOrderChange}
                    >
                        <MenuItem value="" disabled>
                            <em>ordre</em>
                        </MenuItem>
                        <MenuItem value="DATE_ASC"> ascendant</MenuItem>
                        <MenuItem value="DATE_DESC"> descendant</MenuItem>
                    </Select>
                </FormControl>
                <FormControl >
                    <InputLabel id="demo-customized-select-label">Status </InputLabel>
                    <Select
                        className={classes.select}
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        value={isDone}
                        onChange={handleIsdoneChange}
                    >
                        <MenuItem value="" disabled>
                            <em>status</em>
                        </MenuItem>
                        <MenuItem value={true}> fait</MenuItem>
                        <MenuItem value={false}> pas fait</MenuItem>
                    </Select>
                </FormControl>   
                <button onClick={resetFilters}>Réinitialiser</button>
            </ParamsContainer >
    )
}
