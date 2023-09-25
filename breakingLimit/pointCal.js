const fs = require("fs");

const data = [
  {
    이름: "박병규",
    "3KM (10P)": "12:50❤️",
    "5KM (15P)": "22:00❤️",
    "빌드업3KM (20P)": "510 430 400❤️",
  },
  {
    이름: "김상돈",
    "3KM (10P)": "15:30❤️",
    "5KM (15P)": "26:30❤️",
    "빌드업3KM (20P)": "550 530 500❤️",
  },
  {
    이름: "임채영",
    "3KM (10P)": "14:40❤️",
    "5KM (15P)": "23:50",
    "빌드업3KM (20P)": "530 500 430❤️",
  },
  {
    이름: "차조이",
    "3KM (10P)": "17:30❤️",
    "5KM (15P)": "29:30",
    "빌드업3KM (20P)": "640 610 550❤️",
  },
  {
    이름: "김현우",
    "3KM (10P)": "15:50❤️",
    "5KM (15P)": "26:40❤️",
    "빌드업3KM (20P)": "610 540 510❤️",
  },
  {
    이름: "손승우",
    "3KM (10P)": "15:10❤️",
    "5KM (15P)": "26:00❤️",
    "빌드업3KM (20P)": "550 520 450❤️",
  },
  {
    이름: "장윤희",
    "3KM (10P)": "17:10❤️",
    "5KM (15P)": "29:10",
    "빌드업3KM (20P)": "630 600 530❤️",
  },
  {
    이름: "허남정",
    "3KM (10P)": "13:00❤️",
    "5KM (15P)": "22:00",
    "빌드업3KM (20P)": "500 430 400❤️",
  },
  {
    이름: "김미선",
    "3KM (10P)": "15:50❤️",
    "5KM (15P)": "26:40❤️",
    "빌드업3KM (20P)": "600 530 500❤️",
  },
  {
    이름: "김기만",
    "3KM (10P)": "13:40❤️",
    "5KM (15P)": "23:10",
    "빌드업3KM (20P)": "520 500 430❤️",
  },
  {
    이름: "김종욱",
    "3KM (10P)": "13:20❤️",
    "5KM (15P)": "22:40",
    "빌드업3KM (20P)": "510 440 420❤️",
  },
  {
    이름: "김영삼",
    "3KM (10P)": "14:00❤️",
    "5KM (15P)": "23:00❤️",
    "빌드업3KM (20P)": "520 450 420❤️",
  },
  {
    이름: "최아영",
    "3KM (10P)": "16:10❤️",
    "5KM (15P)": "26:40",
    "빌드업3KM (20P)": "610 540 510❤️",
  },
  {
    이름: "이수민",
    "3KM (10P)": "17:00❤️",
    "5KM (15P)": "28:50❤️",
    "빌드업3KM (20P)": "630 600 530❤️",
  },
  {
    이름: "유승근",
    "3KM (10P)": "12:50",
    "5KM (15P)": "22:00",
    "빌드업3KM (20P)": "500 430 400❤️",
  },
  {
    이름: "민종희",
    "3KM (10P)": "13:50❤️",
    "5KM (15P)": "22:50",
    "빌드업3KM (20P)": "520 450 420❤️",
  },
  {
    이름: "전영준",
    "3KM (10P)": "13:50❤️",
    "5KM (15P)": "22:50",
    "빌드업3KM (20P)": "520 450 420❤️",
  },
  {
    이름: "송유경",
    "3KM (10P)": "16:00❤️",
    "5KM (15P)": "26:20",
    "빌드업3KM (20P)": "600 530 500❤️",
  },
  {
    이름: "김인경",
    "3KM (10P)": "17:00",
    "5KM (15P)": "29:00",
    "빌드업3KM (20P)": "630 600 530",
  },
  {
    이름: "유예진",
    "3KM (10P)": "15:50❤️",
    "5KM (15P)": "26:30",
    "빌드업3KM (20P)": "600 530 500❤️",
  },
  {
    이름: "김현주",
    "3KM (10P)": "18:10",
    "5KM (15P)": "30:30",
    "빌드업3KM (20P)": "650 620 550❤️",
  },
  {
    이름: "김태산",
    "3KM (10P)": "12:30",
    "5KM (15P)": "21:20",
    "빌드업3KM (20P)": "500 420 350",
  },
  {
    이름: "박은경",
    "3KM (10P)": "14:40❤️",
    "5KM (15P)": "23:50❤️",
    "빌드업3KM (20P)": "530 500 430",
  },
  {
    이름: "신도안",
    "3KM (10P)": "15:40❤️",
    "5KM (15P)": "26:10",
    "빌드업3KM (20P)": "550 520 450❤️",
  },
  {
    이름: "민성훈",
    "3KM (10P)": "13:00",
    "5KM (15P)": "22:00",
    "빌드업3KM (20P)": "510 440 410",
  },
  {
    이름: "최명지",
    "3KM (10P)": "17:00",
    "5KM (15P)": "29:00",
    "빌드업3KM (20P)": "630 600 530❤️",
  },
  {
    이름: "선장훈",
    "3KM (10P)": "17:00❤️",
    "5KM (15P)": "29:00❤️",
    "빌드업3KM (20P)": "630 600 530❤️",
  },
  {
    이름: "서효현",
    "3KM (10P)": "17:30❤️",
    "5KM (15P)": "29:30",
    "빌드업3KM (20P)": "630 600 540",
  },
  {
    이름: "윤정운",
    "3KM (10P)": "12:40❤️",
    "5KM (15P)": "21:40❤️",
    "빌드업3KM (20P)": "500 420 350❤️",
  },
  {
    이름: "이수지",
    "3KM (10P)": "15:40❤️",
    "5KM (15P)": "26:30❤️",
    "빌드업3KM (20P)": "600 530 500❤️",
  },
  {
    이름: "양현정",
    "3KM (10P)": "16:10",
    "5KM (15P)": "27:00",
    "빌드업3KM (20P)": "610 540 510❤️",
  },
  {
    이름: "오정환",
    "3KM (10P)": "13:10❤️",
    "5KM (15P)": "22:20",
    "빌드업3KM (20P)": "510 440 410❤️",
  },
  {
    이름: "이휘강",
    "3KM (10P)": "15:50",
    "5KM (15P)": "26:40",
    "빌드업3KM (20P)": "600 530 500❤️",
  },
  {
    이름: "박희준",
    "3KM (10P)": "13:50❤️",
    "5KM (15P)": "23:20❤️",
    "빌드업3KM (20P)": "520 450 420❤️",
  },
  {
    이름: "박도영",
    "3KM (10P)": "16:00❤️",
    "5KM (15P)": "26:40",
    "빌드업3KM (20P)": "600 530 500❤️",
  },
];

