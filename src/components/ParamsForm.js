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
    const [filter,setFilter]=useState([]);
    const [ordering,setOrdering]=useState("DATE_ASC");
    const handleCheckBoxChange=(event)=>{
        setBusinessCheked(event.target.checked);
        setFilter(event.target.checked?["Marketing","Communication"]:[]);
    }

    const handleFilterChange=(event)=>{
        setFilter([event.target.value]);
        setBusinessCheked(false);
    }

    const handleOrderrChange=(event)=>{
        setOrdering(event.target.value);
    }

    useEffect(()=>{
        setQueryVariables(
            {
                filters:filter.length>0? {
                        ...queryVariable.filters,types: filter
                    }:{},
                orderBy:ordering
            }
        );
    },[ordering,filter])


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
                    <InputLabel id="demo-customized-select-label">Filter</InputLabel>
                    <Select
                        className={classes.select}
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        value={filter}
                        onChange={handleFilterChange}
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
                    <InputLabel id="demo-customized-select-label">Ordre chronologique</InputLabel>
                    <Select
                        className={classes.select}
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        value={filter}
                        onChange={handleOrderrChange}
                    >
                        <MenuItem value="" disabled>
                            <em>ordre</em>
                        </MenuItem>
                        <MenuItem value="DATE_ASC"> ascendant</MenuItem>
                        <MenuItem value="DATE_DESC"> descendant</MenuItem>
                    </Select>
                </FormControl>
                    
            </ParamsContainer >
    )
}
