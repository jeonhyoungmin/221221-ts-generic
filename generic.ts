function GenericExample<AfterDecisionType>(
  params: AfterDecisionType
): AfterDecisionType {
  console.log("이것은 GenericType의 검사를 통과한 실행부분 입니다. ->", params);
  return params;
}

const first = GenericExample<string>("Hello World");
const second = GenericExample<number>(1234);
const third = GenericExample<boolean>(true);
