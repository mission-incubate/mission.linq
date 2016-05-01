[![Build Status](https://travis-ci.org/mission-io/mission.linq.svg?branch=master)](https://travis-ci.org/mission-io/mission.linq)
[![Build status](https://ci.appveyor.com/api/projects/status/pc4yiso1dkomtd5v?svg=true)](https://ci.appveyor.com/project/natarajanmca11/mission-linq)
[![Dependency Status](https://david-dm.org/mission-io/mission.linq.svg)](https://david-dm.org/mission-io/mission.linq)
[![devDependency Status](https://david-dm.org/mission-io/mission.linq/dev-status.svg)](https://david-dm.org/mission-io/mission.linq#info=devDependencies)

# mission.linq
This library is a implementation of LINQ methods available on Array or [] in Typescript.

### Installation
```
npm install mission.linq
```

###Import 
```
import 'mission.linq';
```
###Usage
####All
```javascript
 let list: Array<number>= [1, 2, 3, 4, 5];
 let res:boolean = list.All((x) => x < 6);
```
####Add
 ```javascript
 list.Add(6);
```

# Running tests
```bash
npm test

# Debug - In two different shell windows
npm run build.test.watch      # 1st window
npm run karma.start           # 2nd window
```

# Contributors

[<img alt="natarajanmca11" src="https://avatars.githubusercontent.com/u/9244766?v=3&s=117" width="117">](https://github.com/natarajanmca11) | [<img alt="sakthi2579" src="https://avatars.githubusercontent.com/u/17495860?v=3&s=117" width="117"](https://github.com/sakthi2579)