const newData = data.map((entry) => {
  // 3KM, 5KM, 빌드업3KM의 포인트를 초기화합니다.
  let points3KM = 0;
  let points5KM = 0;
  let pointsBuildUp3KM = 0;

  // "3KM (10P)" 포인트 계산
  const match3KM = entry["3KM (10P)"].match(/(\d+)❤️/);
  if (match3KM) {
    points3KM = 10; // 하트가 있는 경우 10포인트 부여
  }

  // "5KM (15P)" 포인트 계산
  const match5KM = entry["5KM (15P)"].match(/(\d+)❤️/);
  if (match5KM) {
    points5KM = 15; // 하트가 있는 경우 15포인트 부여
  }

  // "빌드업3KM (20P)" 포인트 계산
  const matchBuildUp3KM = entry["빌드업3KM (20P)"].match(/(\d+)❤️/g);
  if (matchBuildUp3KM) {
    matchBuildUp3KM.forEach((match) => {
      pointsBuildUp3KM += 20; // 하트가 있는 경우 20포인트씩 부여
    });
  }

  // 각 포인트를 객체에 추가한 후 반환합니다.
  const updatedEntry = {
    ...entry,
    "3KM (10P)": points3KM,
    "5KM (15P)": points5KM,
    "빌드업3KM (20P)": pointsBuildUp3KM,
  };

  // 총점 계산
  const totalPoints = points3KM + points5KM + pointsBuildUp3KM;

  // 총점을 객체에 추가한 후 반환합니다.
  return {
    ...updatedEntry,
    총점: totalPoints,
  };
});

// 데이터를 JSON 형식으로 저장할 파일 경로 지정
const outputFilePath = "output.json";

// JSON 형식으로 데이터 저장
fs.writeFile(outputFilePath, JSON.stringify(newData, null, 2), (err) => {
  if (err) {
    console.error("데이터를 저장하는 동안 오류가 발생했습니다.", err);
  } else {
    console.log(`데이터가 ${outputFilePath} 파일에 성공적으로 저장되었습니다.`);
  }
});

// 팀 데이터를 구성
const teams = {
  "팀 A": [],
  "팀 B": [],
  "팀 C": [],
  "팀 D": [],
  "팀 E": [],
};

// 데이터를 7개씩 나누어 팀에 할당
let teamIndex = 0;
newData.forEach((entry, index) => {
  teams[`팀 ${String.fromCharCode(65 + teamIndex)}`].push(entry);
  if (index % 7 === 6) {
    teamIndex++;
  }
});

const teamScores = {};
for (const teamName in teams) {
  const teamEntries = teams[teamName];
  const teamScore = teamEntries.reduce((total, entry) => total + entry.총점, 0);
  teamScores[teamName] = teamScore;
}

// 팀 데이터와 합산점수를 JSON 형식으로 저장
const jsonContent = JSON.stringify({ teams, teamScores }, null, 2);
fs.writeFileSync("teams.json", jsonContent);

console.log("팀 데이터와 합산점수를 teams.json 파일로 저장했습니다.");

// "총점"이 45인 사람만 추출하여 이름을 저장
const selectedNames = [];
newData.forEach((entry) => {
  if (entry.총점 === 45) {
    selectedNames.push(entry.이름);
  }
});

const selectedNamesFilePath = "selectedNames.json";
fs.writeFileSync(selectedNamesFilePath, JSON.stringify(selectedNames, null, 2));

console.log(
  `"총점"이 45인 사람의 이름이 ${selectedNamesFilePath} 파일에 저장되었습니다.`
);
