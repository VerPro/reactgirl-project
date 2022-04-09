import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { ChangeEvent, useState } from 'react';

//možná ten list nacpat do FB a vyexportovat sem?
const listOfTastes: string[] = [
  'Lesní plody',
  'Citrusy',
  'Exotické ovoce',
  'Peckoviny',
  'Květy',
  'Bylinný',
  'Travnatost',
  'Koření',
  'Sladkost',
  'Slanost',
  'Vegetálnost',
  'Pikantnost',
  'Zemitost',
  'Čokoláda',
  'Kouřovitost',
  'Praženost',
  'Dřevitost',
  'Svíravost',
  'Ořechy',
];
export const TasteCharacter = () => {
  const [tasteCharacter, setTasteCharacter] = useState<string[]>([]);
  const handleTeaCharacterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const index = tasteCharacter.indexOf(e.target.value);
    if (index === -1) {
      setTasteCharacter([...tasteCharacter, e.target.value]);
    } else {
      setTasteCharacter(
        tasteCharacter.filter((taste: string) => taste !== e.target.value),
      );
    }
  };

  return (
    <FormControl>
      <FormLabel component="legend">Chuťový charakter</FormLabel>
      <FormGroup>
        {listOfTastes.map((taste: string) => {
          return (
            <FormControlLabel
              key={taste}
              label={taste}
              value={taste}
              control={
                <Checkbox
                  key={taste}
                  value={taste}
                  checked={tasteCharacter.includes(taste)}
                  onChange={handleTeaCharacterChange}
                />
              }
            />
          );
        })}
      </FormGroup>
    </FormControl>
  );
};
