import angular from 'angular';

import skillList from '../skillList/skillList';

import templateUrl from './userSkills.html';

class userSkillsController {
  seniorSkills(userId){
    return 6
  }

  intermediateSkills(userId){
    return 3;
  }

  juniorSkills(userId){
    return 2;
  }

  qualifications(userId){
    return 2;
  }
}

const name = 'userSkills';
export default angular.module(name, [
  skillList.name,
]).component(name, {
  templateUrl,
  controller: userSkillsController,
  controllerAs: name,
  bindings: {
    user: '<',
  },
});
