import java.util.Scanner;
public class StudentAve { 
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int test1,test2,test3,average;
        System.out.println("===================");
        System.out.println("====Enter Score====");
        System.out.println("===================");
        System.out.print("Math Score: ");
        test1 = scan.nextInt();
        System.out.print("Science: ");
        test2 = scan.nextInt();
        System.out.print("English: ");
        test3 = scan.nextInt();
        System.out.println("===================");
        average = (test1 + test2 + test3) / 3;
        System.out.printf("Student Average: %s\n", average);
        if (average >= 90 && average <= 100) {
            System.out.println("Grade A");
        }else if (average >= 80 && average <= 89) {
            System.out.println("Grade B");            
        }else if (average >= 70 && average <= 79) {
            System.out.println("Grade C");            
        }else if (average >= 60 && average <= 69) {
            System.out.println("Grade D");
        }else {
            System.out.println("Grade F");
        }
    }
}
