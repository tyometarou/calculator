import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
type ArraySearchPropsType = {
  searchArray: Array<string>; //文字列の配列
  searchRange: number; //前後N行
  searchWord: string; // 特定文字列
};

const filterArrayByWord = (searchArray: Array<string>, searchRange: number, searchWord: string): Array<string> => {
  //searchWordに該当する単語のkeyを、SearchArrayから抽出して配列に代入
  const indexesByWord = searchArray
    .map((s, i) => {
      if (s.match(searchWord)) {
        return i;
      }
    })
    .filter((i) => i);

  searchRange = searchRange + 1;
  return searchArray.filter((s, i) => {
    return indexesByWord.find((j) => i - searchRange < j && j < i + searchRange);
  });
};

const ArraySearch: React.FC<ArraySearchPropsType> = (props) => {
  const displayArray = filterArrayByWord(props.searchArray, props.searchRange, props.searchWord);

  //抽出結果をレンダリングする
  //-- Render --------------------------------------------------------
  return (
    <div>
      <h1>
        n={props.searchRange},searchWord={props.searchWord}
      </h1>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {displayArray.map((display: string, id) => {
          return (
            <ListItem key={id}>
              <ListItemText primary={display} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default React.memo(ArraySearch);
