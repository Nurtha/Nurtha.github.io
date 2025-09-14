import java.util.Scanner;

public class cal {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);

		boolean loop = true;
		double result = 0;
		
		while(loop){
			try {
				System.out.print("Enter 1st Num: ");
				double one_Num = scan.nextDouble();
				System.out.print("Enter 2nd Num: ");
				double two_Num = scan.nextDouble();
				try {
					System.out.println("Select Operation:");
					System.out.println("1. (+)");
					System.out.println("2. (-)");
					System.out.println("3. (*)");
					System.out.println("4. (/)");
					System.out.print("Num Selected: ");
					int Operation = scan.nextInt();

					switch (Operation) {
						case 1:
							result = one_Num + two_Num;
							break;
						case 2:
							result = one_Num - two_Num;
							break;								
						case 3:
							result = one_Num * two_Num;
							break;								
						case 4:
							result = one_Num / two_Num;
							break;								
					}
				}catch (Exception e){
					scan.next();
					System.out.println("Error please Enter Valid Operation");
				}
				
			} catch (Exception e) {
				scan.next();
				System.out.println("Error Please Enter Valid Num");
			}
			System.out.printf("Result: %.2f   \n", result);			
		}
		
	}
}
