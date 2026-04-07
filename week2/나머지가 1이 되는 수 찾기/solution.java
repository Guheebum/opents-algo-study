class Solution {
    public int solution(int n) {
        int answer = 0;
        
        // 매개변수 2부터 차례대로 나눠서 나머지가 1인 값 구하기
        for (int i = 2; i < n; i++) {
			
        	if(n%i == 1) {
        		answer = i;
        		break;
        	}
		    }
        return answer;
    }
}
