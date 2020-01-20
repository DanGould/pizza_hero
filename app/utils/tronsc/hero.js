import { pzHeroContract } from './smartContract';

export const heroesOfOwner = async accountAddress => {
  let result = await pzHeroContract()
    .heroesOfOwner(accountAddress)
    .call();
  result = result.ownerHeroes;
  return result;
};

export const getHero = async id => {
  const result = await pzHeroContract()
    .getHero(id)
    .call();
  return result;
};

export const balanceOfOwner = async accountAddress => {
  let result = await pzHeroContract()
    .balanceOf(accountAddress)
    .call();
  result = result.count;
  return result;
};