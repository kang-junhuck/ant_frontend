import React, { useState, useEffect } from "react"
import { Text, Div, Icon, Anchor, Button, Input, Col, Row, Switch, Label } from "atomize"
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { FixedSizeList } from 'react-window';
const Column = () => {
  // props의 구조는 { data, style, index, isScrolling }으로 되어있다.

  return (
    <div>
      <ListItem> 
          <Paper>
            
            <Text
                textAlign="left"
                m={{ t: "0.5rem", b: "0.5rem" }}
                textWeight="600"
              >
                [외환브리핑]위험자산 선호 심리 둔화 속 美中 갈등..1100원 중반대 전망
              </Text>
              <Text
               fontFamily="ko"
               textWeight="650"              
              >
              원·달러 환율이 1100원 중반대에서 지지부진한 흐름을 이어갈 전망이다. 
              </Text>
              <Text
              textColor="gray900"
              >이데일리 | 2021-02-19 08:08</Text>
              
              </Paper>
      </ListItem>
      <ListItem>
      <Paper>
            
            <Text
                textAlign="left"
                m={{ t: "0.5rem", b: "0.5rem" }}
                textWeight="600"
              >
                [외환브리핑]위험자산 선호 심리 둔화 속 美中 갈등..1100원 중반대 전망
              </Text>
              <Text
               fontFamily="ko"
               textWeight="650"              
              >
              원·달러 환율이 1100원 중반대에서 지지부진한 흐름을 이어갈 전망이다. 
              </Text>
              <Text
              textColor="gray900"
              >이데일리 | 2021-02-19 08:08</Text>
              
              </Paper>
      </ListItem>
      <ListItem>
      <Paper>
            
            <Text
                textAlign="left"
                m={{ t: "0.5rem", b: "0.5rem" }}
                textWeight="600"
              >
                [외환브리핑]위험자산 선호 심리 둔화 속 美中 갈등..1100원 중반대 전망
              </Text>
              <Text
               fontFamily="ko"
               textWeight="650"              
              >
              원·달러 환율이 1100원 중반대에서 지지부진한 흐름을 이어갈 전망이다. 
              </Text>
              <Text
              textColor="gray900"
              >이데일리 | 2021-02-19 08:08</Text>
              
              </Paper>
      </ListItem>
      <ListItem>
      <Paper>
            
            <Text
                textAlign="left"
                m={{ t: "0.5rem", b: "0.5rem" }}
                textWeight="600"
              >
                [외환브리핑]위험자산 선호 심리 둔화 속 美中 갈등..1100원 중반대 전망
              </Text>
              <Text
               fontFamily="ko"
               textWeight="650"              
              >
              원·달러 환율이 1100원 중반대에서 지지부진한 흐름을 이어갈 전망이다. 
              </Text>
              <Text
              textColor="gray900"
              >이데일리 | 2021-02-19 08:08</Text>
              
              </Paper>
      </ListItem>
      <ListItem>
      <Paper>
            
            <Text
                textAlign="left"
                m={{ t: "0.5rem", b: "0.5rem" }}
                textWeight="600"
              >
                [외환브리핑]위험자산 선호 심리 둔화 속 美中 갈등..1100원 중반대 전망
              </Text>
              <Text
               fontFamily="ko"
               textWeight="650"              
              >
              원·달러 환율이 1100원 중반대에서 지지부진한 흐름을 이어갈 전망이다. 
              </Text>
              <Text
              textColor="gray900"
              >이데일리 | 2021-02-19 08:08</Text>
              
              </Paper>
      </ListItem>
      
    </div>
  );
};

function NewsForm1(){

  let [selectedSwitchValue, selectedSwitchValueChange] = useState(false);
  return(
  <Div
    d="flex"
    flexDir="column"
    border="1px solid"
    borderColor="gray200"
    //w={{ xs: "100%", md: "20.5rem" }}
    w={{ xs: "100%", md: "23rem" }}
    maxW="100%"
    pos={{ xs: "static", md: "absolute" }}
    m={{ xs: "1rem", md: "-2rem" }}
  
    left="0"
    //right="0"
    top="0"
    rounded="xl"
    h={{ lg: "24rem" }}
    bg="white"
    shadow="4"
    p="2rem"
  >
    <Row>
      <Col size="5">
    <Text
        textAlign="center"
        textSize="title"
        m={{ t: "0", b: "0" }}
        textWeight="800"
        fontFamily="ko"
      >
        오늘의 뉴스
      </Text>
      </Col>
      <Col size="7">
      <Label
            t="3rem"
             m={{ l: "4rem" }}
            onClick={() =>
                selectedSwitchValueChange( !selectedSwitchValue)
            }
            align="center"
            textWeight="600"
            // m={{ b: "1rem" }}
            >
      <Switch
                checked={selectedSwitchValue}
                inactiveColor="success400"
                activeColor="success700"
                activeShadow="5"
            />
            {selectedSwitchValue ? <Text>추천순</Text> : <Text>최신순</Text>}
      </Label>
      </Col>
      </Row>
    <FixedSizeList height={290} width={"100%"} itemSize={46} itemCount={1}>
    {Column}
    </FixedSizeList>
      

      
     </Div>

  )
}

export default  NewsForm1