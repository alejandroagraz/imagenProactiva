<?php

namespace ImagenProactiva\GenerateFormBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use ImagenProactiva\GenerateFormBundle\Entity\Question;
use ImagenProactiva\GenerateFormBundle\Entity\Answer;

class GenerateFormController extends Controller
{

    public function indexAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('default/index.html.twig', array(
            'base_dir' => realpath($this->container->getParameter('kernel.root_dir').'/..').DIRECTORY_SEPARATOR,
        ));
    }
    
    public function viewQuestionAction($id)
    {
        $repository = $this->getDoctrine()->getRepository('ImagenProactivaGenerateFormBundle:Question');
        $question = $repository->find($id);
        if ($question) {
            $response = [
                'name' => $question->getQuestion,
                'answers' => []
            ];
            foreach ($question->getAnswers() as $answer) {
                $response['answers'][] = $answer->getAnswer();
            }
            return $this->render('ImagenProactivaGenerateFormBundle:Question:viewQuestion.html.twig',['question'=>$response]);
        }
        throw $this->createNotFoundException('Question not exist');
    }
    
    
    
    //====================================>>  <<=======================================
    
    public function checkboxAction()
    {

        return $this->render('ImagenProactivaGenerateFormBundle:Question:generateCheckbox.html.twig');
    }
    
    public function radioAction()
    {
        return $this->render('ImagenProactivaGenerateFormBundle:Question:generateRadioButtons.html.twig');
    } 
    
    public function textAction()
    {
        return $this->render('ImagenProactivaGenerateFormBundle:Question:generateTextArea.html.twig');
    }
    
    
  
  //====================================>>  <<=======================================  
    
    public function createQuestionAction(Request $request)
    {
        $answer = new Answer();

        if ($request->isXMLHttpRequest()) 
        {
            $data = json_decode($request->getContent(), true);
            $em = $this->getDoctrine()->getManager();
            foreach ($data as $key => $current) {
                if ($key==0) {
                    $question = new Question();
                    $question->setQuestion($current['value']);
                } else {
                    $answer = new Answer();
                    $answer->setAnswer($current['value']);
                    $answer->setQuestion($question);
                    $question->addAnswer($answer);
                    $em->persist($answer);
                }
            }
            $em->persist($question);
            $em->flush();
            return new jsonResponse('OK',200);
        }
        
        return new Response('Not Found',404);
    }
    
  public function viewAllQuestionsAction()
    {
        /*
        $em = $this->getDoctrine()->getManager();
        $repository = $em->getRepository('ImagenProactivaGenerateFormBundle:Question');
        $question = $repository->findAll();

        if ($question) {
            $response = [
                'name' => $question->getQuestion,
                'answers' => []
            ];
            foreach ($question->getAnswers() as $answer) {
                $response['answers'][] = $answer->getAnswer();
            }
            return $this->render('ImagenProactivaGenerateFormBundle:Question:viewQuestion.html.twig',['question'=>$response]);
        }
        throw $this->createNotFoundException('Question not exist');      
       */ 
       
       return new jsonResponse('Vista por definir',200);
        
    }

}
    
    