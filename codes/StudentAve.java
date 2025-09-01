import java.util.Scanner;

public class StudentAve {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int test1,test2,test3,average;

        System.out.println("===================");
        System.out.println("====Enter Score====");
        System.out.println("===================");
        System.out.print("Test1: ");
        test1 = scan.nextInt();
        System.out.print("Test2: ");
        test2 = scan.nextInt();
        System.out.print("Test3: ");
        test3 = scan.nextInt();
        System.out.println("===================");

        average = test1 + test2 + test3;
        average /= 3;

        System.out.printf("Student Average: %s", average);        

    }
}
